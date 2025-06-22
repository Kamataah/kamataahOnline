
import { useNavigate } from "react-router-dom";
import { post_data } from "../ApiServices";
import { convertToPayload } from "../Utils";
import { ErrorMessage, FormikProvider, useFormik } from "formik";
import { signupFormSchema } from "../Schema";
import { Form } from "react-bootstrap";

function SignupPage() {
  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      fullName: "",
      mobileNo: "",
      emailId: "",
      userPassword: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: signupFormSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      handleSubmit();
    },

  })

  const handleSubmit = () => {
    let payload = {
      fullName: signupForm.values.fullName,
      mobileNo: signupForm.values.mobileNo,
      emailId: signupForm.values.emailId,
      userPassword: signupForm.values.userPassword,
    }
    post_data("public", convertToPayload(payload), {})
      .then((response) => {
        if (response.status) {
          alert("Signup successful! Please log in.");
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
      <FormikProvider value={signupForm}>
        <Form className="row g-3">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label className="form-label mb-1" htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Enter your full Name"
              value={signupForm.values.fullName} onChange={signupForm.handleChange} onBlur={signupForm.handleBlur} />
            <ErrorMessage name={`fullName`} component="small" className='text-danger' />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label className="form-label mb-1" htmlFor="emailId">Email Address</label>
            <input type="text" id="emailId" name="emailId" placeholder="Enter your email" className="form-control"
              value={signupForm.values.emailId} onChange={signupForm.handleChange} onBlur={signupForm.handleBlur} />
            <ErrorMessage name={`emailId`} component="small" className='text-danger' />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label className="form-label mb-1" htmlFor="mobileNo">Phone Number</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ paddingRight: "5px" }}>+91</span>
              <input type="text" id="mobileNo" name="mobileNo" placeholder="Enter 10-digit number" className="form-control"
                value={signupForm.values.mobileNo} onChange={signupForm.handleChange} onBlur={signupForm.handleBlur} />
            </div>
            <ErrorMessage name={`mobileNo`} component="small" className='text-danger' />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label className="form-label mb-1" htmlFor="userPassword">Password</label>
            <input type="password" id="userPassword" name="userPassword" placeholder="Enter your password" className="form-control"
              value={signupForm.values.userPassword} onChange={signupForm.handleChange} onBlur={signupForm.handleBlur} />
            <ErrorMessage name={`userPassword`} component="small" className='text-danger' />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label className="form-label mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter your password" className="form-control"
              value={signupForm.values.confirmPassword} onChange={signupForm.handleChange} onBlur={signupForm.handleBlur} />
            <ErrorMessage name={`confirmPassword`} component="small" className='text-danger' />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <label className="form-label mb-1" htmlFor="userPassword">
              <input style={{ height: "15px", width: "15px", margin: "5px" }} className="form-check-input"
                type="checkbox" id="terms" name="terms" value={signupForm.values.terms}
                checked={signupForm.values.terms} onChange={signupForm.handleChange} />
              <span className="ms-2">I agree to the terms and conditions & privacy </span>
            </label>
            <div>
              <ErrorMessage name={`terms`} component="small" className='text-danger' />
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary" onClick={signupForm.handleSubmit}>Sign Up</button>
            <div className="signup-prompt">
              Already have an account?{" "}
              <button type="button" onClick={() => navigate("/login")} className="btn btn-outline-primary">
                Sign In
              </button>
            </div>
          </div>

        </Form>
      </FormikProvider>

    </div>
  );
}

export default SignupPage;
