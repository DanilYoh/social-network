import { render, RenderOptions } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { AppStore, RootState, setupStore } from '@/store';
import theme from '@/globalStyles';

export const flushPromises = () => Promise.resolve();

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
