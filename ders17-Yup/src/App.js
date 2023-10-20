import { Form, Formik, useFormikContext } from "formik";
import TextInput from "./Form/TextInput";
import EmailInput from "./Form/EmailInput";
import TextAreaInput from "./Form/TextAreaInput";
import PasswordInput from "./Form/PasswordInput";
import SelectInput from "./Form/SelectInput";
import CheckInput from "./Form/CheckInput";
import RadioInput from "./Form/RadioInput";
import FileInput from "./Form/FileInput";
import React from "react";
import { FormSchema } from "./ErrorValidations";
function App() {
  return (
    <>
      <div>
        <h1>Formlari Doldur!!!</h1>
        <Formik
          initialValues={{
            text: '',
            email: '',
            textarea: '',
            password: '',
            select: '',
            check: false,
            radio: '',
            file:''
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={FormSchema}
        >
          {({ values }) => (
            <Form className="p-5 space-y-6">
              <TextInput type="text" label={"Ad-Soyad"} name={'text'} />
              <EmailInput type="email" label={"Email"} name={'email'} />
              <TextAreaInput type="text" label={"Ozün haqqında məlumat"} name={'textarea'} />
              <PasswordInput label={"Password"} name={'password'} />
              <SelectInput label={"SelectBox"} name={'select'} options={[
                { key: 1, value: "Qadin" },
                { key: 2, value: "Kisi" }
              ]} />
              <CheckInput label={"Qaydalari qebul edirsinizmi"} name={'check'} />
              <RadioInput label={"hansi derecede bilirsiniz?!"} name={'radio'} options={[
                { key: "js", value: "Javascript" },
                { key: "css", value: "Css" },
                { key: "php", value: "PHP" },
              ]} />
              <FileInput type="file" label={"File Sec"} name={'file'} />
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <button type="submit">Gonder</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;
