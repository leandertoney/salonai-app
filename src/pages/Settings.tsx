import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { User, Building2, Clock, CreditCard, Bell, Shield } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Settings</h1>
        <p className="text-neutral-500">Manage your account and business preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <Card variant="elevated" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-6">
              <img
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <Button variant="outline" className="mb-2">Change Photo</Button>
                <p className="text-sm text-neutral-500">
                  JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Jessica"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Smith"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="jessica@example.com"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="(555) 123-4567"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <Button className="mt-6">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Quick Settings */}
        <div className="space-y-6">
          <Card variant="elevated">
            <CardContent className="p-0">
              <button className="w-full p-4 flex items-center hover:bg-neutral-50 transition-colors">
                <User className="text-neutral-500 mr-3" size={20} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Personal Info</h3>
                  <p className="text-sm text-neutral-500">Update your personal details</p>
                </div>
              </button>
              <button className="w-full p-4 flex items-center hover:bg-neutral-50 transition-colors border-t">
                <Building2 className="text-neutral-500 mr-3" size={20} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Business Details</h3>
                  <p className="text-sm text-neutral-500">Manage your salon information</p>
                </div>
              </button>
              <button className="w-full p-4 flex items-center hover:bg-neutral-50 transition-colors border-t">
                <Clock className="text-neutral-500 mr-3" size={20} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-sm text-neutral-500">Set your availability</p>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardContent className="p-0">
              <button className="w-full p-4 flex items-center hover:bg-neutral-50 transition-colors">
                <CreditCard className="text-neutral-500 mr-3" size={20} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Payment Methods</h3>
                  <p className="text-sm text-neutral-500">Manage your payment options</p>
                </div>
              </button>
              <button className="w-full p-4 flex items-center hover:bg-neutral-50 transition-colors border-t">
                <Bell className="text-neutral-500 mr-3" size={20} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm text-neutral-500">Choose what updates you receive</p>
                </div>
              </button>
              <button className="w-full p-4 flex items-center hover:bg-neutral-50 transition-colors border-t">
                <Shield className="text-neutral-500 mr-3" size={20} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Security</h3>
                  <p className="text-sm text-neutral-500">Manage your security settings</p>
                </div>
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Business Settings */}
        <Card variant="elevated" className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Business Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  defaultValue="Style Studio"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Business Type
                </label>
                <select className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Hair Salon</option>
                  <option>Barbershop</option>
                  <option>Beauty Salon</option>
                  <option>Spa</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  defaultValue="123 Main Street, Suite 100"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="San Francisco"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  defaultValue="CA"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  defaultValue="94105"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Business Phone
                </label>
                <input
                  type="tel"
                  defaultValue="(555) 987-6543"
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <Button className="mt-6">Save Business Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};