const products =[

{name :'laptop', price:3300 , brand:'lenovo', color:'silver'},

{name :'iphone', price:43300 , brand:'iphone', color:'golden'},


{name :'watch', price:300 , brand:'redi', color:'vlack'},


{name :'pen', price:30 , brand:'matador ', color:'blue'},

]

/* map return an array , that is why you can store it  */
const brands = products.map(product => product.brand)

// console.log(brands)
/* for each dont return something  */
products.forEach(product =>console.log(product.color))


/* filter returns something */

const cheap = products.filter(product => product.price <= 5000);

const cheapname = products.filter(product => product.name.includes('i'));


console.log(cheap)
console.log(cheapname)


/* find returns something, returns the first element it has matched  */