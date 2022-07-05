import { Form } from "../../components/Atoms/Form";
import { Page } from "./style";
import { GiCook } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { TbCookieOff } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import logoWhite from "../../assets/logoWhite.svg";
import {Button} from "../../components/Atoms/Button";
import { useState } from "react";

export default function LoginPage() {
    const [ inputType, setInputType ] = useState("password")
    return (
        <Page>
            <figure>
                <img src={logoWhite} alt="" />
            </figure>
            <Form>
                <div>
                    <label>Email</label>
                    <div>
                        <GiCook/>
                        <input type="email" placeholder="Digite seu email"/>
                    </div>
                </div>
                <div>
                    <label>Senha</label>
                    <div>
                        <GiKnifeFork/>
                        <input type={inputType} placeholder="Digite sua senha"/>
                        {inputType === "password" ? <TbCookieOff className="view" onClick={() => setInputType("text")} /> : <TbCookie className="view" onClick={() => setInputType("password")} />}
                    </div>
                </div>
                <Button>Login</Button>
            </Form>
        </Page>
    )
}