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



if (option1.addEventListener('click')) {
    
     // alter the master text
     document.getElementById("masterText").innerHTML = "New text!";
     // alter the buttons
     

}








