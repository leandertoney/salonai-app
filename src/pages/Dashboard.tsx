import React from 'react';
import { DashboardStats } from '../components/DashboardStats';
import { AppointmentItem } from '../components/AppointmentItem';
import { TransactionItem } from '../components/TransactionItem';
import { RevenueChart } from '../components/RevenueChart';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { appointments, transactions, revenueData } from '../data/mockData';
import { Calendar, UserPlus, MessageSquare } from 'lucide-react';

export const Dashboard: React.FC = () => {
  // Get today's appointments
  const todaysDate = new Date().toISOString().split('T')[0];
  const todaysAppointments = appointments.filter(
    appointment => appointment.date === todaysDate || appointment.date === '2025-04-15'
  );
  
  // Get recent transactions
  const recentTransactions = transactions.slice(0, 3);
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-500">Welcome back, Jessica! Here's what's happening today.</p>
      </div>
      
      {/* Stats Cards */}
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Revenue Chart */}
          <RevenueChart data={revenueData} />
          
          {/* Today's Appointments */}
          <Card variant="elevated" className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Today's Appointments</CardTitle>
              <Button variant="outline" size="sm" icon={<Calendar size={16} />}>
                View Calendar
              </Button>
            </CardHeader>
            <CardContent>
              {todaysAppointments.length > 0 ? (
                <div>
                  {todaysAppointments.map(appointment => (
                    <AppointmentItem 
                      key={appointment.id} 
                      appointment={appointment} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-neutral-500">
                  No appointments scheduled for today.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column */}
        <div>
          {/* Quick Actions */}
          <Card variant="elevated" className="mb-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button fullWidth icon={<Calendar size={18} />}>
                Book Appointment
              </Button>
              <Button fullWidth variant="outline" icon={<UserPlus size={18} />}>
                New Client
              </Button>
              <Button fullWidth variant="ghost" icon={<MessageSquare size={18} />}>
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Recent Transactions */}
          <Card variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <Button variant="link">View All</Button>
            </CardHeader>
            <CardContent>
              {recentTransactions.map(transaction => (
                <TransactionItem 
                  key={transaction.id} 
                  transaction={transaction} 
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};