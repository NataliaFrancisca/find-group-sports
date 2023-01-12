import { RegisterStyled, AlertMessageStyled } from "./RegisterStyle";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

const Register = () => {


    const ref_form = useRef();

    const { register, reset,  formState: { errors }, handleSubmit } = useForm({
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
            group_type: '',
            price: ''

        }
    });

    const [showSucceedMessage, setShowSucceedMessage] = useState(false);

    
    const onSubmit = data => {

        const objErrorIsEmpty = JSON.stringify(errors) === '{}';

        console.log(data);

        if(objErrorIsEmpty){
            ref_form.current.reset();
            setShowSucceedMessage(true)
        }
    }
    

    useEffect(() => {
        if(showSucceedMessage){
            setTimeout(() => {
                setShowSucceedMessage(false);
                console.log(showSucceedMessage)
            }, 2000);
        }

        console.log(showSucceedMessage)
    },[showSucceedMessage])

    return(
        <RegisterStyled>
            <h1>Preencha os dados abaixo para registrar seu grupo</h1>

            <form onSubmit={handleSubmit(onSubmit)} ref={ref_form}>

                <AlertMessageStyled showMessage={showSucceedMessage}>
                    <p>✅Cadastro realizado com sucesso</p>
                </AlertMessageStyled>

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
                        <label className="label-input required-input"> Hórario: </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-date-time" 
                                    value="Matutino" 
                                    {...register("group.schedule", {required: 'Escolha um grupo de horário'})}
                                />
                                Matutino (06:00 - 12:00)
                            </label>

                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-date-time" 
                                    value="Vespertino" 
                                    {...register("group.schedule", {required: 'Escolha um grupo de horário'})}
                                />
                                Vespertino (12:00 - 18:00)
                            </label>

                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-date-time" 
                                    value="Noturno" 
                                    {...register("group.schedule", {required: 'Escolha um grupo de horário'})}
                                />
                                Noturno (18:00 - 00:00)
                            </label>

                            {errors.group?.schedule && <p role="alert">{errors.group.schedule?.message}</p>}     
                    </div>
                    
                    <div className="group-input">
                        <label className="label-input required-input"> O grupo se encaixa em quais opções: </label>
                            
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-type"  
                                    value="Recreativo" 
                                    {...register("group.group_type", {required: 'Escolha um grupo de horário'})}
                                />
                                Recreativo
                            </label>

                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-type"  
                                    value="Amador" 
                                    {...register("group.group_type", {required: 'Escolha um grupo de horário'})}
                                />
                                Amador
                            </label>

                            <label>
                                <input 
                                    type="checkbox" 
                                    name="group-type"  
                                    value="Profissional" 
                                    {...register("group.group_type", {required: 'Escolha um grupo de horário'})}
                                />
                                Profissional
                            </label>
                          
                            {errors.group?.group_type && <p role="alert">{errors.group.group_type?.message}</p>}     
                    </div>

                    <div className="group-input">
                        <label className="label-input required-input">Tipo de pagamento para acesso e participação:</label>

                            <label>
                                <input 
                                    type="radio" 
                                    name="group-price-rules" 
                                    value="free" 
                                    {...register("group.price", {required: 'Escolha uma das opções de pagamento'})}
                                />
                                Gratuito
                            </label>

                            <label>
                                <input 
                                    type='radio' 
                                    name="group-price-rules" 
                                    value="month-payment" 
                                    {...register("group.price", {required: 'Escolha uma das opções de pagamento'})}
                                />
                                Pagamento mensal
                            </label>

                            <label>
                                <input 
                                    type='radio' 
                                    name="group-price-rules" 
                                    value="game-payment" 
                                    {...register("group.price", {required: 'Escolha uma das opções de pagamento'})}
                                />
                                Pagamento por dia de jogo
                            </label>

                            {errors.group?.price && <p role="alert">{errors.group.price?.message}</p>}     
                    </div>
                </fieldset>

                <button type="submit">Registrar</button>

            </form>
        </RegisterStyled>
    )
}

export default Register;