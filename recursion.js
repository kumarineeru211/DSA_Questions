
// let count = 1 
// function call(number){
//     if(count > number){
//         return
//     }
     
//     console.log( "call inside func" ,count)
//     count++
//     call(number)
// }
// call(10)

function factorial (num){
  if(num==0){
    return 1 
  }
  return num *factorial(num-1) 
}

let data = 5
console.log(factorial(data))