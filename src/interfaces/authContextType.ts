import { SignInData } from "./signinData";
import { userInterface } from "./userInterface";

export interface AuthContextType {
  isAuthenticated: Boolean;
  user: userInterface;
  signIn: (data: SignInData) => Promise<void>
}