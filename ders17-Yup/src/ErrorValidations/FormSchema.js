import Yup from "./LocalValidations/localValidation"
export const FormSchema = Yup.object().shape({
   text: Yup.string()
      .required(),
   password: Yup.string().required().min(6),
   email: Yup.string()
      .required(),
   textarea: Yup.string()
      .required(),
   select: Yup.string()
      .required(),
   check: Yup.boolean().oneOf([true]),
   radio:Yup.string().required("Seviyenizi secin"),
   file:Yup.mixed()
   .test({
      message:"Bir File Sec",
      test: file=>file?.name
   })
})