
//Selecting the City from the input
const city = document.getElementById("city");
//Selecting the Button
const button =document.getElementById("button");

// Now Puttin the values on browser so getting Element
const name =document.getElementById("localName")
const localTime =document.getElementById("localTime")
const temperature =document.getElementById("localTemp")

//Creating a `1Function for Api 
async function getWeather(cityNames){

    const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=c74157882291466e90b40252232211&q=${cityNames}&aqi=yes`)
    return await weather.json();

}

//Adding Functionality to the Button
button.addEventListener("click",async()=>{
    const cityName = city.value;
    console.log(cityName);

    //Calling the weather api with the city input by user
    //Used await Since it can take time to give the result .
    // Async comes with await
    const data = await getWeather(cityName);
    console.log(data);
    name.innerText=`${data.location.name},${data.location.region}-${data.location.country}`
    localTime.innerText=`Time : ${data.location.localtime}`
    temperature.innerText=`Temperatur in Farhenheit :${data.current.temp_f}`

})


function high(){
    // Selecting the HTML element with the id "city" and storing it in the constant variable 'city'.
const city = document.getElementById("city");

// Selecting the HTML element with the id "button" and storing it in the constant variable 'button'.
const button = document.getElementById("button");

// Selecting HTML elements where we will display the weather information and storing them in variables.
const name = document.getElementById("localName"); // Element to display location name
const localTime = document.getElementById("localTime"); // Element to display local time
const temperature = document.getElementById("localTemp"); // Element to display temperature

// Creating an asynchronous function 'getWeather' that fetches weather data from a weather API based on the provided city name.
async function getWeather(cityName) {
    // Using the fetch function to make a GET request to the weather API.
    const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=c74157882291466e90b40252232211&q=${cityName}&aqi=yes`);
    
    // Returning the JSON data obtained from the API.
    return await weather.json();
}

// Adding an event listener to the button, which listens for a click event and executes the provided async function.
button.addEventListener("click", async () => {
    // Getting the value entered by the user in the input field with id "city".
    const cityName = city.value;
    console.log(cityName);

    // Calling the 'getWeather' function with the user-provided city name.
    // Using 'await' to wait for the asynchronous operation to complete.
    const data = await getWeather(cityName);
    console.log(data);

    // Updating the text content of HTML elements with the received weather data.
    name.innerText = `${data.location.name}, ${data.location.region}-${data.location.country}`;
    localTime.innerText = `Time: ${data.location.localtime}`;
    temperature.innerText = `Temperature in Fahrenheit: ${data.current.temp_f}`;
});
}
