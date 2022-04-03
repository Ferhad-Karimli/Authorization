// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Button from "@mui/material/Button";
// interface State {
//   password: string;
//   email : string
//   showPassword: boolean;
// }

// function Login() {
//   const [values, setValues] = React.useState<State>({
   
//     password: "",
//      email : "" ,
//     showPassword: false,
//   });
// console.log(values.password,"values")
//   const handleChange =
//     (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//       console.log(prop,"props")
//       setValues({ ...values, [prop]: event.target.value });
//     };

//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <h1>Authorization</h1>
//       <TextField
//         value={values.password}
//         onChange={handleChange("email")}
//         id="standard-password-input"
//         label="Email"
//         type="email"
//         autoComplete="current-password"
//         variant="standard"
//       />

//       <div>
//         <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
   
//           <InputLabel htmlFor="standard-adornment-password">
//             Password
//           </InputLabel>

         
//           <Input
//             id="standard-adornment-password"
//             type={values.showPassword ? "text" : "password"}
//             value={values.password}
//             onChange={handleChange("password")}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//       </div>

//       <Button variant="contained">Log in</Button>
//     </div>
//   );
// }

// export default Login;


import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
  },
})(InnerForm);

// Use <MyForm /> wherevs
const Login = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <MyForm message="Sign up" />
  </div>
);

export default Login;