import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose max-w-none">
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">What are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> These allow the website to remember choices you make</li>
              <li><strong>Marketing Cookies:</strong> These are used to deliver relevant advertisements to you</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Types of Cookies We Use</h2>
            
            <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">Session Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are temporary and are deleted when you close your browser. They help us provide you with 
              a seamless browsing experience during your visit.
            </p>

            <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">Persistent Cookies</h3>
            <p className="text-gray-600 mb-6">
              These cookies remain on your device for a specified period or until you delete them. They help us 
              remember your preferences and settings for future visits.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may use third-party services that place cookies on your device. These include analytics services, 
              social media platforms, and advertising networks. Each third party has its own cookie policy.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Delete cookies from your browser's settings</li>
              <li>Block cookies by adjusting your browser settings</li>
              <li>Use private/incognito browsing mode</li>
              <li>Opt-out of targeted advertising cookies</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Browser Settings</h2>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings. Here's how to manage cookies 
              in popular browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Chrome:</strong> Settings {'->'} Privacy and Security {'->'} Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options {'->'} Privacy & Security {'->'} Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences {'->'} Privacy {'->'} Manage Website Data</li>
              <li><strong>Edge:</strong> Settings {'->'} Cookies and site permissions</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-600 mb-6">
              Please note that disabling cookies may affect the functionality of our website. Some features may not 
              work properly or may not be available if cookies are disabled.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with 
              an updated revision date.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicyPage;
