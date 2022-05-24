import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= "Hola Coders" color= "red" tamaño= "100px"/>
      <ItemCount stock={5}/>
    </div>
  );
}

export default App;
