import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Hero 
        title="Contactez-Nous"
        subtitle="Notre équipe est à votre disposition pour répondre à toutes vos questions"
        imageUrl="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        height="50vh"
      />
      
      <ContactForm />
    </>
  );
};

export default Contact;