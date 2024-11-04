import React from "react";

import { IndicatorView } from "@app/blueprints";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { LocalizationProvider, ThemeProvider } from "./context";
import { AppNavigation, navigationRef } from "./navigation/AppNavigation";
import store from "./store";
import { loader } from "./utils";

export const MainApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider>
          <NavigationContainer ref={navigationRef}>
            <AppNavigation />
            <IndicatorView isLoading={false} ref={loader} />
          </NavigationContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};
