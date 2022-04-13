let args = process.argv;
args = args.slice(2,4);

const sum = (a, b) => {
  return Number(a) + Number(b);
};

console.log(sum(args[0], args[1]));