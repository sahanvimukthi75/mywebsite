import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Map from './Map';
import Footer from './Footer';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5utlw8s', 'template_zgtljke', form.current, {
        publicKey: 'muw6yK6TM03lAlTeO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const styles = {
    form: {
      
      maxWidth: '500px',
      margin: '150px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      background: '#f9f9f9',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '16px',
      background: '#fff',
      transition: 'border 0.3s ease',
    },
    inputFocus: {
      border: '1px solid #007bff',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '16px',
      background: '#fff',
      transition: 'border 0.3s ease',
    },
    submit: {
      width: '100%',
      padding: '15px',
      background: '#f34f0a',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
   
  };


  return (

    <div> <Navbar/>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input type="text" name="from_name" style={styles.input} />
        <label style={styles.label}>Email</label>
        <input type="email" name="from_email" style={styles.input} />
        <label style={styles.label}>Message</label>
        <textarea name="message" style={styles.textarea} />
        <input
          type="submit"
          value="Send"
          style={styles.submit}
         
        />
      </form>
      <Map/>
      <div className='mt-10'> <Footer/></div>
     
      
    </div>
    
  );
};