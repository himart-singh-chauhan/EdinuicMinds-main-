import React from 'react';
import CoursesSection from '../components/CoursesSection';
import PageContainer from '../components/PageContainer';

const CoursesPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-dark mb-8 text-center">
          Our Courses
        </h1>
        <CoursesSection />
      </div>
    </PageContainer>
  );
};

export default CoursesPage;
