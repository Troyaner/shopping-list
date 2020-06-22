import React from "react";

export class ShoppingListItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <div>Name: {item.name}</div>
        <div>Price: {item.price}</div>
        <button onClick={() => this.props.onDelete(item)}>Delete</button>
      </div>
    );
  }
}
