import { Form } from "../../components/Atoms/Form";
import { MainPage } from "./style";
import logoWhite from "../../assets/logoWhite.svg";
import { Button } from "../../components/Atoms/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/models/user/user";

export default function RegisterPage() {
  const { createUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .max(25, "Máximo 20 caracteres!")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Seu nome deve conter apenas letras!"
      ),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
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
      <figure>
        <img src={logoWhite} alt="Logo" />
      </figure>

      <Form onSubmit={handleSubmit(submiting)}>
        <div>
          <label>
            Nome {errors.name && <span> - {errors.name.message}</span>}
          </label>
          <input type="text" {...register("name")} />
        </div>

        <div>
          <label>
            E-mail {errors.email && <span> - {errors.email.message}</span>}
          </label>
          <input type="text" {...register("email")} />
        </div>

        <div>
          <label>
            Senha {errors.password && <span> - {errors.password.message}</span>}
          </label>
          <input type="password" {...register("password")} />
        </div>

        <div>
          <label>
            Confirme a senha{" "}
            {errors.confirmPassword && (
              <span> - {errors.confirmPassword.message}</span>
            )}
          </label>
          <input type="password" {...register("confirmPassword")} />
        </div>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </MainPage>
  );
}
