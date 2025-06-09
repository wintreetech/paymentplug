import { HelmetProvider } from 'react-helmet-async';
import AppNavigation from './navigation/app-navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </HelmetProvider>
  )
}

export default App
