// function main(){
//     console.log("Before.")
//     setTimeout(() => {
//         console.log("Done with timeout.")
//     }, 1000)
//     console.log("After.")
// }

// //main()

// function greet() {
//     console.log("Hello");
//     console.log("Before timeout.")
//     setTimeout(() => {
//         console.log("Done with timeout.")
//     }, 0)
//     console.log("After setting up timeout.")
//     setTimeout(() => {
//         console.log("Done with extra timeout.")
//     }, 0)

// }
// function start() {
//   greet();
//   console.log("exit start")
// }
// start();

// console.log("Call stack is empty.")


// get_database_query("select *", function{
//     execute_update("name","bob",function{
//         email_address = get_email_address(...function () {
//             notify_success("email@greg@greg.com",function() {
//                 update_dom_element("email","email_successful")
//             })
//         })
//     })
// }}

// console.log("Start");
// Promise.resolve().then(() => console.log("Promise"));
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");
// // 1. done with calls stack
// // 2. anything on the microtask queue, do it. 
// // 3. anything on the event queue, do it. 

// function doLater(callback) {
//   setTimeout(callback, 1000);
// }
// doLater(() => console.log("Finished"));

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("Done");
//     });
//   });
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data ready");
  }, 1000);
});

promise.then(result => console.log(result));

promise
  .then(result => handle(result))
  .catch(error => console.error("Error:", error));

fetch('/data')
  .then(response => response.json())
  .then(json => process(json))
  .catch(error => console.error(error));

async function loadData() {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Failed to load", err);
  }
}
loadData();
