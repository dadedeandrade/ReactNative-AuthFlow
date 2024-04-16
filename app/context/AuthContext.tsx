import axios, { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
export const API_URL = "https://tools.lab.ianclive.com/test-mobile-api";

const AuthContext = createContext<AuthProps>({
  onLogin: function (email: string, password: string): Promise<any> {
    throw new Error("Function not implemented.");
  },
  onLogout: function (): Promise<any> {
    throw new Error("Function not implemented.");
  }
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    authenticated: null,
    token: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("stored", token);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(
        `${API_URL}/auth/signin`,
        {
          username: email,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("resut", result.data);

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      console.log("error", JSON.stringify(e));

      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  console.log("authstate", authState);

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    axios.defaults.headers.common["Authorization"] = "";

    setAuthState({
      token: null,
      authenticated: null,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState: authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
