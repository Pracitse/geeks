const Xlsx = require("xlsx");
const mapping = require("./mapping.js");
const http = require("http");
const app = require("./app.js");
const emp = require("/Users/bhagyalakshmi/Documents/hrms/src/api/routes/utils/crudoperations/employee.js");
const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/api/routes/utils/crudoperations/company.js");
async function processing() {
  const workbook = Xlsx.readFile("/Users/bhagyalakshmi/Downloads/sheet.xlsx");
  const sheet_name_list = workbook.SheetNames;
  data = Xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
  let i, record, relation, result;
  for (i = 0; i < 17; i++) {
    relation = mapping.map[i];
    record = data[i];
    console.log(record);
    if (relation.localeCompare("employees") == 0) {
      result = await emp.main(record);
    } /**else if (relation.localeCompare("companies") == 0) {
      result = await comp.main(record);
    } else if (relation.localeCompare("clients") == 0) {
      result = await comp.main(record);
    } else {
      result = await comp.main(record);
    }*/
    const server = http.createServer(app);
    server.listen(4003, () => {
      console.log("server runs on port 4005");
    });
  }
}
processing();
module.exports = { processing };
