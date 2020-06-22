import React from "react";
import { ShoppingListItem } from "./ShoppingListItem";

export class ShoppingList extends React.Component {
  render() {
    var owner = this.props.owner;
    var items = this.props.items;

    return (
      <div>
        <p>{owner}'s Shopping List</p>
        <div>
          {items.map((item) => {
            return (
              <ShoppingListItem item={item} onDelete={this.props.onDelete} />
            );
          })}
        </div>
      </div>
    );
  }
}
