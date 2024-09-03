import React from 'react';
import { User } from '../types/user';

interface TableRowProps {
  user: User;
}

const TableRow: React.FC<TableRowProps> = ({ user }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="p-3 border-t border-gray-200">{user.name}</td>
    <td className="p-3 border-t border-gray-200">{user.username}</td>
    <td className="p-3 border-t border-gray-200">{user.email}</td>
    <td className="p-3 border-t border-gray-200">{user.phone}</td>
  </tr>
);

export default TableRow;
