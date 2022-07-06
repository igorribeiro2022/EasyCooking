import { createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Api } from "../../../services/api";

export const UserContext = createContext([]);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  async function createUser(email, password, name, callback) {
    const data = { email, password, name };

    const res = Api.post("/register", data)
      .then((response) => {
        console.log(response.data);
        setRegister(true);
      })
      .catch((err) => {
        console.log(err);
      });
    if (callback) {
      callback(register);
    }
    return res;
  }

  async function loginUser(email, password, callback) {
    const data = { email, password };

    const res = await Api.post("/login", data)
      .then((response) => {
        setUser(response.data.user);
        setLogin(true);

        localStorage.setItem(
          "@Easy:Token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("@Easy:Id", JSON.stringify(response.data.user.id));

        if (callback) {
          callback(login);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  }

  return (
    <UserContext.Provider value={{ user, loginUser, createUser }}>
      {children}
    </UserContext.Provider>
  );
}
