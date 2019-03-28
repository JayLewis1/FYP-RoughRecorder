const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.instrument = !isEmpty(data.instrument) ? data.instrument : "";
  data.expertise = !isEmpty(data.expertise) ? data.expertise : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.instrument)) {
    errors.instrument = "Instrument field is required";
  }

  if (Validator.isEmpty(data.expertise)) {
    errors.expertise = "Expertise field is required";
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if (!isEmpty(data.soundcloud)) {
    if (!Validator.isURL(data.soundcloud)) {
      errors.soundcloud = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
