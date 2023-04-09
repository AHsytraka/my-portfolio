import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
