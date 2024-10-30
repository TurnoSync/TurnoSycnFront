import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@css/index.css'
// @ts-expect-error : Import is successful but typeScript shows error
import App from '@components/App.tsx' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
