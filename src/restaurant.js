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
  for (i = 0; i < menuTypes.length; i++){
   if (menuTypes[i].name === item.name) {
     return ;
   } 
 } return menuTypes.push(item);
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}