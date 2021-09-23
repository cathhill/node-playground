// Object property shorthand

const name = "Andrew";
const userAge = 27;

// when setting up a property whose value comes from a variable name, can use this shortcut rather than "name: name".
const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

//const label = product.label
//const stock = product.stock

// Instead of above variables, create a new variable from an object. Can rename, e.g. label to productLabel, or set a default value e.g. for rating which doesn't exist on the object
/* const { label: productLabel, stock, rating = 5 } = product;
console.log(label);
console.log(stock); */

//if know it's an object, can destructure it inline.
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
