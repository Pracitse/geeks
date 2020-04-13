const express = require("express");
const router = express.Router();
const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/Models/company.js");
const Comp = comp.Company;
router.get("/", (req, res) => {
  Comp.findAll()
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({ message: error.message || "The table is empty" });
    });
});
router.get("/:regno", (req, res) => {
  const regNo = req.params.regno;
  Comp.findByPk(regNo)
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Not found given regNo"
      });
    });
});
router.delete("/:regno", (req, res) => {
  const regNo = req.params.regno;
  Comp.destroy({
    where: {
      reg_no: regNo
    }
  })
    .then(data => {
      res.send(200);
      res.send(data);
      res.send("record successfully recorded");
    })
    .catch(err => {
      res.status(500);
      res.send({
        error: {
          message: err.message || "Not found"
        }
      });
    });
});
router.patch("/:regno", (req, res) => {
  const reg_num = req.params.regno;
  Comp.update(
    { comp_name: "wipro" },
    {
      where: {
        reg_no: reg_num
      }
    }
  )
    .then(data => {
      res.status(200);
      res.send("successfully updated");
    })
    .catch(error => {
      res.status(500);
      res.send({
        error: {
          message: err.message || "Not Found"
        }
      });
    });
});
router.post("/", (req, res) => {
  const record = {
    comp_name: req.body.comp_name,
    reg_no: req.body.reg_num,
    website: req.body.website,
    address: req.body.address,
    phno: req.body.phno
  };
  Comp.create(record)
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        error: {
          message:
            err.message || "Some error was occur while inserting a record"
        }
      });
    });
});

module.exports = router;
