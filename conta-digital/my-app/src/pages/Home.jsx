import React from "react";
import Login from "../components/FormComponents/Login";
import Register from "../components/FormComponents/Register";
import Carrousel from "../components/Carrousel";

export default function Home() {
    return (
        <main>
            <div class="main-box">
                <div class="inner-box">
                    <div class="forms">
                        <Login />
                        <Register />
                    </div>

                    <Carrousel />
                </div>
            </div>
        </main>
    );
}
