const data = [
  { name: 'SP1', price: 500 },
  { name: 'SP2', price: 1500 },
  { name: 'SP3', price: 500 },
  { name: 'SP4', price: 1500 },
  { name: 'SP5', price: 1200 },
  { name: 'SP6', price: 4500 },
  { name: 'SP7', price: 600 },
]



//console.log('With filter: ', oldProducts2);

//=========MAP==============
// 1 mảng data với giá sp mới 
// 1 cách viết tạo side effect mà nhiều người hay mắc phải -> mảng data gốc bị thay đổi
// let newArr = [];
// for (let i = 0; i < data.length; i++) {
//   let item = data[i];
//   item.price = item.price / 2;   
//   newArr.push(item);
//   console.log(data[i].price);
// }

let newArr = [];
for (let i = 0; i < data.length; i++) {
  let item = {};
  item.name = data[i].name;
  item.price = data[i].price / 2;
  newArr.push(item);
}
console.log('With for loop: \n', newArr);
console.log();
console.log('Original data: \n', data);

// cách mới với hàm map()
// newArr2 = data.map(product => {
//   let newProduct = {};
//   newProduct.name = product.name;
//   newProduct.price = product.price / 2;
//   return newProduct;
// })
//console.log('With map: ', newArr2);
//console.log(data);

//==========REDUCE==============
// Đếm xem có bao nhiêu sản phẩm theo hãng sản xuất
// let newObj = {};

// for (let i = 0; i < data.length; i++) {
//   let manufacturer = data[i].manufacturer;
//   newObj[manufacturer] = newObj[manufacturer] + 1 || 1;
// }
// console.log('With for loop: ', newObj);

// let obj = {'product_name': 'IPhone'}
// console.log(obj.product_name);
// console.log(obj['product_name']);
// let name2 = 'product_id';
// obj.name2 = 'Samsung';
// obj[name2] = 'HTC';
// console.log(obj);

// cách mới với reduce()
// newObj2 = data.reduce((prev, next, index) => {
//   console.log("<b>Iteration " + index + "</b>");
//   console.log("prev:", prev);
//   console.log("next:", next);
//   let manufacturer = next.manufacturer;
//   prev[manufacturer] = prev[manufacturer] + 1 || 1;
//   console.log("Passing this to the 'prev' of the next iteration if any:", prev);
//   console.log("---------------");
//   return prev;
// }, {})
// console.log('With reduce: ', newObj2);

//=======CHAINING METHODS====================
// Những hàm này có thể viết theo kiểu chaining
// Muốn tính tổng doanh thu 
// totalRevenue = data.filter(product => {
//   return product.manufacturer === 'Apple';
// }).map(product => {
//   return product.price * product.sales;
// }).reduce((prev, next)=> {
//   return prev + next;
// })
// console.log(totalRevenue);