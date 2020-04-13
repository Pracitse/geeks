const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/Models/company.js");
const Comp = comp.Company;
const Sequelize = require("sequelize");
const sequelize = new Sequelize("hrms_db", "postgres", "ChangeMe", {
  dialect: "postgres",
  host: "localhost",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
/**sequelize.query("SELECT * FROM companies", { model: Comp }).then(data => {
  console.log(JSON.stringify(data));
});
sequelize.query("SELECT 1").then(data => {
  console.log(JSON.stringify(data));
});
sequelize
  .query("select * from companies where comp_name=:value", {
    raw: true,
    replacements: { value: "everest" }
  })
  .then(data => {
    console.log(data);
  });*/
sequelize
  .query(
    "select comp_name,count(eid) as no_of_empl from companies,employees where comp_name=:value and comp_reg_no=reg_no group by comp_name",
    {
      raw: true,
      replacements: { value: "everest" }
    }
  )
  .then(data => {
    console.log(data);
  });
