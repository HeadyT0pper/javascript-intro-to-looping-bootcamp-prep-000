function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1)
    {
    array.push("I am 1 strange loop.") 
  }
  else 
  {
    array.push("I am ${i} strange loops.")  
  }
 }
 return array
}
function whileLoop(Number) {
  while (Number > 0) {
    console.log(--Number)
  }
  return 'done'
}
function doWhileLoop(array) {
do {
  
  } while (array.length > 0 || maybeTrue())
  return array
}