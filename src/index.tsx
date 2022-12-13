import './index.css';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#entry-point');
if (!container) {
  throw new Error('Not found entry point');
}

const root = createRoot(container);
root.render(<div>Test</div>);
