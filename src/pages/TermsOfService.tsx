import React from 'react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-brand-purple mb-8">Terms of Service</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Welcome to Clean Hizen. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services complies with all applicable laws and regulations.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Guarantee</h2>
        <p className="mb-4">
          We strive to provide the highest quality cleaning services. If you are not satisfied with our service, please contact us within 24 hours, and we will return to address the issue at no additional cost.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall Clean Hizen, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>
      </div>
    </div>
  );
}
