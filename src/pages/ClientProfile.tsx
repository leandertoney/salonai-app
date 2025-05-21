import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { AppointmentItem } from '../components/AppointmentItem';
import { TransactionItem } from '../components/TransactionItem';
import { clients, appointments, transactions } from '../data/mockData';
import { 
  Calendar,
  Mail,
  Phone,
  Clock,
  DollarSign,
  MessageSquare,
  Edit,
  Trash2,
  User
} from 'lucide-react';

const ClientProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const client = clients.find(c => c.id === id);
  
  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Client Not Found</h2>
        <p className="text-neutral-600 mb-6">The client you're looking for doesn't exist.</p>
        <Link to="/clients">
          <Button variant="outline">Back to Clients</Button>
        </Link>
      </div>
    );
  }
  
  // Get client's appointments
  const clientAppointments = appointments.filter(a => a.clientId === id);
  const upcomingAppointments = clientAppointments.filter(a => a.status === 'upcoming');
  const pastAppointments = clientAppointments.filter(a => a.status !== 'upcoming');
  
  // Get client's transactions
  const clientTransactions = transactions.filter(t => t.clientId === id);
  
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <Link to="/clients" className="text-sm text-primary-600 hover:text-primary-700 mb-2 inline-block">
            ← Back to Clients
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900">Client Profile</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" icon={<Edit size={16} />}>
            Edit Profile
          </Button>
          <Button variant="outline" className="text-error-600 hover:text-error-700 border-error-200 hover:bg-error-50" icon={<Trash2 size={16} />}>
            Delete
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Client Info */}
        <div className="lg:col-span-1">
          <Card variant="elevated" className="mb-6">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                {client.avatar ? (
                  <img 
                    src={client.avatar} 
                    alt={client.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mx-auto mb-4">
                    <User size={32} />
                  </div>
                )}
                <h2 className="text-xl font-bold text-neutral-900">{client.name}</h2>
                <p className="text-neutral-500">Client since {new Date(client.lastVisit || '').getFullYear()}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-neutral-700">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${client.email}`} className="hover:text-primary-600">
                    {client.email}
                  </a>
                </div>
                <div className="flex items-center text-neutral-700">
                  <Phone size={16} className="mr-2" />
                  <a href={`tel:${client.phone}`} className="hover:text-primary-600">
                    {client.phone}
                  </a>
                </div>
                <div className="flex items-center text-neutral-700">
                  <Clock size={16} className="mr-2" />
                  <span>Total Visits: {client.totalVisits}</span>
                </div>
                <div className="flex items-center text-neutral-700">
                  <DollarSign size={16} className="mr-2" />
                  <span>Total Spent: ${client.totalSpent}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <Button fullWidth icon={<MessageSquare size={16} />}>
                  Send Message
                </Button>
                <Button fullWidth variant="outline" className="mt-2" icon={<Calendar size={16} />}>
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Client Preferences */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Preferences & Notes</CardTitle>
            </CardHeader>
            <CardContent>
              {client.preferences && (
                <div className="mb-6">
                  {client.preferences.hairColor && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-neutral-700 mb-1">Hair Color</h4>
                      <p className="text-neutral-600">{client.preferences.hairColor}</p>
                    </div>
                  )}
                  {client.preferences.style && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-neutral-700 mb-1">Style Preference</h4>
                      <p className="text-neutral-600">{client.preferences.style}</p>
                    </div>
                  )}
                  {client.preferences.products && client.preferences.products.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-neutral-700 mb-1">Preferred Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.preferences.products.map((product, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {client.notes && (
                <div>
                  <h4 className="text-sm font-medium text-neutral-700 mb-1">Notes</h4>
                  <p className="text-neutral-600">{client.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Appointments & Transactions */}
        <div className="lg:col-span-2">
          {/* Upcoming Appointments */}
          <Card variant="elevated" className="mb-6">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map(appointment => (
                  <AppointmentItem 
                    key={appointment.id} 
                    appointment={appointment}
                  />
                ))
              ) : (
                <p className="text-neutral-500 text-center py-4">
                  No upcoming appointments scheduled.
                </p>
              )}
            </CardContent>
          </Card>
          
          {/* Past Appointments */}
          <Card variant="elevated" className="mb-6">
            <CardHeader>
              <CardTitle>Past Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              {pastAppointments.length > 0 ? (
                pastAppointments.map(appointment => (
                  <AppointmentItem 
                    key={appointment.id} 
                    appointment={appointment}
                    showActions={false}
                  />
                ))
              ) : (
                <p className="text-neutral-500 text-center py-4">
                  No past appointments found.
                </p>
              )}
            </CardContent>
          </Card>
          
          {/* Transactions */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              {clientTransactions.length > 0 ? (
                clientTransactions.map(transaction => (
                  <TransactionItem 
                    key={transaction.id} 
                    transaction={transaction}
                  />
                ))
              ) : (
                <p className="text-neutral-500 text-center py-4">
                  No transactions found.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;