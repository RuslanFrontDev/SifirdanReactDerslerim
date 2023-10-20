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

function App() {
  const AutoSubmitToken = () => {
    // Grab values and submitForm from context
    const { values, submitForm } = useFormikContext();
    React.useEffect(() => {
      // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
      if (values.token.length === 6) {
        submitForm();
      }
    }, [values, submitForm]);
    return null;
  };
  return (
    <>
      {/* 1. ornek */}
      {/* <div>
        <h1>Formlari Doldur!!!</h1>
        <Formik
          initialValues={{
            text: '',
            email: '',
            textarea: '',
            password: '',
            select: "",
            check: false,
            radio: 'js',
            file:''
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
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
      </div> */}
      {/* .................................................... */}
      {/*2. ornek  Formu avtomatik göndər */}
      <div>
        <h1>Formu avtomatik göndər</h1>
        <p>Xaiş olunur 6 rəqəmli kodunuzu daxil edin </p>
        <Formik
          initialValues={{ token: '' }}
          validate={values => {
            const errors = {};
            if (values.token.length < 5) {
              errors.token = 'Invalid code. Too short.';
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log(values);
            }, 1000);
          }}
        >
          <Form>
            <PasswordInput name="token" type="password" />
            <AutoSubmitToken />
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default App;
