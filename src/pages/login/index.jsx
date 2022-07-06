import { Form } from "../../components/Atoms/Form";
import { Page } from "./style";
import { GiCook } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { TbCookieOff } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import logoWhite from "../../assets/logoWhite.svg";
import { Button } from "../../components/Atoms/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../Providers/models/user/user";

export default function LoginPage() {
  const [inputType, setInputType] = useState("password");
  const { loginUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Digite sua senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction({ email, password }) {
    loginUser(email, password);
  }

  return (
    <Page>
      <figure>
        <img src={logoWhite} alt="Easy Cooking" />
      </figure>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label>Email</label>
          <div>
            <GiCook />
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </div>
          {errors.email?.message}
        </div>
        <div>
          <label>Senha</label>
          <div>
            <GiKnifeFork />
            <input
              type={inputType}
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {inputType === "password" ? (
              <TbCookieOff
                className="view"
                onClick={() => setInputType("text")}
              />
            ) : (
              <TbCookie
                className="view"
                onClick={() => setInputType("password")}
              />
            )}
          </div>
          {errors.password?.message}
        </div>
        <Button type="submit">Login</Button>
      </Form>
    </Page>
  );
}
