
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
var deliveryOrders = []
function takeOrder(order, destList) {
  if (destList.length < 3) {
  return destList.push(order);
  }
}

function refundOrder(orderNum, array) {
  for (i = 0; i < array.length; i++)
  {
  if (array[i].orderNumber === orderNum) {
    array.splice(i, 1);
  }
} return array;
} 

function listItems(array) {
  var items = array[0].item;
  for (i = 1; i < array.length; i++) {
items = items + ", " + array[i].item
  }
  return items
}

function searchOrder(array, name) {
  var inList = false
  for (i = 0; i < array.length; i++) {
   if (array[i].item.includes(name, 0)) {
     inList = true
   }
   } return inList
  } 