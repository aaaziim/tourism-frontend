import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from '../src/provider/AuthProvider';
import Routers from "../src/routes/Routers"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <Routers></Routers>
    
  </StrictMode>,
)
