import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure window.fetch has both getter and setter for third-party extensions
try {
  let _fetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return _fetch;
    },
    set(newFetch) {
      _fetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch {
  // Silent fallback
}

createRoot(document.getElementById('root')!).render(<App />);
