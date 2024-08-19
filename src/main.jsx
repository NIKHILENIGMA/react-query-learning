import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { QueryClientDevtools } from 'react-query/devtools'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
      <QueryClientDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  </StrictMode>,
)
