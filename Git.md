Developer Git Branch Cheat Sheet

1. Start a new feature

Always start from updated main:

git switch main
git pull origin main

Create a new feature branch:

git switch -c feature/login

Now you're working on:

feature/login


---

2. Work on the feature

Code normally.

Check what changed:

git status

Stage:

git add .

Commit:

git commit -m "feat: add login page"

Push the branch to GitHub:

git push -u origin feature/login

After the first push, just:

git push


---

3. Continue working

Make more changes:

git add .
git commit -m "feat: add login validation"
git push

You can make multiple commits.


---

4. Feature finished → Merge into main

First go back to main:

git switch main

Update main:

git pull origin main

Merge your feature:

git merge feature/login

Push the updated main:

git push origin main

Now your feature is part of main.


---

5. Delete the finished feature branch

Local:

git branch -d feature/login

GitHub:

git push origin --delete feature/login

You can delete branches after merging because the commits are already part of main.


---

🔥 Complete Workflow — Memorize This

For every new feature:

# 1. Update main
git switch main
git pull origin main

# 2. Create feature branch
git switch -c feature/navbar

# 3. Work...
# edit your files

# 4. Save your work
git add .
git commit -m "feat: add navbar"

# 5. Push feature branch
git push -u origin feature/navbar

# 6. Finish feature
git switch main
git pull origin main

# 7. Merge feature
git merge feature/navbar

# 8. Push main
git push origin main

# 9. Delete old branch
git branch -d feature/navbar
git push origin --delete feature/navbar

Then next feature:

git switch main
git pull origin main
git switch -c feature/cart

And repeat.


---

🧠 Your Git mental model

main
                   │
          ┌────────┴────────┐
          ↓                 ↓
   feature/navbar      feature/cart
          │                 │
       coding            coding
          │                 │
        commit            commit
          │                 │
         push              push
          │                 │
          └────── merge ────┘
                   ↓
                  main

Branch naming

Use:

feature/navbar
feature/login
feature/register
feature/product-page
feature/cart
feature/checkout
feature/payment
feature/admin-dashboard

Bug fixes:

fix/navbar-mobile
fix/login-validation
fix/cart-total

The 5 commands you should memorize first

git switch main
git pull
git switch -c feature/name
git switch feature/name
git merge feature/name

And your daily feature cycle is basically:

main
 ↓
create feature branch
 ↓
code
 ↓
commit
 ↓
push
 ↓
merge → main
 ↓
delete feature branch

For a solo developer, this is enough. You can learn rebase, stash, reset, revert, and conflict resolution after you're comfortable with this workflow.
