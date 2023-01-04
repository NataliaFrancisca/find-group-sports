import { useEffect } from "react";
import { RegisterStyled } from "./Register.styled";

import { useForm } from "react-hook-form";

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        manager:{
            name: '',
            email: '',
            phone: '',
            socialMedia: ''
        },

        group:{
            name: '',
            sport: '',
            schedule: [],
            age: {min: 0, max: 0},
            teamGender: '',
            teamGameType: '',
            price: ''

        }
    });

    
    const onSubmit = data => {
        console.log(data);
        console.log(errors)
    }


    useEffect(() => {
        console.log(errors)
    },[errors])


    return(
        <RegisterStyled>
            <h1>Preencha os dados abaixo para registrar seu grupo</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Dados sobre o responsável:</legend>

                    <div className="group-input">
                        <label>Nome:</label>
                        <input 
                            type='text' 
                            name="manager-name" 
                            {...register("manager.name", { 
                                required: "O campo nome deve ser preenchido", 
                                minLength: {value: 2, message: "O nome deve conter no mínimo 2 caracteres"}, 
                                maxLength: {value: 20, message: "O nome deve conter no máximo 20 caracteres"}
                            })}
                        />
                        {errors.manager?.name && <p role="alert">{errors.manager.name?.message}</p>}
                    </div>

                    <div className="group-input">
                        <label>E-mail:</label>
                        <input 
                            type="email" 
                            name="email" 
                            {...register("manager.email", { 
                                required: "O campo e-mail deve ser preenchido",
                                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Preencha corretamente o campo e-mail"} 
                            })}
                        />
                        {errors.manager?.email && <p role="alert">{errors.manager.email?.message}</p>}
                    </div>
                   

                    <div className="group-input">
                        <label>Telefone:</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Telefone para contato"
                            {...register("manager.phone", { 
                                required: "O campo de telefone deve ser preenchido",
                                pattern: {value: /^(\(\d{2}\)\s)(\d{4,5}\-\d{4})/i, message: "Preencha corretamente o campo de telefone (DD) xxxx-xxxx"}
                            })}
                        />
                        {errors.manager?.phone && <p role="alert">{errors.manager.phone?.message}</p>}
                    </div>       

                    <div className="group-input">
                        <label>Rede Social:</label>
                        <input 
                            type="text" 
                            name="social-media" 
                            {...register("manager.socialMedia", { maxLength: 20})}
                        />
                    </div>                  
                    
                </fieldset>

                <button type="submit">
                    Registrar
                </button>

                {/* <fieldset>
                    <legend>Dados sobre o grupo:</legend>

                    <label>
                        Nome do Grupo:
                        <input type="text" name="group-name" />
                    </label>

                    <label>
                        Esporte:
                        {listSports.map((sport) => (
                            <label>
                                {sport}
                                <input type="checkbox" name="group-sport" value={sport} />
                            </label>
                        ))}
                    </label>

                    <label>
                        Hórario:
                        <label>
                            Manhã (06:00 - 12h:00)
                            <input type="checkbox" name="group-date-time" value="morning" />
                        </label>

                        <label>
                            Tarde (12:00 - 18h:00)
                            <input type="checkbox" name="group-date-time" value="afternoon" />
                        </label>

                        <label>
                            Noite (18:00 - 00h:00)
                            <input type="checkbox" name="group-date-time" value="night" />
                        </label>
                    </label>

                    <label>
                        Idade:
                        <label>
                            Idade Minima
                            <input type="number" name="group-age-min" />
                        </label>

                        <label>
                            Idade Maxíma
                            <input type="number" name="group-age-max" />
                        </label>
                    </label>

                    <label>
                        Em qual opção o grupo se encaixa?

                        <label>
                            Time Feminino
                            <input type="radio" name='group-gender-rules' value="woman" />
                        </label>

                        <label>
                            Time Masculino
                            <input type="radio" name='group-gender-rules' value="man" />
                        </label>

                        <label>
                            Time Misto
                            <input type="radio" name='group-gender-rules' value="mixed" />
                        </label>

                        <label>
                            <input type="text" name='group-gender-rules' placeholder="Digite em qual opção o grupo se encaixa" />
                        </label>
                    </label>

                    <label>
                        O grupo se encaixa em quais regras de jogo:
                        <label>
                            Recreativo
                            <input type="checkbox" name="group-game-rules" value="recreativo" />
                        </label>

                        <label>
                            Jogo
                            <input type='checkbox' name="group-game-rules" value="game" />
                        </label>

                        <label>
                            Treinamento
                            <input type='checkbox' name="group-game-rules" value="training" />
                        </label>
                    </label>


                    <label>
                        Preço para acesso e participação:
                        <label>
                            Gratuito
                            <input type="radio" name="group-price-rules" value="Gratuito" />
                        </label>

                        <label>
                            Pagamento mensal
                            <input type='radio' name="group-price-rules" value="Pagamento mensal" />
                        </label>

                        <label>
                            Pagamento por dia de jogo
                            <input type='radio' name="group-price-rules" value="Pagamento jogo" />
                        </label>
                    </label>

                </fieldset>
                */}
            </form>
            

        </RegisterStyled>
    )
}

export default Register;