import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { CampaignItem } from '../components/CampaignItem';
import { campaigns } from '../data/mockData';
import { Mail, MessageSquare, Plus } from 'lucide-react';

export const Marketing: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Marketing</h1>
          <p className="text-neutral-500">Create and manage your marketing campaigns</p>
        </div>
        <Button icon={<Plus size={18} />}>New Campaign</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Campaign Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail size={18} className="text-primary-600 mr-2" />
                  <span className="font-medium text-primary-900">Email</span>
                </div>
                <div className="text-2xl font-bold text-primary-900">
                  {campaigns.filter(c => c.type === 'email').length}
                </div>
                <div className="text-sm text-primary-600">Active campaigns</div>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <MessageSquare size={18} className="text-secondary-600 mr-2" />
                  <span className="font-medium text-secondary-900">SMS</span>
                </div>
                <div className="text-2xl font-bold text-secondary-900">
                  {campaigns.filter(c => c.type === 'sms').length}
                </div>
                <div className="text-sm text-secondary-600">Active campaigns</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                <div>
                  <div className="text-sm text-neutral-500">Average Open Rate</div>
                  <div className="text-2xl font-bold text-neutral-900">68%</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Average Click Rate</div>
                  <div className="text-2xl font-bold text-neutral-900">32%</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Total Recipients</div>
                  <div className="text-2xl font-bold text-neutral-900">275</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map(campaign => (
              <CampaignItem key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};