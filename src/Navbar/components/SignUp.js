import { useState } from "react";
import "../css/signUp.css";
import FormInput from "./FormInput";
import { IoIosClose } from "react-icons/io";

function SignUp() {

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Ange email",
            errorMessage: "Ange en giltig email adress!",
            lable: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Ange lösenord",
            errorMessage: "Lösenordet ska vara minst 8 tecken långt, innehålla minst en stor bokstav och siffra!",
            lable: "Lösenord",
            pattern: "^(?=.*?[A-Ö])(?=.*?[a-ö])(?=.*?[0-9]).{8,}",
            required: true,
        },
        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            placeholder: "Upprepa lösenord",
            errorMessage: "Lösenordet matchar inte!",
            lable: "Upprepa lösenord",
            pattern: values.password,
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(values); //Console-logar ut värdena som skrivits in i fälten vid submit (Email och lösenord)
    }

    return (
        <div className="SignUp">
            <form className="signup-form" onSubmit={handleSubmit}>
              <h1 className="signup-title">Skapa Konto</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[inputs.name]}
                        onChange={onChange}
                    />
                ))}
            <button className="signup-button">Skapa Konto</button>
            </form>
        </div>
    );
}

export default SignUp;
