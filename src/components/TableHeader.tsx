import React from 'react';

interface TableHeaderProps {
  filters: { [key: string]: string };
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ filters, onFilterChange }) => (
  <thead className="bg-gray-100">
    <tr>
      {Object.keys(filters).map((key) => (
        <th key={key} className="p-3 text-left text-sm font-medium text-gray-600">
          <input
            type="text"
            name={key}
            placeholder={`Search by ${key}`}
            value={filters[key]}
            onChange={onFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
