import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Layout from "../components/Layout";



const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};


const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const form = useRef();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setMessage({ text: 'Your message has been successfully sent. We will contact you soon!', type: 'success' });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ text: '', type: '' }); // Reset the message

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
      .then((result) => {
        setMessage({ text: 'Message successfully sent!', type: 'success' });
        setSubmitting(false);
      }, (error) => {
        setMessage({ text: 'Error sending message. Please try again later.', type: 'error' });
        setSubmitting(false);
      });
  };

  const inputVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <Layout title="Contact us" footer={false}>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="p-6 rounded-3 shadow-sm bg-light"> {/* Estilos para el formulario */}

              <motion.form
                ref={form}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)}
                className="card card-body bg-light shadow"
                style={{ borderRadius: '15px' }}
              >

                {/* Form Fields */}
                <motion.div className="mb-3" variants={inputVariants}>

                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                  {errors.name && <div className="text-danger">Name is required</div>}
                </motion.div>

                <motion.div className="mb-3" variants={inputVariants}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" {...register('email', { required: true })} />
                  {errors.email && <div className="text-danger">Email is required</div>}
                </motion.div>

                <motion.div className="mb-3" variants={inputVariants}>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" {...register('subject', { required: true })} />
                  {errors.subject && <div className="text-danger">Subject is required</div>}
                </motion.div>

                <motion.div className="mb-3" variants={inputVariants}>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" {...register('message', { required: true })}></textarea>
                  {errors.message && <div className="text-danger">Message is required</div>}
                </motion.div>

                {/* Submit Button and Feedback Message */}

                <motion.button
                  type="submit"
                  className="btn btn-primary d-block mx-auto"
                  disabled={submitting}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                {message.text && (
                  <div className={`alert mt-3 ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
                    {message.text}
                  </div>
                )}
              </motion.form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 border rounded-3 shadow-sm bg-white"> {/* Estilos para la info de contacto */}
              <h2 className="mb-3">Contact Information</h2>
              <p className="mb-2"><strong>Email:</strong> hello@cognirock.com</p>
              {/* Redes Sociales */}
              <h3 className="mb-3">Follow Us</h3>
              <a href="https://facebook.com" className="btn btn-outline-primary btn-sm me-2 mb-2">Facebook</a>
              <a href="https://twitter.com" className="btn btn-outline-info btn-sm me-2 mb-2">Twitter</a>
              <a href="https://instagram.com" className="btn btn-outline-danger btn-sm mb-2">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;


