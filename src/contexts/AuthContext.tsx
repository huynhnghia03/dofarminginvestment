// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';

// interface User {
//   id: string;
//   email: string;
//   name: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   register: (name: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
//   isLoading: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is logged in on mount
//     const checkAuth = async () => {
//       try {
//         // TODO: Implement actual auth check with API
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         }
//       } catch (error) {
//         console.error('Auth check failed:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   const login = async (email: string, password: string) => {
//     try {
//       setIsLoading(true);
//       // TODO: Implement actual login with API
//       const mockUser = { id: '1', email, name: 'Test User' };
//       localStorage.setItem('user', JSON.stringify(mockUser));
//       setUser(mockUser);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const register = async (name: string, email: string, password: string) => {
//     try {
//       setIsLoading(true);
//       // TODO: Implement actual registration with API
//       const mockUser = { id: '1', email, name };
//       localStorage.setItem('user', JSON.stringify(mockUser));
//       setUser(mockUser);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }
