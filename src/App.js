import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito/Carrito';
import { CartContextProvider } from './context/CartContext';
import Ordenes from './components/Ordenes/Ordenes';
import Inicio from './components/Inicio/Inicio';
import Visitanos from './components/Visitanos/Visitanos';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/visitanos' element={<Visitanos />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/orden' element={<Ordenes />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
