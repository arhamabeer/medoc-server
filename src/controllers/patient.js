const { generateRandomString } = require("../helpers/randoms");
const { isMrExists } = require("../middlewares/mrNoCheck");

const _patientModel = require("../models/patientSchema");

const AddPatient = async (req, res) => {
  let _checkPatient = await _patientModel.findOne({ _MR_No: req.body._MR_No });
  if (_checkPatient) {
    res.status(403).send({
      result: _checkPatient,
      message: "This Patient is already Registered.",
    });
  } else {
    let generated_MR_No;
    let mrExists = true;

    while (mrExists) {
      generated_MR_No = generateRandomString(11);
      mrExists = await isMrExists(generated_MR_No);
    }

    let create_patient = new _patientModel({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      country: req.body.country,
      city: req.body.city,
      dob: req.body.dob,
      gender: req.body.gender,
      contact: req.body.contact,
      disease: req.body.disease,
      maritalStatus: req.body.maritalStatus,
      onGoingMedicines: req.body.onGoingMedicines,
      discontinuedMedicines: null,
      upcomingAppointment: req.body.upcomingAppointment,
      lastAppointment: null,
      _MR_No: generated_MR_No,
      _createdAt: new Date(),
    });
    create_patient
      .save()
      .then((response) => {
        res.status(200).send({
          result: response,
          message: "Patient Registed Successfully.",
        });
      })
      .catch((err) => {
        res.status(400).send({
          result: err.message,
          message: "Can't register the Patient.",
        });
      });
  }
};

module.exports = { AddPatient };
