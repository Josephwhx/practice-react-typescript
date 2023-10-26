import {useState} from 'react';
import Greeter from './Component/Greeter';
import ShoppingList from './Component/ShoppingList';
import { Item } from './models/item';
import ShoppingListForm from './Component/ShoppingListForm';
import { v4 as getId } from 'uuid';
import './App.css';


function App() {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (product: string) => {
    setItems([...items, {id: getId(), product, quantity: 1}]);
  }

  // const items = [
  //   {id: 1, product: "Lemon", quantity: "3"},
  //   {id: 2, product: "Chicken", quantity: "2"}
  // ]

  return (
    <div >
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
