const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/compapp.js");
const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/Models/company.js");
const Comp = comp.Company;
beforeAll(async () => {
  try {
    Comp.sync().then(() => {
      return Comp.bulkCreate(
        {
          comp_name: "everest",
          reg_no: "123ab",
          website: "www.everest.com",
          address: "bangalore"
        },
        {
          comp_name: "company2",
          reg_no: "204df",
          website: "www.company2.com",
          address: "mysore"
        },
        {
          comp_name: "company3",
          reg_no: "205th",
          website: "www.company3.com",
          address: "kormangal"
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
});
describe("company details", () => {
  it("it should returns a details of given id ", async () => {
    const response = await request(app).get("/company/123ab");
    expect(res.text).toEqual(
      JSON.stringify({
        comp_name: "everest",
        reg_no: "123ab",
        website: "www.everest.com",
        address: "bangalore"
      })
    );
    /**expect(res.body.comp_name).toBe("everest");
    expect(res.body.website).toBe("www.everest.com");*/
    /**expect(response.text).toEqual(
      JSON.stringify(
        {
          comp_name: "everest",
          reg_no: "123ab",
          website: "www.everest.com",
          address: "bangalore"
        },
        {
          comp_name: "company2",
          reg_no: "204df",
          website: "www.company2.com",
          address: "mysore"
        },
        {
          comp_name: "company3",
          reg_no: "205th",
          website: "www.company3.com",
          address: "kormangal"
        },
        {
          comp_name: "company4",
          reg_no: "674io",
          website: "www.company4.com",
          address: "hyderabad"
        },
        {
          comp_name: "amazon",
          reg_no: "345bc",
          website: "www.amazon.com",
          address: "Hyderabad"
        },
        {
          comp_name: "wipro",
          reg_no: "203ab",
          website: "www.company1.com",
          address: "chinnai"
        },
        {
          comp_name: "company20",
          reg_no: "348ui",
          website: "www.company20.com",
          address: "vizag"
        },
        {
          comp_name: "company5",
          reg_no: "568ab",
          website: "www.company5.com",
          address: "bangalore"
        },
        {
          comp_name: "company6",
          reg_no: "346ab",
          website: "www.company6.com",
          address: "bangalore"
        },
        {
          comp_name: "company15",
          reg_no: "751bp",
          website: "www.company15.com",
          address: "vijayawada"
        },
        {
          comp_name: "everest",
          reg_no: "345ab",
          website: "www.thoughtworks.com",
          address: "Hyderabad"
        },
        {
          comp_name: "eze",
          reg_no: "456hj",
          website: "www.eze.com",
          address: "hyderabad"
        },
        {
          comp_name: "oracle",
          reg_no: "134ab",
          website: "www.oracle.com",
          address: "japan"
        },
        {
          comp_name: "google",
          reg_no: "134bc",
          website: "www.google.com",
          address: "japan"
        }
      )
    );
    expect(response.statusCode).toBe(200);*/
  });
});
afterAll(async () => {
  Comp.destroy({}).then(data => {
    console.log(data);
  });
});
