// general object access
const obj = {
    nextLevel : {courseId : "level2"},
    "programming hero" : {courseId : "level1"}
}
obj.ultraLevel = {courseId : "level5"}

// console.log(obj);
// console.log(obj.nextLevel);
// console.log(obj["programming hero"]);

const course1 = {name : "Programming Hero"}
const course2 = {name : "Next Level Development"}

// Map Access
  
const map = new Map();
map.set(course1, {courseId : "level1"})
map.set(course2, {courseId : "level2"})

// map.clear()
// console.log(map.size);
// console.log(map.has(course1))
// map.forEach((value, key) => (key.name = "YYYY " + key.name))
// console.log(map.keys())
// console.log([...map.values()])


// console.log(map)