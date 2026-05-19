import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/qluady-phone-catalog">
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  {/* </BrowserRouter>, */}
);
