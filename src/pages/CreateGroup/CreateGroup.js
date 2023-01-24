import { FormStyled, ButtonDefaultStyled } from "../../styles/Form.styled";
import { CreateGroupStyled } from "./CreateGroup.styled";

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
        <CreateGroupStyled onSubmit={handleSubmit(onSubmit)}>
                <form>
                    <RegisterGroup errors={errors} register={register} />
                    <RegisterAddress errors={errors} register={register} />
                    <ButtonDefaultStyled>Criar</ButtonDefaultStyled>
                </form>
        </CreateGroupStyled>
    )
}

export default CreateGroup;