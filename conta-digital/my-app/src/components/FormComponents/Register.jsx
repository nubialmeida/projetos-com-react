import React, { useState } from "react";
import InputComponent from "../InputComponents/Input";

export default function RegisterComponents() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return (
        <form>
            <InputComponent
                type="text"
                id="name"
                description="Nome"
                placeholder="NomeFantasia"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <InputComponent
                type="text"
                id="email"
                description="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <InputComponent
                type="text"
                id="phone"
                description="telefone"
                placeholder="(00)00000-0000"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
            />
            <InputComponent
                type="date"
                id="date"
                description="data de nascimento"
                placeholder="00/00/0000"
                value={userDate}
                onChange={(e) => setUserDate(e.target.value)}
            />
            <InputComponent
                type="number"
                id="CPF"
                description="CPF"
                placeholder="000.000.000-00"
                value={userCpf}
                onChange={(e) => setUserCpf(e.target.value)}
            />
            <InputComponent
                type="password"
                id="password"
                description="Senha"
                placeholder="********"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
            />
        </form>
    );
}
