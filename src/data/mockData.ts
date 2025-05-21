import {
  Appointment,
  Client,
  Transaction,
  MarketingCampaign,
  PricingTier,
  Revenue,
  Service
} from '../types';

export const appointments: Appointment[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'Emma Thompson',
    clientAvatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Haircut & Style',
    duration: 60,
    date: '2025-04-15',
    time: '10:00',
    status: 'upcoming',
    price: 85
  },
  {
    id: '2',
    clientId: '2',
    clientName: 'Sophia Garcia',
    clientAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Color & Highlights',
    duration: 120,
    date: '2025-04-15',
    time: '13:00',
    status: 'upcoming',
    price: 150
  },
  {
    id: '3',
    clientId: '3',
    clientName: 'Michael Chen',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Men\'s Cut',
    duration: 45,
    date: '2025-04-15',
    time: '16:00',
    status: 'upcoming',
    price: 65
  },
  {
    id: '4',
    clientId: '4',
    clientName: 'Jennifer Wilson',
    service: 'Hair Extensions',
    duration: 180,
    date: '2025-04-16',
    time: '09:00',
    status: 'upcoming',
    price: 300
  },
  {
    id: '5',
    clientId: '5',
    clientName: 'David Rodriguez',
    service: 'Beard Trim',
    duration: 30,
    date: '2025-04-16',
    time: '14:30',
    status: 'upcoming',
    price: 40
  },
  {
    id: '6',
    clientId: '6',
    clientName: 'Sarah Johnson',
    clientAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Blowout',
    duration: 45,
    date: '2025-04-14',
    time: '11:30',
    status: 'completed',
    price: 60
  },
  {
    id: '7',
    clientId: '7',
    clientName: 'Alex Kim',
    service: 'Hair & Makeup',
    duration: 120,
    date: '2025-04-14',
    time: '14:00',
    status: 'completed',
    price: 175
  },
  {
    id: '8',
    clientId: '8',
    clientName: 'Olivia Martinez',
    service: 'Deep Conditioning',
    duration: 60,
    date: '2025-04-14',
    time: '16:30',
    status: 'no-show',
    price: 75
  }
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'emma.t@example.com',
    phone: '(555) 123-4567',
    lastVisit: '2025-03-15',
    upcomingAppointment: '2025-04-15',
    totalVisits: 8,
    totalSpent: 740,
    notes: 'Prefers sulfate-free products',
    preferences: {
      hairColor: 'Balayage, warm tones',
      style: 'Layered, shoulder length',
      products: ['Kerastase', 'Olaplex']
    }
  },
  {
    id: '2',
    name: 'Sophia Garcia',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'sophia.g@example.com',
    phone: '(555) 987-6543',
    lastVisit: '2025-03-22',
    upcomingAppointment: '2025-04-15',
    totalVisits: 12,
    totalSpent: 1250,
    notes: 'Sensitive scalp',
    preferences: {
      hairColor: 'Ash blonde highlights',
      style: 'Long layers, side part',
      products: ['Aveda', 'Pureology']
    }
  },
  {
    id: '3',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'michael.c@example.com',
    phone: '(555) 234-5678',
    lastVisit: '2025-03-30',
    upcomingAppointment: '2025-04-15',
    totalVisits: 6,
    totalSpent: 390,
    notes: 'Likes discussing sports',
    preferences: {
      style: 'Modern undercut',
      products: ['American Crew']
    }
  },
  {
    id: '4',
    name: 'Jennifer Wilson',
    email: 'jennifer.w@example.com',
    phone: '(555) 345-6789',
    lastVisit: '2025-03-18',
    upcomingAppointment: '2025-04-16',
    totalVisits: 3,
    totalSpent: 950,
    preferences: {
      hairColor: 'Honey blonde',
      style: 'Long, straight',
      products: ['Kerastase']
    }
  },
  {
    id: '5',
    name: 'David Rodriguez',
    email: 'david.r@example.com',
    phone: '(555) 456-7890',
    lastVisit: '2025-03-25',
    upcomingAppointment: '2025-04-16',
    totalVisits: 5,
    totalSpent: 240,
    notes: 'Prefers quick appointments'
  },
  {
    id: '6',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    email: 'sarah.j@example.com',
    phone: '(555) 567-8901',
    lastVisit: '2025-04-14',
    totalVisits: 7,
    totalSpent: 560,
    notes: 'Allergic to certain dyes',
    preferences: {
      hairColor: 'Natural brown',
      style: 'Bob with bangs',
      products: ['Aveda', 'Living Proof']
    }
  },
  {
    id: '7',
    name: 'Alex Kim',
    email: 'alex.k@example.com',
    phone: '(555) 678-9012',
    lastVisit: '2025-04-14',
    totalVisits: 2,
    totalSpent: 350,
    notes: 'New client, referred by Sarah J.'
  },
  {
    id: '8',
    name: 'Olivia Martinez',
    email: 'olivia.m@example.com',
    phone: '(555) 789-0123',
    lastVisit: '2025-04-01',
    upcomingAppointment: '2025-04-30',
    totalVisits: 9,
    totalSpent: 875,
    notes: 'Often reschedules',
    preferences: {
      hairColor: 'Rich brunette',
      style: 'Long waves',
      products: ['Bumble and Bumble', 'Oribe']
    }
  }
];

