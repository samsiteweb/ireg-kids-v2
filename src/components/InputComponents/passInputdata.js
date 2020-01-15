export const passwordInputData = (method1, method2, method3) => {
  return new Promise(resolve => {
    resolve([
      {
        label: "Password",
        fieldDecorator: "Password",
        placeHolder: "Please input your password",
        hasFeedback: true,
        required: true,
        asType: false,
        typeMessage: false,
        message: "Please input your password",
        validator: method1,
        blur: null
      },
      {
        label: "confirm",
        fieldDecorator: "Confirm",
        placeHolder: "Please confirm your password",
        hasFeedback: true,
        required: true,
        asType: false,
        typeMessage: false,
        message: "Please confirm your password",
        validator: method2,
        blur: method3
      }
    ]);
  });
};
