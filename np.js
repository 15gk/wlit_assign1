var a=4;
const promise=new Promise((resolve,reject)=>{
    if (a<=0){
        reject("Enter number greater than 0 ")
       }
       else{
        sum2=a*(a+1)/2
        resolve(sum2)
       }
})

promise.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})