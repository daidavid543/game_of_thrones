import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {actionAuthChange} from "../redux/actions/Auth";
import {ErrorMessage} from "../services/Message";
import {Formik, Form, Field} from 'formik';

export default function Auth(props: any) {
    const dispatch = useDispatch();
    const [mode, setMode] = useState<string>('SIGN_IN');

    const onLogin = async (values: { username: string, password: string }) => {
        if (values.username === 'admin' && values.password === 'admin') {
            onAuthed({
                ...values,
            })
        } else {
            ErrorMessage('Wrong username or password!')
        }
    }

    const onAuthed = (user: any) => {
        dispatch(actionAuthChange(user));
    }

    return (
        <>
            <div className="d-flex flex-column flex-root">

                <div className="d-flex flex-column flex-lg-row flex-column-fluid" id="kt_login">

                    <div className="d-flex flex-column flex-lg-row-auto bg-primary w-lg-600px pt-15 pt-lg-0">

                        <div
                            className="d-flex flex-row-fluid flex-center flex-column-auto flex-column text-center mb-5">

                            <a href="/" className="mb-6 logo-text">
                                Game Of Thrones Fan
                            </a>


                            <h3 className="fw-bolder fs-2x text-white lh-lg">Discover Start
                                <br/>with great build tools</h3>

                        </div>


                        <div style={{backgroundImage: "url('/assets/images/bgAuth.png')"}}
                             className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"/>

                    </div>


                    <div
                        className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-10 py-lg-20 px-10 p-lg-7 mx-auto mw-450px w-100">

                        <div className="d-flex flex-column-fluid flex-center py-10">
                            {
                                mode === 'SIGN_IN' ? (
                                    <SignIn onSubmit={onLogin}/>
                                ) : null
                            }

                        </div>
                        <div
                            className="d-flex justify-content-lg-start justify-content-center align-items-center py-2 py-lg-7 py-lg-0 fs-5 fw-bolder">
                            <a href="#" target="_blank"
                               className="text-gray-600 text-hover-primary">About</a>
                            <a href="#" target="_blank"
                               className="text-gray-600 text-hover-primary ms-10">Support</a>
                            <a href="#" target="_blank"
                               className="text-gray-600 text-hover-primary ms-10">Contact</a>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

function SignIn(props: any) {

    const onSubmit = (values: any) => {
        props.onSubmit(values);
    }

    return (
        <Formik initialValues={{}} onSubmit={(values, formikHelpers) => onSubmit(values)}>
            <Form>
                <div className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                     id="kt_login_signin_form">

                    <div className="pb-5 pb-lg-15">
                        <h3 className="fw-bolder text-dark display-6">Welcome to Game Of Thrones Fan</h3>
                    </div>


                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                        <Field name={'username'} className="form-control form-control-lg form-control-solid" type="text"
                               autoComplete="off"/>
                        <div className="fv-plugins-message-container invalid-feedback"/>
                    </div>


                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <div className="d-flex justify-content-between mt-n5">
                            <label className="form-label fs-6 fw-bolder text-dark pt-5">Password</label>
                            <a href="#" className="text-primary fs-6 fw-bolder text-hover-primary pt-5"
                               id="kt_login_signin_form_password_reset_button">Forgot Password ?</a>
                        </div>
                        <Field className="form-control form-control-lg form-control-solid" type="password"
                               name="password" autoComplete="off"/>
                        <div className="fv-plugins-message-container invalid-feedback"/>
                    </div>


                    <div className="pb-lg-0 pb-5">
                        <button type="submit" id="kt_login_signin_form_submit_button"
                                className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3">Sign In
                        </button>
                    </div>
                </div>
            </Form>

        </Formik>
    )
}
