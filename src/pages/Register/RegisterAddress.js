import list_brazilian_states from "./list_brazilian_states.json";

const RegisterAddress = ({errors, register}) => {
    return(
        <fieldset id="form-about-group-address">
             <legend>Endereço:</legend>

                <div className="group-input">
                    <label className="label-input required-input" htmlFor="group-address-neighborhood">Bairro:</label>
                    <input 
                        type="text" 
                        name="group-address-neighborhood" 
                        id="group-address-neighborhood"
                        placeholder="Digite o bairro onde o grupo costuma se encontrar"
                        {...register("group.address.neighborhood", { 
                            required: 'Digite o bairro onde o grupo se encontra', 
                            minLength: {value: 5, message: "O número minimo de caracteres é 5"},
                            maxLength: {value: 50, message: "O número máximo de caracteres é 50"}
                        })}
                    />

                    {errors.group?.address.neighborhood && <p role="alert">{errors.group.address.neighborhood?.message}</p>}  
                </div>  

                <div className="group-input">
                    <label className="label-input required-input" htmlFor="group-address-city">Cidade:</label>
                    <input 
                        type="text" 
                        name="group-address-city" 
                        id="group-address-city"
                        placeholder="Digite a cidade onde o grupo se encontra"
                        {...register("group.address.city", { 
                            required: 'Digite a cidade onde o grupo se encontra', 
                            minLength: {value: 5, message: "O número minimo de caracteres é 5"},
                            maxLength: {value: 50, message: "O número máximo de caracteres é 50"}
                        })}
                    />

                    {errors.group?.address.city && <p role="alert">{errors.group.address.city?.message}</p>}   
                </div>  

                <div className="group-input">
                    <label className="label-input required-input" htmlFor="group-address-state">Estado:</label>

                    <select id="group-address-state" {...register("group.address.state", { required: 'Escolha o estado de onde o grupo se encontra'})}>
                        {list_brazilian_states.UF.map(state => (
                            <option value={state.sigla}>{state.sigla}</option>
                        ))}
                    </select>

                    {errors.group?.address.state && <p role="alert">{errors.group.address.state?.message}</p>}   
                </div> 
        </fieldset>
    )
}

export default RegisterAddress;