let newArr = [];

const tail = (arr) => {
  newArr = [...arr];
  console.log(newArr.slice(1, newArr.length));
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
