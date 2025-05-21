import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PricingCard } from '../components/PricingCard';
import { pricing } from '../data/mockData';
import { 
  Calendar, 
  CreditCard, 
  Users, 
  Bell, 
  MessageCircle, 
  Sparkles,
  Package
} from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Stylish salon interior" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Smarter Tools for Salon Professionals
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200">
              Bookings, payments, inventory, and client care—effortlessly managed.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <Button size="lg">
                  Try It Free
                </Button>
              </Link>
              <Link to="/get-demo">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                  Get a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Salon Management Solution</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our all-in-one platform streamlines every aspect of your salon business, from client bookings to inventory management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-primary-100 rounded-2xl text-primary-700">
                <Sparkles size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
                <p className="text-neutral-600 mb-4">
                  AI-powered scheduling optimizes your calendar and maximizes revenue with intelligent booking management.
                </p>
                <img 
                  src="https://media.istockphoto.com/id/2163868506/photo/african-woman-organizing-appointment-schedule-using-cellphone-and-calendar.jpg?b=1&s=612x612&w=0&k=20&c=di3KHYAU_F6nIeOAs2-YgHDFR5BOMn9O5K83l8Ep3w4=" 
                  alt="Smart scheduling interface" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-secondary-100 rounded-2xl text-secondary-700">
                <Package size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inventory Control</h3>
                <p className="text-neutral-600 mb-4">
                  Track products, automate reordering, and manage stock levels with real-time alerts and analytics.
                </p>
                <img 
                  src="https://media.istockphoto.com/id/1010012270/photo/image-of-shelves-with-conditioners-and-mousses-for-hair-in-the-store.jpg?b=1&s=612x612&w=0&k=20&c=Qn0b8wytgRSJZI8QFoyCls68hh7pddMpcUxp0WNDJks=" 
                  alt="Salon products on shelves" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-success-100 rounded-2xl text-success-700">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Client Management</h3>
                <p className="text-neutral-600 mb-4">
                  Build lasting relationships with detailed client profiles, history tracking, and automated communications.
                </p>
                <img 
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Stylist consulting with client" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Salon Professionals</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See why stylists and salon owners across the country are switching to SalonAI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1485324/pexels-photo-1485324.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Sarah Miller" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Miller</h4>
                  <p className="text-sm text-neutral-600">Owner, Glow Salon</p>
                </div>
              </div>
              <p className="text-neutral-700">
                "Since implementing SalonAI, our bookings have increased by 30% and client retention has never been better. The automated reminders alone saved us countless lost appointments."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Michael Jones" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Jones</h4>
                  <p className="text-sm text-neutral-600">Stylist, Precision Cuts</p>
                </div>
              </div>
              <p className="text-neutral-700">
                "I love how easy it is to keep track of client preferences. When a client returns after months, I can still remember exactly what they liked last time. My tips have increased noticeably!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Jennifer Adams" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Jennifer Adams</h4>
                  <p className="text-sm text-neutral-600">Owner, Luxe Hair Studio</p>
                </div>
              </div>
              <p className="text-neutral-700">
                "The payment system is seamless, and my clients love getting automatic receipts. As the owner, I especially appreciate the detailed financial reports that help me understand my business better."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Preview Section */}
      <section className="py-16 md:py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose the plan that best fits your salon's needs. All plans include a 7-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Salon?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of salon professionals who have streamlined their business with SalonAI.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary">
              Start Your Free Trial
            </Button>
          </Link>
          <p className="mt-4 text-primary-200">No credit card required. Cancel anytime.</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">SalonAI</h3>
              <p className="mb-4">Smart tools for salon professionals.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
            <p>© 2025 SalonAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;