import React from 'react';
import BlogSection from '../components/BlogSection';
import PageContainer from '../components/PageContainer';

const BlogPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-dark mb-8 text-center">
          Our Blog
        </h1>
        <BlogSection />
      </div>
    </PageContainer>
  );
};

export default BlogPage;
