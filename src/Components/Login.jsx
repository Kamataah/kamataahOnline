
import { useNavigate } from "react-router-dom";
import { post_data } from "../ApiServices";
import { convertToPayload, setTokenData } from "../Utils";
import { ErrorMessage, FormikProvider, useFormik } from "formik";
import { loginFormSchema } from "../Schema";
import { Form } from "react-bootstrap";

function Login() {
    const navigate = useNavigate();

    const Loginform = useFormik({
        initialValues: {
            emailId: "",
            userPassword: ""
        },
        validationSchema: loginFormSchema,
        onSubmit: (values) => {
            console.log("Form submitted:", values);
            handleSubmit();
        },

    })

    const handleSubmit = () => {
        let payload = {
            emailId: Loginform.values.emailId,
            userPassword: Loginform.values.userPassword,
        }
        post_data("public", convertToPayload('login', payload), {})
            .then((response) => {
                if (response.status) {
                    setTokenData(response.data.result);
                    navigate("/master/dashboard");
                } else {
                    alert("Signup failed. Please try again.");
                }
            }).catch((error) => {
                console.error("Error during signup:", error);
                // alert("An error occurred during signup. Please try again.");
            })
    };

    return (
        <div className="login-container container">
            <FormikProvider value={Loginform}>
                <Form className="row g-3">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <label className="form-label mb-1" htmlFor="emailId">Email Address</label>
                        <input type="text" id="emailId" name="emailId" placeholder="Enter your email" className="form-control"
                            value={Loginform.values.emailId} onChange={Loginform.handleChange} onBlur={Loginform.handleBlur} />
                        <ErrorMessage name={`emailId`} component="small" className='text-danger' />
                    </div>


                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <label className="form-label mb-1" htmlFor="userPassword">Password</label>
                        <input type="password" id="userPassword" name="userPassword" placeholder="Enter your password" className="form-control"
                            value={Loginform.values.userPassword} onChange={Loginform.handleChange} onBlur={Loginform.handleBlur} />
                        <ErrorMessage name={`userPassword`} component="small" className='text-danger' />
                    </div>

                    <div className="text-center">
                        <button type="button" className="btn btn-outline-primary" onClick={Loginform.handleSubmit}>Sign In</button>
                        <div className="signup-prompt">
                            don't have an account?{" "}
                            <button type="button" onClick={() => navigate("/register")} className="btn btn-outline-primary">
                                Sign Up
                            </button>
                        </div>
                    </div>

                </Form>
            </FormikProvider>

        </div>
    );
}

export default Login;
