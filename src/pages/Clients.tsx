import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { ClientItem } from '../components/ClientItem';
import { clients } from '../data/mockData';
import { Plus, Search, Filter } from 'lucide-react';

export const Clients: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleClientClick = (id: string) => {
    navigate(`/clients/${id}`);
  };
  
  // Filter clients based on search query
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Clients</h1>
        <Button variant="primary" icon={<Plus size={16} />}>
          Add New Client
        </Button>
      </div>
      
      <Card variant="elevated" className="mb-6">
        <CardHeader className="pb-0">
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-neutral-500" size={18} />
              <input
                type="text"
                placeholder="Search clients..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" icon={<Filter size={16} />}>
                Filter
              </Button>
              <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>All Clients</option>
                <option>Recent Visitors</option>
                <option>Upcoming Appointments</option>
                <option>Not Visited (90+ days)</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            {filteredClients.length > 0 ? (
              filteredClients.map(client => (
                <ClientItem 
                  key={client.id} 
                  client={client} 
                  onClick={() => handleClientClick(client.id)} 
                />
              ))
            ) : (
              <div className="text-center py-8 text-neutral-500">
                No clients found matching your search.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};