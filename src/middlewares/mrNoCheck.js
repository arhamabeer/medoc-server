const _patientModel = require("../models/patientSchema");

const isMrExists = (_MR_No) => {
  const _mrcheck = _patientModel.findOne({ _MR_No: _MR_No });
  return !!_mrcheck;
};

module.exports = { isMrExists };
