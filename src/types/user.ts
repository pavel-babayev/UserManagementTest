// Base interface for Contact Information
export interface ContactInfo {
  email: string;
  phone: string;
}

// Base interface for User Identity
export interface UserIdentity {
  name: string;
  username: string;
}

// Main User interface extending the two base interfaces
export interface User extends UserIdentity, ContactInfo {
  id: number;
}