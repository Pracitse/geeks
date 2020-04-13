const express = require("express");
const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/Models/company.js");
const router = express.Router();
const Comp = comp.Company;
router.get("/:regno", (req, res) => {
  const regNo = req.params.regno;
  Comp.findByPk(regNo, {
    attributes: ["comp_name", "reg_no", "website", "address"]
  })
    .then(data => {
      res.status(200);
      res.send(data);
      //console.log(data.toJSON().comp_name);
      //console.log("hii bhagya");
      //console.log(data.toJSON().comp_name);
      //return res;
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Not found given regNo"
      });
    });
});
router.get("/", (req, res) => {
  Comp.findAll({
    attributes: ["comp_name", "reg_no", "website", "address"]
  })
    .then(data => {
      res.send(data);
      res.status(200);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
