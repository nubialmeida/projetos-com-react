import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputComponent from "../InputComponents/Input";
import ButtonComponent from "../InputComponents/Button";

export default function LoginComponents() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userName, userPassword);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
            <div class="logo">
                <img
                    src={require("../../assets/images/leaf.png")}
                    alt="green-logo"
                />
                <h4>Green</h4>
            </div>

            <div class="heading">
                <h2>Bem-vindo!</h2>
                <h6>Não tem uma conta ainda?</h6>
                <Link to="/Registrer" class="calltoaction">
                    Cadastrar
                </Link>
            </div>
            <div class="info-form">
                <InputComponent
                    type="text"
                    id="name"
                    description="Nome"
                    placeholder="NomeFantasia"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <InputComponent
                    type="password"
                    id="password"
                    description="Senha"
                    placeholder="********"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <ButtonComponent id="button" type="submit" value="Login" />
                <p class="text">
                    Esqueceu sua senha? Obtenha
                    <Link to="/help">ajuda</Link> para entrar.
                </p>
            </div>
        </form>
    );
}
