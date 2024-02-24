const handlerStudentsInfo = require("./handlerStudentsInfo");
async function redirectReqToDjango(req, res) {
    try {
      const allInfo=await handlerStudentsInfo();
      console.log(allInfo);
      res.send(allInfo);
    } catch (error) {
      console.error("Error making request to Django:", error.message);
      res.status(500).json({ error: "Internal Server Error with express" });
    }
  }
  module.exports = redirectReqToDjango;