import * as yup from 'yup';

const signInSchema = yup.object().shape({
    username: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Deve conter no mínimo 3 caractéres"),
    password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,26})/,
        "A senha deve conter ao menos um número e uma letra maiúscula com no mínimo 8 caractéres"
    )
})

export default signInSchema