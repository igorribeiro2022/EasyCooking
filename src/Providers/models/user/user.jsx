import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Home from "../../../pages/home";
import { Api } from "../../../services/api";

export const UserContext = createContext([]);

export function UserProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [verify, setVerify] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@Easy:Token"))
  
    async function verifyToken() {
      if (token) {
        await Api.get("/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(() => true)
          .catch((err) => console.log(err));
      }
    }
 

  async function createUser(email, password, name, callback) {
    const data = { email, password, name };

    toast
      .promise(Api.post("/register", data), {
        pending: {
          render() {
            return "Organizando a cozinha";
          },
        },
        success: {
          render() {
            return "Tômperos adicionados, cozinha pronta!";
          },
          icon: "🍴",
        },
        error: "Vergonha da profissón, verifique seus dados!",
      })
      .then(() => {
        setRegister(true);
      })
      .catch((err) => {
        console.log(err);
      });
    if (callback) {
      callback(register);
    }
  }

  async function loginUser(email, password, callback) {
    const data = { email, password };

    toast
      .promise(Api.post("/login", data), {
        pending: {
          render() {
            return "Preparando a cozinha!";
          },
        },
        success: {
          render() {
            return "Voilá";
          },
          icon: "👨🏻‍🍳",
        },
        error: "Não conseguimos abrir a cozinha, verifique seus dados!",
      })
      .then((response) => {
        setUser(response.data.user);
        setLogin(true);

        localStorage.setItem("@Easy:Token", response.data.accessToken);
        localStorage.setItem("@Easy:Id", JSON.stringify(response.data.user.id));

        if (callback) {
          callback(login);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logoutUser(callback){
      localStorage.removeItem("@Easy:Token")
      localStorage.removeItem("@Easy:Id")
      setUser(null)
      setToken(null)
      callback('/login')
  }

  function isLoggedinForDashboard(navigate){
    verify? navigate('/dashboard') : (
      toast.error("Faça login para acessar suas receitas", navigate('/login') )      
      )
  }

  return (
    <UserContext.Provider value={{ user, loginUser, createUser, logoutUser,isLoggedinForDashboard, verifyToken, isOpen, setIsOpen }}>
      {children}
    </UserContext.Provider>
  );
}
