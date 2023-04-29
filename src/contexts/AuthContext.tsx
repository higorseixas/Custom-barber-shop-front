import customBackAPI from "@/connectors/customBackAPI";
import Router from "next/router";
import { useSignInUserHook } from "@/hooks/useSignInUserHook";
import { AuthContextType } from "@/interfaces/authContextType";
import { userInterface } from "@/interfaces/userInterface";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { SignInData } from "@/interfaces/signInData";

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userInterface | null>(null);

  const isAuthenticated = !!user;

  // async function fetchUser() {
  //   const { 'nextauth-token': token } = parseCookies();
  //   if (token) {
  //     const jsonResponseUser = await GetUserFromToken(token);
  //     const dataUser = await jsonResponseUser.json();
  //     const {user} = JSON.parse(dataToken.response);
  //     setUser(user);
  //   }
  // }
  
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  async function signIn({ cpf, password }: SignInData) {
    const jsonResponse = await useSignInUserHook({ cpf, password });
    const data = await jsonResponse.json();
    const {user, token} = JSON.parse(data.response);

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 7 * 24 * 60 * 60,  // 7 dias em segundos
    })

    // customBackAPI.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    Router.push('/dashboard')
  }
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}