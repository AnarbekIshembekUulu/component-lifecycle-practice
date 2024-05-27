import React, { useEffect, useState } from "react";
import "./form.scss";

export const Form = () => {
    const [second, setSecond] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerFunc = (e) => {
        e.preventDefault();
        if ((name, email, password)) {
            const newObj = {
                name,
                email,
                password,
            };
            console.log(newObj);
            setName("");
            setEmail("");
            setPassword("");
        } else {
            console.log("Вы не заполнили форму регистрации");
        }
    };

    useEffect(() => {
        const intervalID = setInterval(
            () => setSecond((prevState) => (prevState += 1)),
            1000
        );
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input__box">
                    <input
                        value={name}
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input__box">
                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input__box">
                    <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn__form"
                    onClick={registerFunc}
                >
                    Register
                </button>
            </form>
            <div className="time__container">
                <h2>
                    Сколько секунд открыт компонент: <br />
                    <span>{second}</span>
                </h2>
            </div>
        </div>
    );
};
