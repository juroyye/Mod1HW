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
const option1 = document.getElementById("btn1");
const option2 = document.getElementById("btn2");
const option3 = document.getElementById("btn3");
const option4 = document.getElementById("btn4");



function viewAst() {     
    
    
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
     document.getElementById("btn1").innerHTML = 
     `Enter and hide in a nearby asteroid 
     field until the enemy forces pass`

     document.getElementById("btn2").innerHTML = 
     `Attempt to fly across open space to a hypergate and 
     risk being captured`
   
     
});}


viewAst();