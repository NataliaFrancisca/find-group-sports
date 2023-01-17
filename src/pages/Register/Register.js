import { RegisterStyled, ButtonFormStyled } from "./Register.styled";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {

    const { createUser, createUserGoogle, error: authError } = useAuthentication();

    const [errorAuth, setErrorAuth] = useState("");
    const [succeedAuth, setSucceedAuth] = useState(false);

    const ref_form = useRef();

    const { register, formState: { errors }, handleSubmit } = useForm({
            name: '',
            email: '',
            password: ''
    });
    
    const onSubmit = async(data) => {
        setErrorAuth("");

        const objErrorIsEmpty = JSON.stringify(errors) === '{}';

        if(objErrorIsEmpty){
            const res = await createUser(data);
            setSucceedAuth(true);
            ref_form.current.reset();
        }
    }

    const registerWithGoogle = async() => {
        const res = await createUserGoogle();
        if(res){
            setSucceedAuth(true);
        }
    }

    useEffect(() => {
        if(authError){
            setErrorAuth(authError);
        }
    },[authError])

    useEffect(() => {
        if(succeedAuth){
            setTimeout(() => {
                setSucceedAuth(false)
            },4000)
        }
    },[succeedAuth])
    
    return(
        <RegisterStyled>
            <form onSubmit={handleSubmit(onSubmit)} ref={ref_form}>
                <h1>Registro</h1>

                {succeedAuth && !errorAuth && <p id="succeed-message">Cadastro realizado com sucesso!</p>}
                {errorAuth && <p id="error-message">{errorAuth}</p>}

                <div className="group-input">
                    <label className="label-input required-input" htmlFor="name">Nome:</label>
                    <input 
                        type='text' 
                        name="name" 
                        id="name"
                        placeholder="Nome do responsável"
                        {...register("name", { 
                            required: "O campo nome deve ser preenchido", 
                            minLength: {value: 2, message: "O nome deve conter no mínimo 2 caracteres"}, 
                            maxLength: {value: 20, message: "O nome deve conter no máximo 20 caracteres"}
                        })}
                    />
                    {errors.name && <p role="alert">{errors.name?.message}</p>}
                </div>

                <div className="group-input">
                    <label className="label-input required-input" htmlFor="manager-email">E-mail:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="E-mail para registro"
                        {...register("email", { 
                            required: "O campo e-mail deve ser preenchido",
                            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Preencha corretamente o campo e-mail"} 
                        })}
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </div>

                <div className="group-input">
                    <label className="label-input required-input" htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="Senha para registro"
                        {...register("password", { 
                            required: "O campo senha deve ser preenchido",
                            minLength: {value: 6, message: "A senha deve conter no mínimo 6 caracteres"}, 
                        })}
                    />
                    {errors?.password && <p role="alert">{errors.password?.message}</p>}
                </div>

                <ButtonFormStyled type="submit" id='btn-register'>
                    Registrar
                </ButtonFormStyled>

                <ButtonFormStyled type="button" id="btn-register-google" 
                    onClick={() => registerWithGoogle()}>
                    <img src="assets/icon/icon-google.svg" />
                    Registrar com Google
                </ButtonFormStyled>

            </form>
        </RegisterStyled>
    )
}

export default Register;