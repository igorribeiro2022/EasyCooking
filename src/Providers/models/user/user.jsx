import { createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Api } from "../../../services/api";

export const UserContext = createContext([]);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function createUser(email, password, name) {
    const data = { email, password, name };

    const res = Api.post("/register", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  }

  async function loginUser(email, password) {
    const data = { email, password };

    const res = await Api.post("/login", data)
      .then((response) => {
        setUser(response.data.user);

        localStorage.setItem(
          "@Easy:Token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("@Easy:Id", JSON.stringify(response.data.user.id));
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
