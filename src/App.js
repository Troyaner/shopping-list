import React from "react";
import "./App.css";

import { ShoppingList } from "./components/ShoppingList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Lemons", price: 4.5 },
        { name: "Sugar", price: 6.5 },
        { name: "Water", price: 0.5 },
      ],
      newItemName: "",
    };
  }

  addItem() {
    const items = this.state.items;
    const newItemName = this.state.newItemName;
    this.setState({
      items: [...items, { name: newItemName, price: 8 }],
      newItemName: "",
    });
  }

  updateNewItemName(newItemName) {
    this.setState({
      newItemName: newItemName,
    });
  }

  // accessing state without losing its context
  onDeleteItem = (item) => {
    console.log("deleting item: " + item.name);
    console.log(this.state);
  };

  render() {
    const items = this.state.items;
    return (
      <div className="App">
        <ShoppingList
          owner={"Michael"}
          items={items}
          onDelete={this.onDeleteItem}
        />
        <input
          value={this.state.newItemName}
          onChange={(event) => this.updateNewItemName(event.target.value)}
          placeholder="ProductName"
        />
        <button onClick={() => this.addItem()}>Add Item</button>
      </div>
    );
  }
}

export default App;
