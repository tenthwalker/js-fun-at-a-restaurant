function createRestaurant(name, menus) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
  var menuTypes = restaurant.menus[item.type];
  for (i = 0; i < menuTypes.length; i++) {
   if (menuTypes[i].name === item.name) {
     return ;
   } 
 } return menuTypes.push(item);
}

function removeMenuItem(restaurant, itemName, course) {
  var menuType = restaurant.menus[course];
 for (i = 0; i < menuType.length; i++) {
  if (menuType[i].name === itemName) {
    menuType.splice(i, 1);
    return `No one is eating our ${itemName} - it has been removed from the ${course} menu!`;
  } 
 } return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

function checkForFood(restaurant, food) {
  var choice = restaurant.menus[food.type];
  for (i = 0; i < choice.length; i++) {
    if (choice[i].name === food.name) {
      return `Yes, we're serving ${food.name} today!`
    }
  }
  return `Sorry, we aren't serving ${food.name} today.`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}