const account = require("../models/account").Account;
async function allInfo() {
  const values = await account.find({ selected_role: "student" });
  let students = [];
  values.forEach((account) => {
    students.push({
      first_name: account.first_name,
      last_name: account.last_name,
      email: account.email,
      selected_role: account.selected_role,
      password: account.password,
    });
  });
  //console.log(students);
  return students;
}
module.exports = allInfo;
