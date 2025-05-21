import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Plus, Package, Search, Filter, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { InventoryModal } from '../components/InventoryModal';
import type { InventoryItem, InventoryCategory } from '../types';

const Inventory: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [categories, setCategories] = useState<InventoryCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | undefined>();

  useEffect(() => {
    fetchInventory();
    fetchCategories();

    // Subscribe to realtime changes
    const inventorySubscription = supabase
      .channel('inventory_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'inventory_items'
        },
        () => {
          fetchInventory();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(inventorySubscription);
    };
  }, []);

  const fetchInventory = async () => {
    try {
      const { data, error } = await supabase
        .from('inventory_items')
        .select('*, category:inventory_categories(name)');

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('inventory_categories')
        .select('*');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleEditItem = (item: InventoryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleAddItem = () => {
    setSelectedItem(undefined);
    setShowModal(true);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getLowStockItems = () => {
    return items.filter(item => item.inStock <= item.reorderPoint).length;
  };

  const getTotalValue = () => {
    return items.reduce((total, item) => total + (item.retailPrice * item.inStock), 0);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Inventory Management</h1>
          <p className="text-neutral-500">Manage your products and stock levels</p>
        </div>
        <Button variant="primary" icon={<Plus size={16} />} onClick={handleAddItem}>
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Products</p>
                <p className="text-2xl font-bold">{items.length}</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-lg">
                <Package className="text-primary-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Categories</p>
                <p className="text-2xl font-bold">{categories.length}</p>
              </div>
              <div className="p-3 bg-secondary-100 rounded-lg">
                <Filter className="text-secondary-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Low Stock Items</p>
                <p className="text-2xl font-bold">{getLowStockItems()}</p>
              </div>
              <div className="p-3 bg-warning-100 rounded-lg">
                <AlertTriangle className="text-warning-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Value</p>
                <p className="text-2xl font-bold">${getTotalValue().toFixed(2)}</p>
              </div>
              <div className="p-3 bg-success-100 rounded-lg">
                <Package className="text-success-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="elevated">
        <CardHeader className="pb-0">
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-neutral-500" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            {loading ? (
              <div className="text-center py-8">Loading inventory...</div>
            ) : filteredItems.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">SKU</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-right py-3 px-4">Stock</th>
                      <th className="text-right py-3 px-4">Unit Price</th>
                      <th className="text-right py-3 px-4">Retail Price</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map(item => (
                      <tr key={item.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-neutral-500">{item.brand}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">{item.sku}</td>
                        <td className="py-3 px-4">{item.category}</td>
                        <td className="py-3 px-4 text-right">
                          <span className={`${
                            item.inStock <= item.reorderPoint
                              ? 'text-error-600'
                              : 'text-neutral-900'
                          }`}>
                            {item.inStock}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">${item.unitPrice.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right">${item.retailPrice.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditItem(item)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-neutral-500">
                No products found matching your search.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <InventoryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        item={selectedItem}
        onSave={fetchInventory}
      />
    </div>
  );
};

export default Inventory;