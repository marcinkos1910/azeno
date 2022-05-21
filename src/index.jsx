import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import App from './App';

const root = createRoot(document.getElementById('app'));
// StrictMode add error handling
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
