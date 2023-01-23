import { useAuthentication } from "../../hooks/useAuthentication";

import { FormStyled, ButtonDefaultStyled, ButtonGoogleStyled} from "../../styles/Form.styled";

import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from "react"

const Login = () => {

    const { login, createUserGoogle, error: authError } = useAuthentication();

    const [errorAuth, setErrorAuth] = useState("");
    const [succeedAuth, setSucceedAuth] = useState(false);

    const ref_form = useRef();

    const { register, formState: { errors }, handleSubmit } = useForm({
        email: '',
        password: ''
    })

    const onSubmit = async(data) => {
        console.log(data)
        const res = await login(data);
        console.log('aaaa', res);
    }


    const loginWithGoogle = async() => {
        const res = await createUserGoogle();
        console.log(res);
        if(res){
            setSucceedAuth(true);
        }
    }

    useEffect(() => {
        if(authError){
            setErrorAuth(authError);
        }
    },[authError])

  
    if(succeedAuth){
        setTimeout(() => {
            setSucceedAuth(false)
        },4000)
    }
    
    return(
        <FormStyled>  
            <form onSubmit={handleSubmit(onSubmit)} ref={ref_form}>
                <h1>Login</h1>

                {succeedAuth && !errorAuth && <p id="succeed-message">Login realizado com sucesso, aguarde o redirecionamento!</p>}
                {errorAuth && <p id="error-message">{errorAuth}</p>}

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

                <ButtonDefaultStyled type="submit" id='btn-default' value="Login">
                    Login
                </ButtonDefaultStyled>

                <ButtonGoogleStyled type="button" id="btn-google" onClick={() => loginWithGoogle()}>
                    <img src="assets/icon/icon-google.svg" />
                    Login com Google
                </ButtonGoogleStyled>

            </form>
        </FormStyled>
    )
}

export default Login;