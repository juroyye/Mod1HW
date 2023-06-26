class Pilot {
    constructor(height, age, shipName, race, homePlanet) {
        this.height = height;
        this.age = age;
        this.shipType = shipName;
        this.race = race;
        this.homePlanet = homePlanet;
    }
};


class LordScarr {
    constructor(isEvil, shipName, mainWeapon, armorColor, homePlanet) {   
        this.isEvil = true;
        this.shipName = shipName;
        this.mainWeapon = mainWeapon;
        this.armorColor = armorColor;
        this.homePlanet = homePlanet;
    }
};

// Functions List 



// specifies the button and links it to js
let option1 = document.getElementById("btn1");
let option2 = document.getElementById("btn2");
let option3 = document.getElementById("btn3");
let option4 = document.getElementById("btn4");


// this is the beginning button that allows you to start 

function acceptMission() {     
    
    
  option1.addEventListener('click', () => {       
    
    
    // alter the master text
     document.getElementById("masterText").innerHTML = 

     `You manage to pull your spacecraft off of the launch 
     platform and angle it towards the open gate, with 
     nothing but limitless stars and space consuming your 
     front viewport. You hear Lord Scarr’s minions behind 
     your ship, firing away at your fuselage, peppering the
      underbelly. You are now faced with a critical decision:`;

 
     // alter the buttons
     document.getElementById("btn3").innerHTML = 
     `Enter and hide in a nearby asteroid 
     field until the enemy forces pass`

     document.getElementById("btn2").innerHTML = 
     `Attempt to fly across open space to a hypergate and 
     risk being captured`
   
     document.getElementById("btn1").innerHTML = 
     ``
   
     
});}
acceptMission();


// this button will allow you to select the asteroid option


function viewAst() {     
    
    
    option3.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `The asteroids`;
  
   
       // alter the buttons
       document.getElementById("btn1").innerHTML = 
       `Enter the black hole`
  
       document.getElementById("btn2").innerHTML = 
       `Send an SOS Signal and wait`
     
       
  });}
viewAst();
  

// this button will allow you to select the hypergate option
  function viewHypergate() {     
    
    
    option2.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You pull back the throttle, accelerating amongst the
       stars. Lord Scarr and his troops are firing laser 
       bolts, barely grazing your wings. You make it into 
       the hypergate and accelerate to the next solar system.`;
  
   
       // alter the buttons
       document.getElementById("btn1").innerHTML = 
       `Fly towards the closest planet present`
  
       document.getElementById("btn2").innerHTML = 
       `Send out an SOS to your team and wait`
     
       
  });}
 viewHypergate();