import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= "Hola Coders" color= "red" tamaño= "150px"/>
    </div>
  );
}

export default App;
