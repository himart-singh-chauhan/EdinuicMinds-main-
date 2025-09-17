import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose max-w-none">
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Edunique Minds services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Services Description</h2>
            <p className="text-gray-600 mb-6">
              Edunique Minds provides academic assistance services including but not limited to assignment help, 
              thesis writing, research papers, tutoring, and online courses. All services are for educational 
              and reference purposes only.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">User Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate and complete information when placing orders</li>
              <li>Use our services for educational and reference purposes only</li>
              <li>Not engage in any fraudulent or illegal activities</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain the confidentiality of your account credentials</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment is required before work begins on your order. We accept various payment methods as listed 
              on our website. All prices are in USD and are subject to applicable taxes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Refund Policy</h2>
            <p className="text-gray-600 mb-6">
              We offer refunds under specific circumstances as outlined in our refund policy. Refund requests 
              must be submitted within the specified timeframe and meet our refund criteria.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content and materials provided by Edunique Minds are for your personal, non-commercial use only. 
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Edunique Minds shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages arising from your use of our services.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Privacy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
              the services, to understand our practices.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Modifications</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
              posting on our website. Your continued use constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: info@eduniqueminds.com
              <br />
              Phone: +91 92171 89006
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
