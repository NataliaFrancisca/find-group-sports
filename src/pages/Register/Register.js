import { RegisterStyled } from "./Register.styled";

import { useForm } from "react-hook-form";
import { useRef } from "react";

const Register = () => {

    const ref_form = useRef();

    const { register, formState: { errors }, handleSubmit } = useForm({
            name: '',
            email: '',
            password: ''
    });
    
    const onSubmit = data => {

        const objErrorIsEmpty = JSON.stringify(errors) === '{}';

        if(objErrorIsEmpty){
            console.log(data);
            ref_form.current.reset();
        }
    }
    
    return(
        <RegisterStyled>

            <form onSubmit={handleSubmit(onSubmit)} ref={ref_form}>
                <h1>Registro</h1>

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

                <button type="submit" id='btn-register'>Registrar</button>

                <button id="btn-register-google">
                    <img src="assets/icon/icon-google.svg" />
                    Registrar com Google
                </button>

            </form>
        </RegisterStyled>
    )
}

export default Register;