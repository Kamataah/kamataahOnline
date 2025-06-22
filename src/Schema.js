import * as yup from 'yup'

export const signupFormSchema = yup.object().shape({
    fullName: yup.string().required('mandatory field*'),
    emailId: yup.string().email('Invalid email format').required('mandatory field*'),
    mobileNo: yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('mandatory field*'),
    userPassword: yup.string().min(6, 'Password must be at least 6 characters long').required('mandatory field*'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('userPassword'), null], 'Passwords must match')
        .required('mandatory field*'),
    terms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
});
export const loginFormSchema = yup.object().shape({
    emailId: yup.string().email('Invalid email format').required('mandatory field*'),
    userPassword: yup.string().min(6, 'Password must be at least 6 characters long').required('mandatory field*'),
});


