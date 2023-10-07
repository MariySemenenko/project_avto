
import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/CatalogPage';
import Favorites from './pages/Favorites/Favorites';
import Layout from './Layout/Layout';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" component={<Catalog />} />
        <Route path="/favorites" component={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    </Routes>
  );
}

export default App;
