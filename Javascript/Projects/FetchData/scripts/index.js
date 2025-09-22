
// In js we are having two ways to load data from database
//1st build in method - fetch()
//2nd 3rd party lib - axios react

//url (imp)
//payload (optional) - data transfer - method, header, data
//If we are using get method then there is not neccesity for using payload.
const url = 'https://dummyjson.com/recipes';
// const response = fetch(url);

/* 
    1. Method Chaining

    2. async function
*/

// fetch(url).then((response) => {
//     return response.json()
// }).then(
//     (data) => {
//         console.log(data);
//         setData(data);
//     }
// ).catch((error) => {
//     console.log(error);
// })

async function fetchData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

fetchData();

let data = null;

function setData(fetchedData){
    data = fetchedData;
    console.log(data);
}