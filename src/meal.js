function nameMenuItem(name) {
 return `Delicious ${name}`
}

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
      name: menuItemName,
      price: 10.99,
      type: "breakfast"
  };
return menuItem;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


