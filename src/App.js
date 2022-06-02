import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting= 'Todos los productos' color= "#7a2424" tamaño= "70px"/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting= 'Productos filtrados'/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
        <ItemCount stock={10}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
