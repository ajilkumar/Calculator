const display = document.getElementById("result")

function toDisplay(input){
  if (display.value === "error" || display.value === "cannot divide by zero") {
    clearDisplay();
  }
  display.value += input
}

function clearDisplay(){
  display.value = ""
}

function calculate(){
  try{display.value = eval(display.value)}
  catch(error){
    display.value = "error"
    return
  }
  if(display.value == Infinity){
    display.value = "cannot divide by zero"
    return
  }
  
}

document.addEventListener("keydown", function(e){
  if (e.key === "0") {
    display.value += "0";
  } else if (e.key === "1") {
    display.value += "1";
  } else if (e.key === "2") {
    display.value += "2";
  } else if (e.key === "3") {
    display.value += "3";
  } else if (e.key === "4") {
    display.value += "4";
  } else if (e.key === "5") {
    display.value += "5";
  } else if (e.key === "6") {
    display.value += "6";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "8") {
    display.value += "8";
  } else if (e.key === "9") {
    display.value += "9";
  }

  if (e.key === "+") {
    display.value += "+";
  } else if (e.key === "-") {
    display.value += "-";
  } else if (e.key === "*") {
    display.value += "*";
  } else if (e.key === "/") {
    display.value += "/";
  }

  if (e.key === ".") {
    display.value += ".";
  }

  if (e.key === "Enter") {
    e.preventDefault()
    calculate()
    }
    
  

  if (e.key === "Backspace") {
    display.value = display.value.substring(0, display.value.length - 1);
  }

})
