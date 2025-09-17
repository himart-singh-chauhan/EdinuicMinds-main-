import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose max-w-none">
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, make a purchase, 
              or contact us for support. This may include your name, email address, phone number, and payment information.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to enhance your experience on our website. You can control 
              cookie settings through your browser preferences.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of 
              certain communications from us. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
