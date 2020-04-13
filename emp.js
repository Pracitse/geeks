const emp = require("/Users/bhagyalakshmi/Documents/hrms/src/Models/employee.js");
const express = require("express");
const router = express.Router();
const Emp = emp.Emp;
router.get("/empl", (req, res) => {
  Emp.findAll({})
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Not Found"
      });
    });
});
router.get("/emplone", (req, res) => {
  //const eid = req.params.id;
  id = "eid";
  Emp.findOne({
    where: {
      id: 1
    },
    attributes: ["name", "eid", "email"]
  })
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "given eid is not in the employee table"
      });
    });
});
router.patch("/:eid", (req, res) => {
  const id = res.params.eid;
  Emp.update(req.body, {
    where: {
      eid: id
    }
  })
    .then(name => {
      if (name.localeCompare("sweety") == 0) {
        res.send({
          message: "name is successfully updated"
        });
      } else {
        res.send({
          message: "name is not updated"
        });
      }
    })
    .catch(error => {
      res.status(500).send({ message: "Error getting while updating" });
    });
});

module.exports = router;
///Users/bhagyalakshmi/Documents/hrms/src/api/hrms/emp.js
