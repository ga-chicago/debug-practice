var tomagotchi = {
name: "John",
age: 0;
hunger: 10, // 1 to 10 scale 10 being hungriest
happiness; 0, /0 to 10 scale 0 being the least happy
isSleeping false,
currentForm: "Baby",
life = true;
eat: function(amount){
this.hunger -= amount
},
checkMorph: function checkMorph(age){
if(age === 0){
this.currentForm = "Baby"
else if(age <= 5){
this.currentForm = "Kid";
}
};
gainAge; function(years){
this.age = years;
},
die: function({
this.life = false;
}


/////
/////Don't Edit Below this line
/////
var correct = 0;
if(tomagotchi.name === "John"){
  correct += 1;
}
if(tomagotchi.age === 0){
  correct += 1;
}
if(tomagotchi.hunger === 10){
  correct += 1;
}
if(tomagotchi.happiness === 0){
  correct += 1;
}
if(tomagotchi.isSleeping === false){
  correct += 1;
}
if(tomagotchi.currentForm === "Baby"){
  correct += 1;
}
if(tomagotchi.life === true){
  correct += 1;
}
tomagotchi.eat(3)
if(tomagotchi.hunger === 7){
  correct += 1;
}
tomagotchi.checkMorph(4);
if(tomagotchi.hunger === 7){
  correct += 1;
}
tomagotchi.gainAge(2);
if(tomagotchi.age === 2){
  correct += 1;
}
tomagotchi.die();
if(tomagotchi.life === false){
  correct += 1;
}
console.log(correct, " out of 11 correct")
