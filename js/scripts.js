const robogor = function(entry){
  let entryArray = [];
  for (let index = 0; index <= entry; index += 1){
    entryArray.push(index);
  } 

  function isNumber(entry){
    if (isNaN(entry)){
      alert("Please enter a number");
    }
  }
  isNumber(entry);

  entryArray.forEach(function(number){
      if (number.toString().includes(3)){
      entryArray[number] = "Won't you be my neighbor?"
    } else if (number.toString().includes(2)){
      entryArray[number] = "Boop!"
    } else if (number.toString().includes(1)){
      entryArray[number] = "Beep!"
    } 
  })
  return entryArray;
}

$(document).ready(function(){
  $("form#robogor").submit(function(event){
    event.preventDefault();

let entry = parseInt($("input#entry").val());
let result = robogor(entry);
$("#results").text(result);
  })
})
