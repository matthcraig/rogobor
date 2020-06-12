const robogor = function(entry){
  let entryArray = [];
  for (let index = 0; index <= entry; index += 1){
    entryArray.push(index);
  } 
  entryArray.forEach(function(number){
    // if number has a 3 present....
    // if number has a 2 present....
    // if number has a 1 present....
  })
  return entryArray;
}

$(document).ready(function(){
  $("form#robogor").submit(function(event){
    event.preventDefault();
  })
})
