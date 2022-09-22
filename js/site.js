// Get the values from the Page
// Starts or controller function
function getValues(){
    // Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    // We need to validate our input
    // Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {

        // We call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // We call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }



    
}

// Generate numbers from startValue to the endValue
//  Logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    // We want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++) {

        // This will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;

}

// Display the numbers and mark even numbers in bold.
// Display or view functions
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class = "${className}">${number}</td></tr>`;
    
    }

    document.getElementById("results").innerHTML = templateRows
}