import { useState } from "react";
import { db } from "./Connections/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function handleAdd() {}

    return (
        <>
            <div className="container">
                <label> Titulo: </label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <br /> <br />
                <label>Autor: </label>
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <label> Mensagem: </label>
                <input
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
                <br /> <br />
            </div>

            <button onClick={handleAdd}>Cadastrar</button>
        </>
    );
}

export default App;
