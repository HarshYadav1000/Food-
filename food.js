let foods = document.getElementById("foods");
let orders = document.getElementById("orders");
let dishs = document.getElementById("dishs");
let trackbtn = document.getElementById("trackbtn");

foods.addEventListener("click", function(){
    foods.style.color="red";
    orders.style.color="white";
    dishs.style.color="white";
})

dishs.addEventListener("click", function(){
    foods.style.color="white";
    orders.style.color="white";
    dishs.style.color="red";
})

orders.addEventListener("click", function(){
    foods.style.color="white";
    orders.style.color="red";
    dishs.style.color="white";
})



let logbtn = document.getElementById("logbtn");

logbtn.addEventListener("click", function(){
    document.querySelector(".loginpage").style.display="block";
})

let loged = document.getElementById("logedbtn");

loged.addEventListener("click", function(){

    let email = document.getElementById("name");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter email password")
    
    }else{
        alert("You loged In ");
        document.querySelector(".loginpage").style.display="none";

    }
})



trackbtn.addEventListener("click", function(){
    document.querySelector(".tracking").style.display="flex";
   
   



 })

 async function addFood(food) {
    try {
        const response = await fetch('http://localhost:5000/api/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(food), // Convert data to JSON
        });

        if (response.ok) {
            const result = await response.json();
            alert('Food added successfully!');
            console.log('Added food:', result);
        } else {
            const error = await response.json();
            alert(`Error: ${error.error}`);
        }
    } catch (err) {
        console.error('Error adding food:', err);
        alert('Failed to connect to the server.');
    }
}

// Example usage:
addFood({
    "name": "Pizza",
    "description": "Cheesy and delicious",
    "image": "img3.jpg"
    ,
});







// Call loadFoods when the page loads
document.addEventListener("DOMContentLoaded", loadFoods);

async function getRecommendations(userId) {
    try {
        const response = await fetch('http://localhost:5000/api/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(`Recommended foods: ${data.recommendations.join(', ')}`);
        } else {
            alert('Error fetching recommendations.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch recommendations.');
    }
}

// Example Usage: Fetch recommendations for User ID 1
getRecommendations(1);
