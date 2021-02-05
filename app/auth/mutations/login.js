import { authenticateUser } from "app/auth/auth-utils";
import { LoginInput } from "../validations";
import { toast } from 'react-toastify'
export default async function login(input, {
  session
}) {
  // This throws an error if input is invalid
  const {
    email,
    password
  } = LoginInput.parse(input); // This throws an error if credentials are invalid

  const user = await authenticateUser(email, password);
  await session.create({
    userId: user.id,
    roles: [user.role]
  });
  toast.success("Login Successful")
  return user;
}