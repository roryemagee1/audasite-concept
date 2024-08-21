import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

import HomePage from '@src/pages/HomePage/HomePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route index element={ <HomePage /> } />
        </Route>
        <Route path="*" element={<h1>Error!</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
