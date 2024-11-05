import React from "react";

import { IndicatorView } from "@app/blueprints";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import {
  LocalizationProvider,
  ThemeProvider,
  NetworkProvider,
} from "./context";
import { OfflineBanner } from "@src/components";
import { AppNavigation, navigationRef } from "./navigation/AppNavigation";
import store from "./store";
import { loader } from "./utils";

export const MainApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider>
          <NavigationContainer ref={navigationRef}>
            <NetworkProvider>
              <AppNavigation />
              <OfflineBanner />
            </NetworkProvider>
            <IndicatorView isLoading={false} ref={loader} />
          </NavigationContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};
