import React from 'react';
import AboutSection from '../components/AboutSection';
import PageContainer from '../components/PageContainer';

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-dark mb-8 text-center">
          About Edunique Minds
        </h1>
        <AboutSection />
      </div>
    </PageContainer>
  );
};

export default AboutPage;
