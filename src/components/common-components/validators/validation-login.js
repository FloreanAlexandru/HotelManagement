const validation = (values) => {
  let errors = {
    username: "",
    password: "",
    ok: "",
  };

  const errorMessage = "This field is required";

  if (!values.username) {
    errors.username = errorMessage;
  }

  if (!values.password) {
    errors.password = errorMessage;
  }

  if (Object.values(errors).find((value) => value)) {
    errors.ok = false;
  } else {
    errors.ok = true;
  }

  return errors;
};

export default validation;
