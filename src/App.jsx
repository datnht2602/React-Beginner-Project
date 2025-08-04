import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryList from "./Components/grocery_list/components/GroceryList";
import GroceryNav from "./Components/grocery_list/components/GroceryNav";
import GroceryFooter from "./Components/grocery_list/components/GroceryFooter";
import GroceryForm from "./Components/grocery_list/components/GroceryForm";

function App(){
    const [groceriesItems, setGroceriesItems] = useState([]);
    const [groceryInput, setGroceryInput] = useState("");
    function handleOnChange(e) {
        setGroceryInput(e.target.value);
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        if(!groceryInput.trim()) return;
        const newGrocery = {
            id: Date.now(),
            text: groceryInput,
            bought: false
        }
        setGroceriesItems([newGrocery, ...groceriesItems]);
        setGroceryInput('');
    }
    // const groceries = [
    //     { id: Date.now(), text: "Bananas", bought: false },
    //     { id: Date.now(), text: "Pear", bought: false },
    //     { id: Date.now(), text: "Apple", bought: false },
    // ]
    return <div className="container pt-2">
        <GroceryNav />
        <GroceryForm item={groceryInput} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
        <GroceryList items={groceriesItems}/>
        <GroceryFooter/>
    </div>
}

export default App;