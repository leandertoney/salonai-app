export interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  clientAvatar?: string;
  service: string;
  duration: number; // in minutes
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled' | 'no-show';
  price: number;
}

export interface Client {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  phone: string;
  lastVisit?: string;
  upcomingAppointment?: string;
  totalVisits: number;
  totalSpent: number;
  notes?: string;
  preferences?: {
    hairColor?: string;
    style?: string;
    products?: string[];
  };
}

export interface Transaction {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  amount: number;
  services: string[];
  paymentMethod: 'credit' | 'cash' | 'venmo' | 'paypal' | 'other';
  status: 'completed' | 'refunded' | 'pending';
}

export interface MarketingCampaign {
  id: string;
  name: string;
  type: 'email' | 'sms';
  status: 'draft' | 'scheduled' | 'sent';
  audience: 'all' | 'regulars' | 'new' | 'custom';
  recipients: number;
  date?: string;
  openRate?: number;
  clickRate?: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export interface Revenue {
  day: number;
  amount: number;
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  sku: string;
  inStock: number;
  minStock: number;
  maxStock: number;
  reorderPoint: number;
  unitPrice: number;
  retailPrice: number;
  lastRestocked: string;
  expiryDate?: string;
}

export interface InventoryCategory {
  id: string;
  name: string;
  description: string;
  itemCount: number;
}