export const validate = ( email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email invalid";
  if (!isPasswordValid) return "Password invalid";
  return null;
};

export const signUpValidate = (name, pwd, cnfPwd) => {
  const isNameValid = name.trim().length === 0;
  const isPwdSame = pwd === cnfPwd;
  if (isNameValid) return "Name cannot be empty";

  if (!isPwdSame) return "Password does not match";
  return null;
};
