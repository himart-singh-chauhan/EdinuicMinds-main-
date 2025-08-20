import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Shield, Clock, CheckCircle, Lock, Star } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    // Order Details
    workType: '',
    subject: '',
    pages: 1,
    deadline: '',
    academicLevel: '',
    instructions: '',
    
    // Payment Details
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing Details
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 15,
      features: ['Standard Quality', 'Basic Research', '7 Days Revision', 'Email Support'],
      color: 'from-gray-400 to-gray-600',
      popular: false,
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 25,
      features: ['High Quality', 'In-depth Research', '14 Days Revision', 'Priority Support', 'Plagiarism Report'],
      color: 'from-accent-teal to-accent-light',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 35,
      features: ['Premium Quality', 'Expert Writers', '30 Days Revision', '24/7 Support', 'Free Formatting', 'Direct Communication'],
      color: 'from-primary-dark to-primary-light',
      popular: false,
    },
  ];

  const workTypes = [
    'Assignment', 'Essay', 'Research Paper', 'Thesis', 'Dissertation', 
    'Case Study', 'Lab Report', 'Book Review', 'Presentation', 'Other'
  ];

  const subjects = [
    'Business', 'Computer Science', 'Engineering', 'Literature', 'Psychology', 
    'History', 'Mathematics', 'Biology', 'Chemistry', 'Physics', 'Economics', 'Other'
  ];

  const academicLevels = [
    'High School', 'Undergraduate', 'Graduate', 'Masters', 'PhD'
  ];

  const countries = [
    'USA', 'Australia', 'Romania', 'Tanzania', 'UK', 'Canada', 
    'Germany', 'France', 'UAE', 'Singapore', 'Japan'
  ];

  const calculateTotal = () => {
    const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
    const basePrice = selectedPlanData?.price || 25;
    const pageMultiplier = formData.pages;
    const urgencyMultiplier = formData.deadline === '24 Hours' ? 2 : formData.deadline === '3 Days' ? 1.5 : 1;
    
    return Math.round(basePrice * pageMultiplier * urgencyMultiplier);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    alert('Payment processing would be implemented here with a secure payment gateway.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-neutral-600 hover:text-accent-teal transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Complete Your Order
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Secure payment processing with 256-bit SSL encryption. Your academic success is just one step away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">
                1. Service Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Type of Work *
                  </label>
                  <select
                    name="workType"
                    value={formData.workType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  >
                    <option value="">Select work type</option>
                    {workTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  >
                    <option value="">Select subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Number of Pages *
                  </label>
                  <input
                    type="number"
                    name="pages"
                    value={formData.pages}
                    onChange={handleInputChange}
                    min="1"
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Academic Level *
                  </label>
                  <select
                    name="academicLevel"
                    value={formData.academicLevel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  >
                    <option value="">Select level</option>
                    {academicLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-primary-dark font-medium mb-2">
                    Deadline *
                  </label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  >
                    <option value="">Select deadline</option>
                    <option value="24 Hours">24 Hours (+100% urgency fee)</option>
                    <option value="3 Days">3 Days (+50% urgency fee)</option>
                    <option value="1 Week">1 Week</option>
                    <option value="2 Weeks">2 Weeks</option>
                    <option value="1 Month">1 Month</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-primary-dark font-medium mb-2">
                    Additional Instructions
                  </label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent resize-none"
                    placeholder="Provide any specific requirements, formatting guidelines, or additional details..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">
                2. Choose Your Plan
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-accent-teal shadow-lg scale-105'
                        : 'border-neutral-200 hover:border-accent-teal/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-accent-teal to-accent-light text-white px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-primary-dark">${plan.price}</span>
                        <span className="text-neutral-500">/page</span>
                      </div>
                      
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent-teal flex-shrink-0" />
                            <span className="text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">
                3. Payment Method
              </h2>
              
              <div className="space-y-4 mb-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-accent-teal focus:ring-accent-teal"
                  />
                  <CreditCard className="h-5 w-5 text-accent-teal" />
                  <span className="font-medium text-primary-dark">Credit/Debit Card</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-accent-teal focus:ring-accent-teal"
                  />
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="font-medium text-primary-dark">PayPal</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-primary-dark font-medium mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-primary-dark font-medium mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-primary-dark font-medium mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-primary-dark font-medium mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Billing Information */}
                  <div className="border-t border-neutral-200 pt-6">
                    <h3 className="font-heading text-lg font-bold text-primary-dark mb-4">
                      Billing Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-primary-dark font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-primary-dark font-medium mb-2">
                          Country *
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                        >
                          <option value="">Select country</option>
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-primary-dark font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-primary-dark font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Lock className="h-5 w-5" />
                    <span>Complete Secure Payment</span>
                  </button>
                </form>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center py-8">
                  <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors">
                    Continue with PayPal
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 sticky top-24">
              <h3 className="font-heading text-lg font-bold text-primary-dark mb-4">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Work Type:</span>
                  <span className="font-medium text-primary-dark">{formData.workType || 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subject:</span>
                  <span className="font-medium text-primary-dark">{formData.subject || 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Pages:</span>
                  <span className="font-medium text-primary-dark">{formData.pages}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Deadline:</span>
                  <span className="font-medium text-primary-dark">{formData.deadline || 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Plan:</span>
                  <span className="font-medium text-primary-dark capitalize">{selectedPlan}</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-lg font-bold text-primary-dark">Total:</span>
                  <span className="font-heading text-2xl font-bold text-accent-teal">${calculateTotal()}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>100% Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Money-back Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>Premium Quality Assured</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-6 text-white">
              <h4 className="font-heading text-lg font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>✓ 10+ Years of Excellence</li>
                <li>✓ 500+ Expert Writers</li>
                <li>✓ 50,000+ Satisfied Students</li>
                <li>✓ 24/7 Customer Support</li>
                <li>✓ Plagiarism-Free Guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;