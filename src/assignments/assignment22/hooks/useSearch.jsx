import { useState, useMemo } from 'react';

export const useSearch = (initialItems, searchKey) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return initialItems;
    return initialItems.filter(item =>
      String(item[searchKey]).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialItems, searchTerm, searchKey]);

  return { searchTerm, setSearchTerm, filteredItems };
};