import React from 'react'
import {Field, Form, Formik} from 'formik'

const ContactForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)
            }}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col text-left'>
                    <Field type="text" className='my-1.5 p-1 outline-0 border rounded pl-2 text-sm' name="name" placeholder="Name" />
                    <Field type="email" className='my-1.5 p-1 outline-0 border rounded pl-2 text-sm' name="email" placeholder="Email" />
                    <Field type="phone" className='my-1.5 p-1 outline-0 border rounded pl-2 text-sm' name="Mobile" placeholder="Mobile" />
                    <Field as="textarea" className='my-1.5 p-1 outline-0 border rounded pl-2 text-sm' name="message" placeholder="Message" />
                    <button type="submit" className='my-2 w-28 p-1 rounded font-semibold bg-black text-cr-white hover:text-gray-200 hover:bg-gray-800 duration-500 cursor-pointer drop-shadow-lg' disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
