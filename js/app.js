// Name Property
// Age Property
// Hunger Value Property
// Happiness Property
// Sleeping Property (boolean)
// Eat Method
// Morph Method
// Go To Sleep Method

var tomagotchi = {
  name: "Khaled",
  age: 0,
  hunger: 10, // 1 to 10 scale 10 being hungriest
  happiness: 0, //0 to 10 scale 0 being the least happy
  isSleeping: false,
  currentForm: "Baby",
  life: true,
  eat: function(){
    this.hunger -= 3;
    hungerMeter.innerHTML = this.hunger;
    this.checkDeathByEating();
  },
  checkMorph: function(){
    if(this.age === 0){
      this.currentForm = "Baby";
    }else if(this.age <= 5){
      this.currentForm = "Kiddo";
    }
  },
  gainAge: function(){
    this.age += 5;
    this.checkDeathByAging();
    this.checkMorph();
  },
  checkDeathByAging: function(){
    if(this.age > 10){
      this.die("old age");
    }
  },
  checkDeathByEating: function(){
    if(this.hunger < 0){
      this.die("gluttony");
    }else if(this.hunger > 10){
      this.die("hunger");
    }
  },
  die: function(cause){
    this.life = false;
    alert("RIP " + this.name + " died of " + cause);
  }
}

var eatButton = document.getElementById("eat");
var hungerMeter = document.getElementById("hunger");
hungerMeter.innerHtml = 10;

eatButton.addEventListener("click", function(){
  tomagotchi.eat();
});

var currentPosition = 1;

function updatePosition(){
  var oldPosition = document.getElementById(currentPosition);
  if(currentPosition % 4 === 0){
    currentPosition = 1;
  }else{
    currentPosition += 1;
  }
  var newPosition = document.getElementById(currentPosition);
  oldPosition.classList.add("hidden");
  newPosition.classList.remove("hidden");
}

setInterval(function(){
  updatePosition()
}, 2000);
