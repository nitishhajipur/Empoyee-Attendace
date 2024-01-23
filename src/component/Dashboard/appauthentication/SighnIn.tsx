import React from 'react'
import { useNavigate } from 'react-router-dom'
import rightPortionImage from '../../../assets/leftcoverpoto.webp'
import './styles.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FetchData } from '../../../config/fetch'
import { toast } from 'react-toastify'
const SighnIn = () => {
    const schema = Yup.object().shape({
        userName: Yup.string().required("Please Enter UserName"),
        password: Yup.string().required("Please Enter Password")
    })

    const navigate = useNavigate()
    const handleSignIn = (values: any) => {
        const payload = { url: 'http://localhost:3006/api/validateUser', method: 'POST', data: values }
        FetchData(payload).then((response: any) => {
            if(response.data.status == 'error'){
                toast.error(response.data.message)
            }else{
                navigate('/home')
                sessionStorage.setItem('id',response.data.id)
            }
        })
    }
    return (
        <>
            <div className='sighnIn'>
                <div className='authenticationContainer d-flex col-6'>
                    <div className='col-6 imgcontainer'>
                        <img src={rightPortionImage} />

                    </div>
                    <div className='col-6 credentailsContainer'>
                        <p className='primaryheader'>Welcome ! Lets get started</p>

                        <Formik
                            initialValues={{ userName: '', password: '' }}
                            validationSchema={schema}
                            onSubmit={(values: any) => { handleSignIn(values) }}>
                            {({ errors, values, touched, setFieldValue }) => {
                                return (
                                    <Form
                                        className='sighnInForm'>
                                        <div className='field'>

                                            <label>UserName:</label>
                                            <Field
                                                type='text'
                                                value={values?.userName}
                                                name="userName"
                                                placeholder='user name'
                                                className="form-control"
                                            />
                                            {errors?.userName && touched?.userName ? <div className='text-danger'> <ErrorMessage name='userName' /></div> : ""}
                                        </div>
                                        <div className='field'>
                                            <label>PassWord:</label>
                                            <Field type='password' className='form-control' name='password' placeholder='password' value={values.password} />
                                            {errors?.password && touched?.password ? <div className='text-danger'><ErrorMessage name='password' /></div> : ""}
                                        </div>
                                        <div>
                                            <button type='submit' className='login'> Sign in</button>
                                            <button type='button' className='sighnUp'> Sign up</button>

                                        </div>

                                    </Form>
                                )
                            }}
                        </Formik>

                        {/* <input type='text' className='form-control' placeholder='username'></input> */}

                    </div>

                </div>

            </div>
        </>
    )

}
export default SighnIn