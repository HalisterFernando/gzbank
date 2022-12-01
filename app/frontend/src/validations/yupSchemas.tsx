import * as yup from 'yup';

export const signinSchema = yup.object().shape({
    username: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "O nome deve conter no mínimo 3 caracteres"),
    password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,26})/,
        `A senha deve conter no mínimo 8 caracteres, 
        dentre eles ao menos um número e uma letra maiúscula`
    )
})

export const transferSchema = yup.object().shape({
     amount: yup
    .string()
    .required("Campo obrigatório")
    .min(1)
    .matches(/^\d+$/g, "O valor não pode conter ponto ou vírgula")
})

