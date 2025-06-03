import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import Category from './pages/Category';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticia/:id" element={<NewsDetail />} />
            <Route path="/categoria/:category" element={<Category />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;