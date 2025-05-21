import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { InventoryItem, InventoryCategory } from '../types';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: InventoryItem;
  onSave: () => void;
}

const InventoryModal: React.FC<InventoryModalProps> = ({
  isOpen,
  onClose,
  item,
  onSave
}) => {
  const [categories, setCategories] = useState<InventoryCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category_id: '',
    sku: '',
    in_stock: 0,
    min_stock: 0,
    max_stock: 0,
    reorder_point: 0,
    unit_price: 0,
    retail_price: 0,
    expiry_date: ''
  });

  useEffect(() => {
    fetchCategories();
    if (item) {
      setFormData({
        name: item.name,
        brand: item.brand,
        category_id: item.category_id || '',
        sku: item.sku,
        in_stock: item.in_stock,
        min_stock: item.min_stock,
        max_stock: item.max_stock,
        reorder_point: item.reorder_point,
        unit_price: item.unit_price,
        retail_price: item.retail_price,
        expiry_date: item.expiry_date || ''
      });
    }
  }, [item]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('inventory_categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (item) {
        const { error } = await supabase
          .from('inventory_items')
          .update(formData)
          .eq('id', item.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('inventory_items')
          .insert([formData]);
        
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving item:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {item ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button onClick={onClose} className="text-neutral-500 hover:text-neutral-700">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  required
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Category
                </label>
                <select
                  required
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  SKU
                </label>
                <input
                  type="text"
                  required
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Current Stock
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.in_stock}
                  onChange={(e) => setFormData({ ...formData, in_stock: parseInt(e.target.value) })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Minimum Stock
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.min_stock}
                  onChange={(e) => setFormData({ ...formData, min_stock: parseInt(e.target.value) })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Maximum Stock
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.max_stock}
                  onChange={(e) => setFormData({ ...formData, max_stock: parseInt(e.target.value) })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Reorder Point
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.reorder_point}
                  onChange={(e) => setFormData({ ...formData, reorder_point: parseInt(e.target.value) })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Unit Price ($)
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.unit_price}
                  onChange={(e) => setFormData({ ...formData, unit_price: parseFloat(e.target.value) })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Retail Price ($)
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.retail_price}
                  onChange={(e) => setFormData({ ...formData, retail_price: parseFloat(e.target.value) })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="date"
                  value={formData.expiry_date}
                  onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : item ? 'Update Product' : 'Add Product'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InventoryModal;

export { InventoryModal }