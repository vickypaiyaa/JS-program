const object1 = {
  name: "abc",
  age: 20,
};

const object2 = {
  department: "newDepartment",
};

const newObject = Object.assign(object1, object2);
console.log(newObject);

const object3 = { ...object1, ...object2 };
console.log(object3);
