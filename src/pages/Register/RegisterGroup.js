const RegisterGroup = ({errors, register}) => {
    return(
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
                    {...register("group.instagram", { requires: false, maxLength: {value: 20, message: "O número máximo de caracteres é 20"}})}
                />
                {errors.group?.instagram && <p role="alert">{errors.group.instagram?.message}</p>}
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
    )
}

export default RegisterGroup;