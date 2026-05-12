# RedLab Studio — Frontend Tracking Implementation Guide

এই ডকুমেন্টটি ফ্রন্টএন্ড ডেভেলপারদের জন্য। ব্যাকএন্ডে Server-Side Tracking (Registration, Checkout, Purchase) ইমপ্লিমেন্ট করা হয়েছে। ফ্রন্টএন্ড থেকে আপনাকে শুধুমাত্র GTM (Google Tag Manager) এর জন্য ইউজারের বিভিন্ন অ্যাকশনে `dataLayer`-এ ডেটা পুশ করতে হবে।

---

## 🛠 ১. গ্লোবাল সেটআপ (খুবই গুরুত্বপূর্ণ)

### ১.১ URL Parameters ক্যাপচার করা
ইউজার যখন ফেসবুক বা গুগল অ্যাড থেকে ওয়েবসাইটে আসবে, তখন URL-এ `fbclid` বা `gclid` থাকতে পারে। পেজ লোড হওয়ার সাথে সাথে এগুলো ধরে Local Storage বা Cookie তে সেভ করে রাখতে হবে।

```javascript
// ল্যান্ডিং পেজের useEffect বা _app.tsx এ:
const urlParams = new URLSearchParams(window.location.search);
const fbclid = urlParams.get('fbclid');
const gclid = urlParams.get('gclid');

if (fbclid) {
  // Save as _fbc cookie format: fb.1.timestamp.fbclid
  const fbcValue = `fb.1.${Date.now()}.${fbclid}`;
  document.cookie = `_fbc=${fbcValue}; path=/; max-age=7776000;`; // 90 days
}
if (gclid) {
  localStorage.setItem('gclid', gclid);
}
```

### ১.২ SHA256 Hashing Utility
কিছু ইভেন্টে email এবং phone number `sha256` হ্যাশ করে পাঠাতে হতে পারে। ফ্রন্টএন্ডে এটি ব্যবহার করতে পারেন:
```bash
npm install js-sha256
```
```javascript
import { sha256 } from 'js-sha256';

export const hashEmail = (email) => email ? sha256(email.toLowerCase().trim()) : undefined;
export const hashPhone = (phone) => {
  if (!phone) return undefined;
  const normalized = phone.startsWith('+880') ? phone : `+880${phone.replace(/^0/, '')}`;
  return sha256(normalized);
};
```

**গ্লোবাল `dataLayer` ডিক্লেয়ারেশন (index.html বা _document.tsx এ):**
```html
<script>
  window.dataLayer = window.dataLayer || [];
</script>
```

---

## 🟢 ২. Frontend Events (DataLayer Push)

যখন ইউজার নিচের অ্যাকশনগুলো করবে, তখন শুধু GTM-এর জন্য `window.dataLayer` এ ডেটা পুশ করতে হবে। এর জন্য কোনো ব্যাকএন্ড API কল করার প্রয়োজন নেই।

### E01 — Page View
Next.js বা React Router-এর route change ইভেন্টে:
```javascript
window.dataLayer.push({ ecommerce: null }); // clear previous data
window.dataLayer.push({
  event: 'page_view',
  page_path: window.location.pathname
});
```

### E02 — View Content (৫০% স্ক্রল বা ৩০ সেকেন্ড)
ল্যান্ডিং পেজে `IntersectionObserver` বা `setTimeout` ব্যবহার করে:
```javascript
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'view_item',
  ecommerce: {
    currency: 'BDT',
    value: 7500,
    items: [{
      item_id: 'course_video_editing_mastery',
      item_name: 'Video Editing Mastery',
      price: 7500
    }]
  }
});
```

### E09, E10, E11, E12 — Video Progress (25%, 50%, 75%, 95%)
Vimeo Player-এ এই পার্সেন্টেজগুলোতে পৌঁছালে:
```javascript
window.dataLayer.push({
  event: 'video_progress',
  video_percent: 50, // Update with 25, 50, 75, or 95
  video_id: 'free_class_1',
  video_title: 'VOD Editing Workflow Intro'
});
```

### E13 — All Videos Watched
ইউজার যখন ৩টি ফ্রি ভিডিওই দেখা শেষ করবে:
```javascript
window.dataLayer.push({
  event: 'all_videos_watched',
  video_id: 'free_class_3',
  all_videos_complete: true
});
```

### E14 — Enroll Button Click (Watch Page-এ)
Watch Video পেজে "Enroll Now" বাটনে ক্লিক করলে:
```javascript
const handleEnrollClick = (coursePrice) => {
  const user = getLoggedInUser();
  
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: 'enroll_button_click',
    user_data: {
      em: hashEmail(user?.email),
      ph: hashPhone(user?.phone),
      external_id: user?._id ? sha256(user._id) : undefined,
    },
    ecommerce: {
      currency: 'BDT',
      value: coursePrice,
    }
  });
  
  // এরপর checkout পেজে যাওয়ার কোড...
};
```

### E05 — Add Payment Info (SSL থেকে ফেরার পর)
SSLCommerz পেজ থেকে ইউজার যখন আপনার ওয়েবসাইটের Success/Fail পেজে ব্যাক করবে, তখন পেজ লোড হওয়ার সাথে সাথে:
```javascript
// on success/fail page mount
const trackPaymentInfo = (orderAmount, paymentMethod) => {
  const user = getLoggedInUser();
  
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: 'add_payment_info',
    user_data: {
      em: hashEmail(user?.email),
      external_id: user?._id ? sha256(user._id) : undefined,
    },
    ecommerce: {
      currency: 'BDT',
      value: orderAmount,
      payment_type: paymentMethod // e.g., 'bkash', 'card'
    }
  });
};
```

### E15 — Offer Section View
'Again Offering' সেকশনটি ইউজারের স্ক্রিনে (Viewport) এলে:
```javascript
// IntersectionObserver triggered
window.dataLayer.push({
  event: 'offer_section_view',
  section_name: 'Again Offering'
});
```

---
**মনে রাখবেন:** Registration, Checkout Initiate, Purchase, এবং Payment Failed — এই ৪টি সবচেয়ে গুরুত্বপূর্ণ ইভেন্ট ব্যাকএন্ড থেকে সরাসরি হ্যান্ডেল করা হচ্ছে। ফ্রন্টএন্ড থেকে এগুলো নিয়ে আপনাকে কিছুই করতে হবে না।
