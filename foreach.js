arr = ["bhagya", "flower", "fruit"];
arr.forEach(element => {
  console.log(element);
});
obj = {
  name: "bhagya",
  id: 568,
  email: "bhagya@gmail.com"
};
Object.keys(obj).forEach(key => {
  console.log(key + " : " + obj[key]);
});
Object.entries(obj).forEach((key, value) => {
  console.log(key + " : " + value);
});
/**Object.freeze(obj).forEach(key => {
  console.log(key);
});*/
