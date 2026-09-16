import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import router from './router/root.tsx';

createRoot(document.getElementById('root')!).render(
  /* 검증을 위한 코드
  <StrictMode>
    <App />
  </StrictMode>,
    */
  <RouterProvider router={router}></RouterProvider>
)
