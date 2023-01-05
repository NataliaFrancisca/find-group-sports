import { useEffect } from "react";
import { RegisterStyled, GridInputInline } from "./Register.styled";

import { useForm } from "react-hook-form";

const Register = () => {

    const { register, watch, setValue, formState: { errors }, handleSubmit } = useForm({
        manager:{
            name: '',
            email: '',
            phone: '',
            password: ''
        },

        group:{
            name: '',
            sport: '',
            instagram: '',
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


    return(
        <RegisterStyled>
            <h1>Preencha os dados abaixo para registrar seu grupo</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset id="form-about-manager">
                    <legend>Dados sobre o responsável</legend>

                    <div className="group-input">
                        <label className="label-input required-input" htmlFor="manager-name">Nome:</label>
                        <input 
                            type='text' 
                            name="manager-name" 
                            id="manager-name"
                            placeholder="Nome do responsável"
                            {...register("manager.name", { 
                                required: "O campo nome deve ser preenchido", 
                                minLength: {value: 2, message: "O nome deve conter no mínimo 2 caracteres"}, 
                                maxLength: {value: 20, message: "O nome deve conter no máximo 20 caracteres"}
                            })}
                        />
                        {errors.manager?.name && <p role="alert">{errors.manager.name?.message}</p>}
                    </div>

                    <div className="group-input">
                        <label className="label-input required-input" htmlFor="manager-phone">Telefone:</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            id="manager-phone"
                            placeholder="Telefone para contato"
                            {...register("manager.phone", { 
                                required: "O campo de telefone deve ser preenchido",
                                pattern: {value: /^(\d{10,11})/i, message: "Preencha corretamente o campo de telefone DD + número"}
                            })}
                        />
                        {errors.manager?.phone && <p role="alert">{errors.manager.phone?.message}</p>}
                    </div>       

                    <div className="group-input">
                        <label className="label-input required-input" htmlFor="manager-email">E-mail:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="manager-email"
                            placeholder="E-mail para registro"
                            {...register("manager.email", { 
                                required: "O campo e-mail deve ser preenchido",
                                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Preencha corretamente o campo e-mail"} 
                            })}
                        />
                        {errors.manager?.email && <p role="alert">{errors.manager.email?.message}</p>}
                    </div>
                   
                    <div className="group-input">
                        <label className="label-input required-input" htmlFor="manager-password">Senha:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="manager-password"
                            placeholder="Senha para registro"
                            {...register("manager.password", { 
                                required: "O campo senha deve ser preenchido",
                                minLength: {value: 6, message: "A senha deve conter no mínimo 6 caracteres"}, 
                            })}
                        />
                        {errors.manager?.password && <p role="alert">{errors.manager.password?.message}</p>}
                    </div>
            
                </fieldset>


                <fieldset id="form-about-group">
                    <legend>Dados sobre o grupo</legend>

                    <section className="group-inputs-inline">

                        <div className="group-input">
                            <label className="label-input required-input" htmlFor="group-name">Nome do Grupo:</label>
                            <input 
                                type="text" 
                                name="group-name"
                                id="group-name"
                                placeholder="Digite o nome do grupo"
                                {...register("group.name", {
                                    required: "O campo nome deve ser preenchido",
                                    minLength: {value: 2, message: "O campo deve ter no minímo 2 caracteres"}
                                })}
                            />
                            {errors.group?.name && <p role="alert">{errors.group.name?.message}</p>}
                        </div>

                        <div className="group-input">
                            <label className="label-input required-input" htmlFor="group-sport">Esporte:</label>
                            <input 
                                type="text"
                                name="group-sport"
                                id="group-sport"
                                placeholder="Digite o esporte que o grupo prática"
                                {...register("group.sport", {
                                    required: "O campo de esporte deve ser preenchido",
                                    minLength: {value: 2, message: "O campo deve ter no minímo 2 caracteres"}
                                })}
                            />
                            {errors.group?.sport && <p role="alert">{errors.group.sport?.message}</p>}
                        </div>

                    </section>

                    <div className="group-input">
                        <label className="label-input" htmlFor="group-instagram">Instagram:</label>
                        <input 
                            type="text" 
                            name="group-instagram" 
                            id="group-instagram"
                            placeholder="Digite o instagram do grupo ou do responsável"
                            {...register("group.instagram", { maxLength: 20})}
                        />
                    </div>  

                    <div className="group-input">
                        <label className="label-input"> Hórario: </label>
                            <GridInputInline column={3}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-date-time" 
                                    value="Matutino (06:00 - 12:00)" 
                                    {...register("group.schedule")}
                                />
                                Matutino (06:00 - 12:00)
                            </label>

                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-date-time" 
                                    value="Vespertino (12:00 - 18:00)" 
                                    {...register("group.schedule")}
                                />
                                Vespertino (12:00 - 18:00)
                            </label>

                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-date-time" 
                                    value="Noturno (18:00 - 00:00)" 
                                    {...register("group.schedule")}
                                />
                                Noturno (18:00 - 00:00)
                            </label>

                            </GridInputInline>
                            
                    </div>

                            

                    <section className="group-inputs-inline">
                        <div className="group-input">
                            <label className="label-input">Idade Mínima:</label>
                                <input 
                                    type="number" 
                                    name="group-age-min" 
                                    id="group-age-min"
                                    min="5"
                                    max="100"
                                    {...register("group.age.min")}
                                />
                        </div>

                        <div className="group-input">
                            <label className="label-input">Idade Máxima:</label>
                                <input 
                                    type="number" 
                                    name="group-age-max" 
                                    id="group-age-max"
                                    min="5"
                                    max="100"
                                    {...register("group.age.max")}
                                />
                        </div>
                    </section>
                    
                    
                    
            



                </fieldset>

                <button type="submit">
                    Registrar
                </button>

                {/* <fieldset>
                  


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