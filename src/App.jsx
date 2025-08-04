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
        if(!groceryInput.trim()) 
        {
            return;
        }
        const newGrocery = {
            id: Date.now(),
            text: groceryInput,
            bought: false
        }
        setGroceriesItems([newGrocery, ...groceriesItems]);
        setGroceryInput('');
    }

    function toggleBought(id){
        const updatedItems = groceriesItems.map((item) =>{
            if(item.id === id){
                console.log(`Toggling item with ${id}: currently ${item.bought ? "bought" : "not bought"}`);
                return {...item, bought: !item.bought };
            }
            return item;
        });
        setGroceriesItems(updatedItems);
    }

    function handleRemoveItem(id) {
        const updatedItems = groceriesItems.filter((item) => item.id !== id);
        setGroceriesItems(updatedItems);
        console.log(`Removed item with id: ${id}`);
    }

    const totalItems = groceriesItems.length;
    const totalBought = groceriesItems.filter((item) => item.bought).length;

    return <div className="container pt-2">
        <GroceryNav />
        <GroceryForm 
        item={groceryInput} 
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}
        />
        <GroceryList 
        items={groceriesItems}
        handleOnToggle={toggleBought}
        handleRemoveItem={handleRemoveItem}/>
        <GroceryFooter
        totalBought={totalBought} totalItems={totalItems}/>
    </div>
}

export default App;