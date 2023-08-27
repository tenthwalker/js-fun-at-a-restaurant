
module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
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