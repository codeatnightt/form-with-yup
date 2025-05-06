import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Card, Col, Container, Row } from 'react-bootstrap';
const FormWithYup = () => {

    const validationSchema = Yup.object({
        name: Yup.string().min(3,'Name must be at least 3 characters').required("Name is required"),
        email: Yup.string().email().required("Email is required"),
        contact: Yup.string().matches(/^[0-9]{10}$/,'Contact number should be 10 digit.').required("Contact is required")
    })


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            contact: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <>
            <Container>
                <Row>
                    <Col md={5}>
                        <Card className='m-4 p-4'>
                            <form onSubmit={formik.handleSubmit}>

                                <div className='mt-2'>
                                    <label>Name: </label>
                                    <input
                                        type="text"
                                        name='name'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className='form-control'
                                    />
                                    {
                                        formik.touched.name && formik.errors.name && (
                                            <div style={{ color: 'red' }}>{formik.errors.name}</div>
                                        )
                                    }
                                </div>

                                <div className='mt-2'>
                                    <label>Email: </label>
                                    <input
                                        type="email"
                                        name='email'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className='form-control'
                                    />
                                    {
                                        formik.touched.email && formik.errors.email && (
                                            <div style={{ color: 'red' }}>{formik.errors.email}</div>
                                        )
                                    }
                                </div>

                                <div className='mt-2'>
                                    <label>Contact: </label>
                                    <input
                                        type="text"
                                        name='contact'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.contact}
                                        className='form-control'
                                    />
                                    {
                                        formik.touched.contact && formik.errors.contact && (
                                            <div style={{ color: 'red' }}>{formik.errors.contact}</div>
                                        )
                                    }
                                </div>

                                <button className='mt-3 btn btn-primary' type='submit'>Submit</button>

                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormWithYup