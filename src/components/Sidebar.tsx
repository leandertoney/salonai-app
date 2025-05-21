import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  DollarSign,
  BarChart2,
  Settings,
  MessageSquare,
  HelpCircle,
  Package
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard'
    },
    {
      name: 'Calendar',
      icon: <Calendar size={20} />,
      path: '/calendar'
    },
    {
      name: 'Clients',
      icon: <Users size={20} />,
      path: '/clients'
    },
    {
      name: 'Payments',
      icon: <DollarSign size={20} />,
      path: '/payments'
    },
    {
      name: 'Marketing',
      icon: <MessageSquare size={20} />,
      path: '/marketing'
    },
    {
      name: 'Inventory',
      icon: <Package size={20} />,
      path: '/inventory'
    },
    {
      name: 'Analytics',
      icon: <BarChart2 size={20} />,
      path: '/analytics'
    },
    {
      name: 'Settings',
      icon: <Settings size={20} />,
      path: '/settings'
    }
  ];
  
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <aside 
      className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white border-r border-neutral-200 transition-transform lg:translate-x-0`}
    >
      <div className="px-3 py-4 overflow-y-auto h-full flex flex-col">
        <div className="flex-1">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg ${
                    isActiveRoute(item.path)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 mt-4 border-t border-neutral-200">
          <Link 
            to="/help"
            className="flex items-center p-3 rounded-lg text-neutral-700 hover:bg-neutral-100"
          >
            <span className="mr-3">
              <HelpCircle size={20} />
            </span>
            <span className="font-medium">Help & Support</span>
          </Link>
          <div className="p-4 mt-3 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-800 font-medium">Your Pro Plan</p>
            <p className="text-xs text-primary-700 mt-1">Valid until May 15, 2025</p>
            <Link
              to="/pricing"
              className="mt-3 text-xs font-medium text-primary-700 hover:text-primary-800 inline-block"
            >
              Manage Subscription
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};