/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertedEl = ""
let convertedBtn = document.getElementById("convert-btn")
let output1 = ""
let output2 = ""
let mtrFeet = document.getElementById("mtrToFeet")
let ltrsGllns = document.getElementById("ltrsToGllns")
let KiloLbs = document.getElementById("KiloToLbs")

convertedBtn.addEventListener("click", function() {
    convertedEl = document.getElementById("converted-num").value
    if(convertedEl) {
        convertedEl = document.getElementById("converted-num").value
        conversion(convertedEl, 3.281)
        conversion(convertedEl, 0.264)
        conversion(convertedEl, 2.204)
    }
})

function conversion(numToBeConverted, conversion) {
    
    output1 = (numToBeConverted*conversion).toFixed(3)
    output2 = (numToBeConverted/conversion).toFixed(3)
    if(conversion === 3.281) {
        printing(numToBeConverted, "meters", "feet", output1, output2, mtrFeet)
        
    }
    else if(conversion === 0.264) {
        printing(numToBeConverted, "liters", "gallons", output1, output2, ltrsGllns)
    }
    else {
        printing(numToBeConverted, "meters", "feet", output1, output2, KiloLbs)
    }
    
}

function printing(numToBeConverted, type1, type2, output1, output2, edit) {
    edit.textContent = `
    ${numToBeConverted} ${type1} = ${output1} ${type2} | 
    ${numToBeConverted} ${type2} = ${output2} ${type1}
    `
}