// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     if (location === "google") resolve("welcome to google");
//     else reject("you are not at google");
//   });
// }

// function processRequest(response){
//     return new Promise((resolve,reject)=>{
//         resolve(`the Make Request promise said: ${response}`)
//     })
// }

// makeRequest("google").then(response=> processRequest(response)).then(response=>console.log(`processes response: ${response}`)).catch(err=>{
//   console.log(err)
// })

// async function doWork() {
//   try{
//     const response=await makeRequest("google")
//     console.log("the response has arrived")
//     const processedResponse=await processRequest(response)
//     console.log(`the processed response from the dowork is:{ ${processedResponse} }`)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// doWork()

// //doubt



async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched Data"), 2000);
  });
}

async function main() {
  console.log("Start");
  
  const data = await fetchData(); // Waits for data but does NOT block the app
  console.log(data);

  console.log("End");
}

main();

console.log("this is a random code")