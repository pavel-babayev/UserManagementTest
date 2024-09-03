import { User } from '../types/user';

export const filterUsers = (
  users: User[],
  filters: { [key: string]: string }
): User[] => {
  return users.filter((user) =>
    Object.keys(filters).every((key) =>
      String(user[key as keyof User]).toLowerCase().includes(filters[key].toLowerCase())
    )
  );
};
