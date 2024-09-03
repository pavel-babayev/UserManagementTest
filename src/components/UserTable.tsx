import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../store/userSlice';
import { AppDispatch, RootState } from '../store';
import { filterUsers } from '../utils/filterUtils';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { User } from '../types/user';

const UserTable = () => {
  const dispatch:AppDispatch  = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const [filters, setFilters] = useState<{ [key: string]: string }>({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredUsers = filterUsers(users, filters);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <TableHeader filters={filters} onFilterChange={handleFilterChange} />
          <tbody>
            {filteredUsers.map((user: User) => (
              <TableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
