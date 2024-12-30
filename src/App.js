
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import ProductPage from './view/ProductPage';
import CompetitionPage from './view/CompetitionPage';
import CardPage from './view/CardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/competition" element={<CompetitionPage />} />
          <Route path='/card' element={<CardPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
