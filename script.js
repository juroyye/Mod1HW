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


// specifies the button and links it to js


// option1 is accept mission and starts game
let option1 = document.getElementById("btn1");

// option2 goes into the hypergate option
let option2 = document.getElementById("btn2");

// option3 goes into the asteroid option
let option3 = document.getElementById("btn3");

// option4 allows you to enter the black hole
let option4 = document.getElementById("btn4");

// option5 goes into the first SOS option
let option5 = document.getElementById("btn5");


let option6 = document.getElementById("btn6");

// option7 goes into the fly you TOWARDS the planet option
let option7 = document.getElementById("btn7");

// option8 goes into the second SOS option
let option8 = document.getElementById("btn8");

// option9 goes INTO the atmosphere and LAND option
let option9 = document.getElementById("btn9");

//option goes into the NEXT hypergate option
let option10 = document.getElementById("btn10");


let option11 = document.getElementById("btn11");
let option12 = document.getElementById("btn12");
let option13 = document.getElementById("btn13");
let option14 = document.getElementById("btn14");
let option15 = document.getElementById("btn15");
let option16 = document.getElementById("btn16");
let option17 = document.getElementById("resetBtn");



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

        option1.style.display = 'none';

     document.getElementById("btn2").innerHTML = 
     `Attempt to fly across open space to a hypergate and 
     risk being captured`

     document.getElementById("btn3").innerHTML =
     `Attempt to hide in nearby asteroid field`

     
});}
acceptMission();


// this button will allow you to select the hypergate option
  function viewHypergate() {     
    
    
    option2.addEventListener('click', () => {       
      
      
        
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You pull back the throttle, accelerating amongst the
       stars. Lord Scarr and his troops are firing laser 
       bolts, barely grazing your wings. You make it into 
       the hypergate and accelerate to the next solar system.`;
  
       option2.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn7").innerHTML = 
       `Fly towards the closest planet present`
  
       document.getElementById("btn8").innerHTML = 
       `Send out an SOS to your team and wait`
     
       
  });}
 viewHypergate();


 // this button will allow you to select the asteroid option
function viewAst() {     
    
    
    option3.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `The asteroids FIELD`;
       
       option2.style.display = 'none';
       option3.style.display = 'none';

       // alter the buttons
       document.getElementById("btn4").innerHTML = 
       `Enter the black hole`
  
       document.getElementById("btn5").innerHTML = 
       `Send an SOS Signal and wait`
     
       
  });}
viewAst();
  

 // this function allows you to fly TOWARDS the planet
 function flyToPlanet() { 
    
    option7.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You spot a nearby planet in the distance,
       YOU REALIZE ITS FRIENDLY
       YOU ALSO SPOT ANOTHER HYPERGATE`;
  
       option7.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn9").innerHTML = 
       `FLY IN AND REQUEST ASSISTANCE`
  
       document.getElementById("btn10").innerHTML = 
       `GO THROUGH NEXT HYPERGATE`
     
    });}
    flyToPlanet();






// this function enters planet: LOSS
function enterPlanet(){
    option9.addEventListener('click', () => {       
      
      
        // alter the master text
         document.getElementById("masterText").innerHTML = 
    
         `You pull into the atmosphere and Lord Scarr
          shoots you down`;
    
          option9.style.display = 'none';
     
         // alter the buttons
    
        });}
     enterPlanet();
 









// this function enters the black hole

function enterBlackHole() { 
    
    option4.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `BLACCCCCC`;
  
       option4.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn6").innerHTML = 
       `Wait for warp drive to recharge`
  
       document.getElementById("btn11").innerHTML = 
       `Make communication with nearby ship`
     
    });}
    enterBlackHole();


// this function sends an SOS Signal (FIRST ONE)

function sendSos1() { 
    
    option5.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You send an sos signal, but a scavenger robot spots you 
       and snitches. You surrender`;
  
        
     
    });}
    sendSos1();

// this function activates the reset button

// hide button function
