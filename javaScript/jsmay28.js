const obj = { name: "aman" };

console.log(typeof obj);

const person = {
  name: "jonh",
  age: 23,
  iseligible: true,
  address: {
    city: "bhopal",
    state: "mp",
  },
  hobby: ["chess", "singing"],
};

console.log(person.name);
console.log(person["age"]);

person.iseligible = false;

//constructor

const student = new Object();

student.id = 1;
student.name = "john";

console.log(student);

//array of objects

const movies = [
  {
    title: "kgf",
    relese: 2025,
  },
  {
    title: "harry Potter",
    relese: 2010,
  },
  {
    title: "stranger things",
    relese: 2020,
  },
];

console.log(movies[1].title);
console.log(movies[2].relese);

//spred operator

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

//de structuring

const todo = {
  id: 1,
  title: "something",
  user: "aman",
};

const { id: i, title: t, user: u } = todo;

console.log(i);
console.log(t);

const person2 = {
    name: "jonh",
    age:23,
    iseligible : true,
}

const jsonuser = JSON.stringify(person2);
console.log(person2);
console.log(jsonuser);

const backtoobj = JSON.stringify(jsonuser);