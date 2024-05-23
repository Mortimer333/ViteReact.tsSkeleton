import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProvider from '@context/ContextProvider'
import Loading from "@component/Loading.tsx";
import axios from "axios";

axios.defaults.baseURL = String(import.meta.env.VITE_HOST_URL);
axios.defaults.headers.post['Content-Type'] = 'application/json';

const Main = lazy(() => import('@page/Main/Main.tsx')),
  root = document.getElementById('root')
;

if (!root) {
  throw Error('Root not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Suspense fallback={<Loading size={125} unit="px" />}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Suspense>
      </Router>
    </ContextProvider>
  </React.StrictMode>
)
