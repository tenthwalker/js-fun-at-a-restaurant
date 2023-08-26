function nameMenuItem(name) {
 return `Delicious ${name}`
}

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
      name: menuItemName,
      price: price,
      type: type
  };
return menuItem;
}
var ingredients = [];
function addIngredients(newIngredient, destArr) {
  if (destArr.includes(newIngredient) === false) {
    return destArr.push(newIngredient);
  } 
}

function formatPrice(initialPrice) {
  return "$" + initialPrice
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


