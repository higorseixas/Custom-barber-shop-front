import { SignInData } from "./signInData";
import { userInterface } from "./userInterface";

export interface AuthContextType {
  isAuthenticated: Boolean;
  user: userInterface | null;
  signIn: (data: SignInData) => Promise<void>
}