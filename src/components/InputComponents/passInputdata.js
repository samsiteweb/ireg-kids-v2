export const passwordInputData = (...validationMethods) => {
  return new Promise(resolve => {
    resolve([
      {
        label: "Password",
        fieldDecorator: "Password",
        hasFeedback: true,
        required: true,
        asType: false,
        typeMessage: false,
        message: "Please input your password",
        validator: validationMethods.validator,
        blur: null
      },
      {
        label: "Confirm Password",
        fieldDecorator: "Confirm",
        hasFeedback: true,
        required: true,
        asType: false,
        typeMessage: false,
        message: "Please confirm your password",
        validator: validationMethods.compare,
        blur: validationMethods.blur
      }
    ]);
  });
};
