const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeFormSchema = new Schema({
  email: { type: String, required: true },
  requirement: { type: String, required: true },
  rate: { type: String, required: true },
});

const EmployeeForm = mongoose.model("EmployeeForm", employeeFormSchema);

module.exports = EmployeeForm;
