import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Edunique Minds offer?",
      answer: "We offer comprehensive academic assistance including assignment help, thesis writing, research papers, case studies, online courses, and one-on-one tutoring across various subjects and academic levels."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order by contacting us through our contact form, email, or phone. Our team will guide you through the process and provide you with a customized quote based on your requirements."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a satisfaction guarantee. If you're not satisfied with our work, we provide free revisions. If the work doesn't meet the agreed requirements, we offer partial or full refunds based on our refund policy terms."
    },
    {
      question: "How do you ensure plagiarism-free work?",
      answer: "All our work is original and written from scratch. We use advanced plagiarism detection tools to ensure 100% originality. We also provide plagiarism reports upon request."
    },
    {
      question: "What are your payment methods?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, bank transfers, and other secure online payment systems. All transactions are encrypted and secure."
    },
    {
      question: "Do you provide 24/7 customer support?",
      answer: "Yes, we provide round-the-clock customer support. You can reach us anytime via email, phone, or live chat for any queries or assistance."
    },
    {
      question: "Can I track the progress of my order?",
      answer: "Absolutely! We provide regular updates on your order progress. You can also directly communicate with your assigned expert to track the work and provide additional instructions."
    },
    {
      question: "What qualifications do your experts have?",
      answer: "Our team consists of highly qualified professionals with advanced degrees (Masters and PhDs) from reputable universities. They have extensive experience in their respective fields and academic writing."
    },
    {
      question: "Do you handle urgent orders?",
      answer: "Yes, we accept urgent orders with deadlines as short as 6 hours. However, we recommend placing orders with reasonable deadlines to ensure the best quality of work."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we maintain strict confidentiality. Your personal information and order details are kept secure and never shared with third parties. We follow industry-standard security protocols."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most commonly asked questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-heading text-lg font-semibold text-primary-dark pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent-teal flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-accent-teal flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-accent-teal to-accent-light text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
