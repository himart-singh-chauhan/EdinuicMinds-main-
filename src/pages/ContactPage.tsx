import React from 'react';
import ContactSection from '../components/ContactSection';
import PageContainer from '../components/PageContainer';

const ContactPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-dark mb-8 text-center">
          Contact Us
        </h1>
        <ContactSection />
      </div>
    </PageContainer>
  );
};

export default ContactPage;
