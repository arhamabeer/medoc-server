const _patientModel = require("../models/patientSchema");
const _authDocModel = require("../models/authDoctorSchema");

const isMrExists = async (_MR_No) => {
  const _mrcheck = await _patientModel.findOne({ _MR_No: _MR_No });
  return !!_mrcheck;
};
const isRegExists = async (registrationNo) => {
  const _registrationNo = await _authDocModel.findOne({
    registrationNo: registrationNo,
  });
  return !!_registrationNo;
};

module.exports = { isMrExists, isRegExists };
