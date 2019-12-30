export const formData = [
  {
    label: "First Name",
    fieldDecorator: "FirstName",
    hasFeedback: true,
    required: true,
    asType: false,
    typeMessage: false,
    message: "Enter your Firstname",
    validator: false
  },
  {
    label: "Last Name",
    fieldDecorator: "LastName",
    hasFeedback: true,
    required: true,
    asType: false,
    typeMessage: false,
    message: "Enter your Lastname",
    validator: false
  },
  {
    label: "Email",
    fieldDecorator: "Email",
    hasFeedback: true,
    required: true,
    asType: "email",
    typeMessage: "The input is not valid E-mail!",
    message: "Please input your E-mail!",
    validator: false
  },

  {
    label: "Contact",
    fieldDecorator: "Contact",
    hasFeedback: true,
    required: true,
    asType: false,
    typeMessage: false,
    message: "Please input your contact",
    validator: false
  },
  {
    label: "Username",
    fieldDecorator: "Username",
    hasFeedback: true,
    required: true,
    asType: false,
    typeMessage: false,
    message: "Please input your username",
    validator: false
  }
];

export const passwordInput = (method1, method2, method3) => {
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
        validator: method1,
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
        validator: method2,
        blur: method3
      }
    ]);
  });
};
