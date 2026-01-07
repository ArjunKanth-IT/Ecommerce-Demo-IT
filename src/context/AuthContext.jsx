import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Password validation: 8+ chars, uppercase, number, special char
  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const login = async (email, password, name) => {
    if (email?.trim() && password?.trim() && name?.trim()) {
      // Check password strength
      if (!validatePassword(password)) {
        alert(
          "Password must be at least 8 characters, include an uppercase letter, a number, and a special character."
        );
        return false;
      }

      const profile = { email, name }; // use the username from Login.jsx
      setUser(profile);
      navigate('/', { replace: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
