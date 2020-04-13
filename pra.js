//const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/Models/company.js");

/**name = "bhagyasds";
if (name.localeCompare("bhagya") == 0) {
  console.log("two strings are equal");
} else {
  console.log("two strings are not equal");
}*/
/**const Comp = comp.Company;
regno = "123ab";
Comp.findByPk(regno).then(data => {
  console.log(data);
});
//comp_name = "everest";
Comp.findOne().then(data => {
  console.log(data.get("comp_name"));
});*/
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/appl.js");
const server = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/main.js");
console.log(server);
