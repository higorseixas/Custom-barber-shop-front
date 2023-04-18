import customBackAPI from "@/connectors/customBackAPI";
import Router from "next/router";
import { SignInUser } from "@/hooks/signInUser";
import { AuthContextType } from "@/interfaces/authContextType";
import { userInterface } from "@/interfaces/userInterface";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { SignInData } from "@/interfaces/signInData";
import { GetUserFromToken } from "@/hooks/getUserFromToken";


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userInterface | null>(null);

  const isAuthenticated = !!user;

  // async function fetchUser() {
  //   const { 'nextauth-token': token } = parseCookies();
  //   if (token) {
  //     const response = await GetUserFromToken(token);
  //     setUser(response.user);
  //   }
  // }
  
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  async function signIn({ cpf, password }: SignInData) {
    const { user, token } = await SignInUser({ cpf, password });

    setCookie(undefined, 'nextauth-token', token, {
      maxAge: 7 * 24 * 60 * 60,  // 7 dias em segundos
    })

    customBackAPI.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    Router.push('/dashboard')
  }
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}