//async-await method
async function sumNo(n) {
    if (n <= 0) {
      throw new Error("Please provide a positive integer");
    }
  
    return (n * (n + 1)) / 2;
  }
  
  async function Sum1() {
    try {
      const result = await sumNo(4);
      console.log("Sum using async/await:", result);
    } catch (error) {
      console.error(error.message);
    }
  }


  // using promises 
  var a=4;
const promise=new Promise((resolve,reject)=>{
    if (a<=0){
        reject("Enter number greater than 0 ")
       }
       else{
        sum2=a*(a+1)/2
        resolve("sum using promises: "+sum2)
       }
})

promise.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
  
  Sum1();


  //using callback

  function sum4(c){
    return c*(c+1)/2;
}
function compute(action,x){
   
     return action(x);
  
}
console.log("Sum using callback :"+compute(sum4,4))