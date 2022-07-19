// const square={
//   area:(a)=>(a*a),
//   perimeter:(a)=>(4*a)
// }

const square=require('./square.js');
const calsquare = (a) =>{
  console.log(`the value of a is ${a} and the area is ${square.area(a)} and the perimeter is ${square.perimeter(a)}`);
}
calsquare(5);
console.log(__filename);
console.log(__dirname);