export const transactions: Transaction[] = [
  {
    id: '1',
    clientId: '6',
    clientName: 'Sarah Johnson',
    date: '2025-04-14',
    amount: 60,
    services: ['Blowout'],
    paymentMethod: 'credit',
    status: 'completed'
  },
  {
    id: '2',
    clientId: '7',
    clientName: 'Alex Kim',
    date: '2025-04-14',
    amount: 175,
    services: ['Hair & Makeup'],
    paymentMethod: 'venmo',
    status: 'completed'
  },
  {
    id: '3',
    clientId: '1',
    clientName: 'Emma Thompson',
    date: '2025-03-15',
    amount: 135,
    services: ['Haircut & Style', 'Deep Conditioning'],
    paymentMethod: 'credit',
    status: 'completed'
  },
  {
    id: '4',
    clientId: '2',
    clientName: 'Sophia Garcia',
    date: '2025-03-22',
    amount: 150,
    services: ['Color & Highlights'],
    paymentMethod: 'credit',
    status: 'completed'
  },
  {
    id: '5',
    clientId: '3',
    clientName: 'Michael Chen',
    date: '2025-03-30',
    amount: 65,
    services: ['Men\'s Cut'],
    paymentMethod: 'cash',
    status: 'completed'
  },
  {
    id: '6',
    clientId: '4',
    clientName: 'Jennifer Wilson',
    date: '2025-03-18',
    amount: 300,
    services: ['Hair Extensions'],
    paymentMethod: 'credit',
    status: 'completed'
  },
  {
    id: '7',
    clientId: '5',
    clientName: 'David Rodriguez',
    date: '2025-03-25',
    amount: 40,
    services: ['Beard Trim'],
    paymentMethod: 'paypal',
    status: 'completed'
  }
];

export const campaigns: MarketingCampaign[] = [
  {
    id: '1',
    name: 'Spring Special Offer',
    type: 'email',
    status: 'sent',
    audience: 'all',
    recipients: 120,
    date: '2025-03-15',
    openRate: 68,
    clickRate: 32
  },
  {
    id: '2',
    name: 'New Client Welcome',
    type: 'email',
    status: 'scheduled',
    audience: 'new',
    recipients: 45,
    date: '2025-04-20'
  },
  {
    id: '3',
    name: 'Appointment Reminder',
    type: 'sms',
    status: 'sent',
    audience: 'custom',
    recipients: 35,
    date: '2025-04-14',
    openRate: 95,
    clickRate: 40
  },
  {
    id: '4',
    name: 'Summer Style Preview',
    type: 'email',
    status: 'draft',
    audience: 'all',
    recipients: 0
  },
  {
    id: '5',
    name: 'Product Restock Notice',
    type: 'email',
    status: 'sent',
    audience: 'regulars',
    recipients: 75,
    date: '2025-02-28',
    openRate: 72,
    clickRate: 45
  }
];

export const pricing: PricingTier[] = [
  {
    id: '1',
    name: 'Starter',
    price: 19,
    features: [
      'Appointment management',
      'Client profiles',
      'SMS reminders',
      'Basic reports',
      'One staff member'
    ]
  },
  {
    id: '2',
    name: 'Pro',
    price: 39,
    recommended: true,
    features: [
      'All Starter features',
      'Payment processing',
      'Advanced marketing tools',
      'Online booking',
      'Up to 3 staff members',
      'Advanced analytics'
    ]
  },
  {
    id: '3',
    name: 'Elite',
    price: 79,
    features: [
      'All Pro features',
      'Unlimited staff members',
      'Client mobile app',
      'Inventory management',
      'Priority support',
      'Custom branding',
      'Advanced integrations'
    ]
  }
];

