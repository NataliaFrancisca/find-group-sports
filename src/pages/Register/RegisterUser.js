const RegisterUser = ({errors, register}) => {
    return(
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
    )
}

export default RegisterUser;