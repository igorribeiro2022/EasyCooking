import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../services/api";

export const UserContext = createContext([]);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function createUser(email, password, name, callback) {
    const data = { email, password, name };
    try {
      const res = Api.post("/register", data);

      if (callback) {
        callback(res);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function loginUser(email, password, callback) {
    const data = { email, password };
    try {
      const res = await Api.post("/login", data);

      setUser(res.data.user);

      localStorage.setItem("@Easy:Token", JSON.stringify(res.data.token));

      if (callback) {
        callback(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider value={{ user, loginUser, createUser }}>
      {children}
    </UserContext.Provider>
  );
}
