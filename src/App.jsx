import { useState } from "react";
import "./App.scss";
import { Form } from "./components/form/Form";

export const App = () => {
    const [openForm, setOpenForm] = useState(false);

    const formOpen = () => {
        setOpenForm(!openForm);
    };

    return (
        <>
            {openForm ? (
                <Form />
            ) : (
                <button className="form__btn" onClick={formOpen}>
                    Зарегистрироваться
                </button>
            )}
        </>
    );
};