export const revenueData: Revenue[] = [
  { day: 1, amount: 350 },
  { day: 2, amount: 420 },
  { day: 3, amount: 380 },
  { day: 4, amount: 540 },
  { day: 5, amount: 650 },
  { day: 6, amount: 720 },
  { day: 7, amount: 630 },
  { day: 8, amount: 450 },
  { day: 9, amount: 380 },
  { day: 10, amount: 410 },
  { day: 11, amount: 520 },
  { day: 12, amount: 570 },
  { day: 13, amount: 610 },
  { day: 14, amount: 735 }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Haircut & Style',
    duration: 60,
    price: 85,
    description: 'Professional haircut and styling tailored to your preferences.'
  },
  {
    id: '2',
    name: 'Color & Highlights',
    duration: 120,
    price: 150,
    description: 'Full hair coloring or highlights to enhance your look.'
  },
  {
    id: '3',
    name: 'Men\'s Cut',
    duration: 45,
    price: 65,
    description: 'Precision cut for men, includes styling and consultation.'
  },
  {
    id: '4',
    name: 'Blowout',
    duration: 45,
    price: 60,
    description: 'Professional blow-dry and styling for any occasion.'
  },
  {
    id: '5',
    name: 'Hair Extensions',
    duration: 180,
    price: 300,
    description: 'Premium quality hair extensions for added length and volume.'
  },
  {
    id: '6',
    name: 'Deep Conditioning',
    duration: 60,
    price: 75,
    description: 'Intensive conditioning treatment to restore hair health.'
  },
  {
    id: '7',
    name: 'Hair & Makeup',
    duration: 120,
    price: 175,
    description: 'Complete hair styling and makeup application for special events.'
  },
  {
    id: '8',
    name: 'Beard Trim',
    duration: 30,
    price: 40,
    description: 'Professional beard trimming and shaping.'
  }
];

export const inventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Professional Color Treatment',
    brand: 'L\'Oréal',
    category: 'Hair Color',
    sku: 'CLR001',
    inStock: 24,
    minStock: 10,
    maxStock: 50,
    reorderPoint: 15,
    unitPrice: 12.99,
    retailPrice: 29.99,
    lastRestocked: '2025-04-01',
    expiryDate: '2026-04-01'
  },
  {
    id: '2',
    name: 'Keratin Smoothing Treatment',
    brand: 'Kerastase',
    category: 'Treatments',
    sku: 'KRT002',
    inStock: 8,
    minStock: 5,
    maxStock: 20,
    reorderPoint: 10,
    unitPrice: 45.99,
    retailPrice: 89.99,
    lastRestocked: '2025-03-15'
  },
  {
    id: '3',
    name: 'Professional Shampoo',
    brand: 'Redken',
    category: 'Haircare',
    sku: 'SHP003',
    inStock: 32,
    minStock: 15,
    maxStock: 60,
    reorderPoint: 20,
    unitPrice: 18.50,
    retailPrice: 34.99,
    lastRestocked: '2025-04-10'
  },
  {
    id: '4',
    name: 'Styling Brushes Set',
    brand: 'Denman',
    category: 'Tools',
    sku: 'BRS004',
    inStock: 12,
    minStock: 8,
    maxStock: 30,
    reorderPoint: 12,
    unitPrice: 24.99,
    retailPrice: 49.99,
    lastRestocked: '2025-03-20'
  }
];

export const inventoryCategories: InventoryCategory[] = [
  {
    id: '1',
    name: 'Hair Color',
    description: 'Professional hair coloring products',
    itemCount: 15
  },
  {
    id: '2',
    name: 'Treatments',
    description: 'Professional hair treatments and masks',
    itemCount: 8
  },
  {
    id: '3',
    name: 'Haircare',
    description: 'Shampoos, conditioners, and styling products',
    itemCount: 25
  },
  {
    id: '4',
    name: 'Tools',
    description: 'Professional styling tools and equipment',
    itemCount: 12
  }
];