import { Form } from "../../components/Atoms/Form";
import { MainPage } from "./style";
import LogoV2Black from "../../assets/LogoV2-Black.png";
import { Button } from "../../components/Atoms/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/models/user/user";
import { GiCook } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { TbCookieOff } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { createUser } = useContext(UserContext);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .max(25, "Máximo 25 caracteres!")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Seu nome deve conter apenas letras!"
      ),
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(8, "Mínimo 8 caracteres!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Pelo menos 1 número, 1 letra maiúcula, 1 letra minúscula e 1 caractere especial!"
      ),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password"), null], "As senhas não são iguais!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submiting = ({ email, password, name }) => {
    createUser(email, password, name, async (e) => {
      const res = await e;
      console.log(res);
    });
  };

  return (
    <MainPage>
      <div className="logoDiv">
        <figure>
          <img
            onClick={() => handleNavigate("/")}
            src={LogoV2Black}
            alt="Easy Cooking"
          />
        </figure>
        <p>
          Facilitando sua vida no dia a dia.<br/>Guiando sua <span className="redSpan">cozinha</span> com<br/>
          <span className="redSpan">harmonia</span>, <br/>Pensado para <span className="redSpan">você</span>!
        </p>
      </div>
      <div className="divForm">
        <Form onSubmit={handleSubmit(submiting)}>
          <h2>Cadastre-se</h2>
          <div>
            <label>
              Nome {errors.name && <span> - {errors.name.message}</span>}
            </label>

            <div>
              <GiCook />
              <input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
            </div>
          </div>

          <div>
            <label>
              E-mail {errors.email && <span> - {errors.email.message}</span>}
            </label>

            <div>
              <HiOutlineMail />
              <input
                type="text"
                placeholder="Digite seu melhor email"
                {...register("email")}
              />
            </div>
          </div>

          <div>
            <label>
              Senha{" "}
              {errors.password && <span> - {errors.password.message}</span>}
            </label>

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
          </div>

          <div>
            <label>
              Confirme a senha{" "}
              {errors.confirmPassword && (
                <span> - {errors.confirmPassword.message}</span>
              )}
            </label>

            <div>
              <GiKnifeFork />
              <input
                type={inputType}
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
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
          </div>

          <Button type="submit">Cadastrar</Button>
          <h4>
            Já tem cadastro? Faça login{" "}
            <span className="link" onClick={() => handleNavigate("/login")}>
              aqui
            </span>
          </h4>
        </Form>
      </div>
    </MainPage>
  );
}
