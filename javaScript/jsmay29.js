const library = [
  {
    title: "harry poter",
    author: "Aman",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "ramayan",
    author: "tulshidaas ji",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "geta",
    author: "vyas",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

console.log(library);

const {title:firstbook} = library[0];

console.log(firstbook);

const jsonobj = JSON.stringify(library);
console.log(jsonobj);