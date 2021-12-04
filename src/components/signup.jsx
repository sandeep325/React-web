import React from "react";
import { Formik, Form } from "formik";
import  TextFiled   from './TextFiled';
import * as Yup from 'yup';
const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(15, 'Must be 10 characters or less')
            .required('Required'),

        email: Yup.string()
            .email('invalid email')
            .required(' Email is Required'),

        password: Yup.string()
            .min(6, 'password must be at leaset 6 char.')
            .required(' password is Required'),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password must be match')
            .required(' confirm password is Required'),

    }) //end yup lib
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}

            onsubmit={values => { console.log(values) }}>

            {formik => {
                // console.log(formik);
                <div>
                    <h1 className="my-4 font-weight-bold .display-4"> Sign Up</h1>
                    <Form>
                        <TextFiled lable="First Name" name="firstName" type="text" />
                        <TextFiled lable="Last Name" name="lastName" type="text" />
                        <TextFiled lable="Email" name="email" type="email" />
                        <TextFiled lable="Password" name="password" type="password" />
                        <TextFiled lable="Confirm Password" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit" />
                        <button className="btn btn-danger mt-3 ml-3" type="reset" />


                    </Form>
                </div>

            }}

        </Formik>

    );

}

export default Signup;