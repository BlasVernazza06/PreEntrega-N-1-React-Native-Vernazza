import {object, string, ref} from "yup"

export const signupSchema = object().shape({
  email: string().required("Email is required").email("Not a valid email"),
  password: string().required("Password is required").min(6, "Password must be least 6 characters"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required(),
});