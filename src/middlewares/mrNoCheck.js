const _patientModel = require("../models/patientSchema");
const _authDocModel = require("../models/authDoctorSchema");

const isMrExists = (_MR_No) => {
  const _mrcheck = _patientModel.findOne({ _MR_No: _MR_No });
  return !!_mrcheck;
};
const isRegExists = (registrationNo) => {
  const _registrationNo = _authDocModel.findOne({
    registrationNo: registrationNo,
  });
  return !!_registrationNo;
};

module.exports = { isMrExists, isRegExists };
