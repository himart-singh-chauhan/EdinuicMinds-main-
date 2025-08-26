import React from "react";

const TrainingAndDevelopmentSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Training Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Training</h2>
          <p className="text-gray-700 mb-2">Explore our training programs designed to boost your skills and knowledge.</p>
          {/* Add more training details here if needed */}
        </div>
        {/* Development Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* App Development */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">App Development</h3>
              <p className="text-gray-700">We offer hands-on app development training and services for Android and iOS platforms.</p>
            </div>
            {/* Web Development */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Web Development</h3>
              <p className="text-gray-700">Learn modern web development or get your website built by our expert team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingAndDevelopmentSection;
