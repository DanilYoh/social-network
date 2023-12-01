import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import theme from '@/globalStyles';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import { store } from '@store/index';

import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
