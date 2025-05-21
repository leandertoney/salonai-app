import React, { useState } from 'react';
import { Button } from './Button';
import { ChevronLeft, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface StepProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepProps> = ({ currentStep, totalSteps }) => (
  <div className="text-center mb-8">
    <p className="text-sm text-neutral-600 mb-2">STEP {currentStep} OF {totalSteps}</p>
  </div>
);

interface BusinessType {
  id: string;
  name: string;
  icon: string;
}

const businessTypes: BusinessType[] = [
  {
    id: 'salon',
    name: 'Hair Salon',
    icon: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 'barbershop',
    name: 'Barbershop',
    icon: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 'spa',
    name: 'Spa & Beauty',
    icon: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 'nails',
    name: 'Nail Salon',
    icon: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const DemoForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessType: '',
    businessStage: '',
    businessName: '',
    locations: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            business_type: formData.businessType,
            business_stage: formData.businessStage,
            business_name: formData.businessName,
            locations: formData.locations,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone
          }
        ]);

      if (error) throw error;
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error handling UI here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-success-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Thank you for your interest!</h2>
        <p className="text-lg text-neutral-600 mb-8">
          One of our team members will contact you shortly to schedule your personalized demo.
        </p>
        <div className="max-w-md mx-auto p-6 bg-neutral-50 rounded-lg">
          <h3 className="font-medium mb-4">What happens next?</h3>
          <ol className="text-left space-y-4">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</span>
              <p>Our team will review your business details and prepare a customized demo</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</span>
              <p>You'll receive an email within 24 hours to schedule your demo at a convenient time</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</span>
              <p>During the demo, we'll show you how SalonAI can help grow your business</p>
            </li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <StepIndicator currentStep={step} totalSteps={4} />

      {step > 1 && (
        <button
          onClick={handleBack}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ChevronLeft size={16} className="mr-1" />
          Go back
        </button>
      )}

      {step === 1 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">What type of business are you?</h2>
          <div className="grid grid-cols-2 gap-4">
            {businessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setFormData({ ...formData, businessType: type.id });
                  handleNext();
                }}
                className={`p-6 border rounded-xl text-center hover:border-primary-300 transition-all ${
                  formData.businessType === type.id ? 'border-primary-500' : 'border-neutral-200'
                }`}
              >
                <img
                  src={type.icon}
                  alt={type.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium text-lg">{type.name}</h3>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Has your business launched yet?</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setFormData({ ...formData, businessStage: 'pre-launch' });
                handleNext();
              }}
              className="p-6 border rounded-xl text-center hover:border-primary-300 transition-all"
            >
              <img
                src="https://images.pexels.com/photos/7414217/pexels-photo-7414217.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Pre-launch"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg">No, not yet</h3>
            </button>
            <button
              onClick={() => {
                setFormData({ ...formData, businessStage: 'operating' });
                handleNext();
              }}
              className="p-6 border rounded-xl text-center hover:border-primary-300 transition-all"
            >
              <img
                src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Operating"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg">Yes, we're operating</h3>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Tell us about your business.</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Business name
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Number of locations
                </label>
                <div className="space-y-2">
                  {['1 location', '2-9 locations', '10+ locations'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="locations"
                        value={option}
                        checked={formData.locations === option}
                        onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <Button type="submit" fullWidth className="mt-4">
                Next
              </Button>
            </div>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">How can we contact you?</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Business email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Business phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Button 
                type="submit" 
                fullWidth 
                className="mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Your Demo'}
              </Button>
            </div>
          </form>
          <p className="text-xs text-neutral-500 text-center mt-4">
            We're committed to your privacy. SalonAI uses the information you provide to contact you about relevant content, products, and services. You may unsubscribe at any time.
          </p>
        </div>
      )}
    </div>
  );
};