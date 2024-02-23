const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const AccountSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    selected_role:String,
    password: String,
});

const Account = mongoose.model("Accounts", AccountSchema, "Accounts");

module.exports = {
    AccountSchema,
    Account,
};