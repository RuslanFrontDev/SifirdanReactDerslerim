import * as Yup from "yup";
Yup.setLocale({
   mixed: {
      required: "bu alani doldurun",
      oneOf:'Zəhmət olmasa təsdiqləyin'
   },
   string:{
      min:'Bu alan min ${min} xarakter olmali'
   }
})
export default Yup