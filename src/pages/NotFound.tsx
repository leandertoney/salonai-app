import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button icon={<Home size={18} />}>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;