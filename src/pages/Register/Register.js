import { RegisterStyled, AlertMessageStyled } from "./Register.styled";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import list_brazilian_states from "./list_brazilian_states.json";
import RegisterUser from "./RegisterUser";
import RegisterGroup from "./RegisterGroup";
import RegisterAddress from "./RegisterAddress";

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
            address: {neighborhood: '', city: '', state: '', },
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
            }, 8000);
        }

        console.log(showSucceedMessage)
    },[showSucceedMessage])

    return(
        <RegisterStyled>
            <h1>Preencha os dados abaixo para registrar seu grupo</h1>

            <form onSubmit={handleSubmit(onSubmit)} ref={ref_form}>
                
                <RegisterUser errors={errors} register={register} />
                <RegisterGroup errors={errors} register={register} />
                <RegisterAddress errors={errors} register={register} />

                
                <button type="submit">Registrar</button>

                <button onClick={() => setShowSucceedMessage(true)}>TESTE</button>

            </form>
        </RegisterStyled>
    )
}

export default Register;