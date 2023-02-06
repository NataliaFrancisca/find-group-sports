import "./CreateGroup.styled.css";

import RegisterAddress from "../../components/Form/RegisterAddress";
import RegisterGroup from "../../components/Form/RegisterGroup";

import { useForm } from "react-hook-form";
import { useRef } from "react";

const CreateGroup = () => {

    const ref_form = useRef();

    const { register, formState: { errors }, handleSubmit } = useForm({
        name: '',
        sport: '',
        instagram: '',
        schedule: [],
        group_type: [],
        price: '',
        address: {
            neighborhood: '',
            city: '',
            state: ''
        }
    })


    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <main id="create-group-styled" onSubmit={handleSubmit(onSubmit)}>
                <form ref={ref_form}>
                    <fieldset errors={errors} register={register} />
                    <fieldset errors={errors} register={register} />
                    <button id="">Criar</button>
                </form>
        </main>
    )
}

export default CreateGroup;