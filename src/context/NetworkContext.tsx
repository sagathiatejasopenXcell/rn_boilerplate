import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

const NetworkContext = createContext({ isConnected: true });

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => useContext(NetworkContext);
