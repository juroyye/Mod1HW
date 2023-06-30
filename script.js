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

//option6 goes into the recharge warp drive option
let option6 = document.getElementById("btn6");

// option7 goes into the fly you TOWARDS the planet option
let option7 = document.getElementById("btn7");

// option8 goes into the second SOS option
let option8 = document.getElementById("btn8");

// option9 goes INTO the atmosphere and LAND option
let option9 = document.getElementById("btn9");

//option10 goes into the NEXT hypergate option
let option10 = document.getElementById("btn10");

//option11 goes into the pirate ship option
let option11 = document.getElementById("btn11");

//option12 goes into the contact police option
let option12 = document.getElementById("btn12");

//option13 goes into the respond to SOS option
let option13 = document.getElementById("btn13");

//option14 goes into the fight Scarr option
let option14 = document.getElementById("btn14");

//option15 goes into the run from Scarr option
let option15 = document.getElementById("btn15");

//option16 goes into the surrender option
let option16 = document.getElementById("btn16");

//option17 goes into the stand ground option
let option17 = document.getElementById("btn17");

let option18 = document.getElementById("resetBtn");



if(100 == 100) {
option2.style.display = 'none';
option3.style.display = 'none';
option4.style.display = 'none';
option5.style.display = 'none';
option6.style.display = 'none';
option7.style.display = 'none';
option8.style.display = 'none';
option9.style.display = 'none';
option10.style.display = 'none';
option11.style.display = 'none';
option12.style.display = 'none';
option13.style.display = 'none';
option14.style.display = 'none';
option15.style.display = 'none';
option16.style.display = 'none';
option17.style.display = 'none';
}

// this is the beginning button that allows you to start 

function acceptMission() {      
  option1.addEventListener('click', () => {       
    
    


    // alter the master text
     document.getElementById("masterText").innerHTML = 

     `With the tesseract in the seat next to you, you manage
      to pull your spacecraft off of the launch 
     platform and angle it towards the open dock bay. Facing
     nothing but limitless stars and space consuming your 
     front viewport and Lord Scarr’s minions behind 
     your ship firing away at your fuselage, \r\n you jettison out 
     of Lord Scarr's mothership "Scavenger" and enter into space.   
     As you steer, you spot a hypergate in the distance that 
     could supposedly bring you closer to Fusille. However, you 
     can also see on your radar that emergency space fighters have
     been deployed and are rapidly advancing. There's a nearby
     asteroid field that might grant protection... \n Now having limited time, you are faced with a critical 
     decision:`;

 
     // alter the buttons  



     document.getElementById("btn2").innerHTML = 
     `ATTEMPT TO FLY ACROSS OPEN SPACE TO HYPERGATE`

     document.getElementById("btn3").innerHTML =
     `ATTEMPT TO HIDE IN NEARBY ASTEROID FIELD`

option1.style.display = 'none';
option2.style.display = 'initial';
option3.style.display = 'initial';
     
});}
acceptMission();




// this button will allow you to select the hypergate option
  function viewHypergate() {     
     option2.addEventListener('click', () => {       
      
        
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You figure that the asteroid field will only make 
       you a sitting duck and an easy target. You pull back
        the throttle, accelerating amongst the stars. Lord
        Scarr and his troops continue in hot pursuit, firing laser 
       bolts and cannons that narrowly graze your wings. You press the
       throttle until you hear metal creaking; your palms are soaked 
       in sweat. One of Scarr's goons races past you and then turns to unleash 
    their rail gun. A perfectly executed barrel roll allows you to avoid
       the situation, as the beam narrowly misses your cockpit.
       Manuevering the control stick and grasping the throttle,
       you glide cleanly into the hypergate and accelerate to the next 
       solar system. Upon exiting the gate, you spot a purpleish planet, 
       with storm circles forming on the surface. However, 
       now might be a good time to call for help.`;
  
   
       // alter the buttons
       document.getElementById("btn7").innerHTML = 
       `FLY TOWARDS THE PLANET IN SEEK OF HELP`
  
       document.getElementById("btn8").innerHTML = 
       `SEND OUT AN SOS TO YOUR TEAM AND WAIT`

       option2.style.display = 'none';
       option3.style.display = 'none';


       option7.style.display = 'initial';
       option8.style.display = 'initial';

  });}
 viewHypergate();








 // this button will allow you to select the asteroid option
function viewAst() {     
    option3.addEventListener('click', () => {       
      
        option2.style.display = 'none';
        option3.style.display = 'none';


      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `Reaching the gate is impossible, you think to yourself, as there's 
       no way you can out run some of the most merciless assassins in the universe.
        You press the throttle even harder, rocketing toward the asteroid field.
        You navigate around the first asteroid, dodge to the right of a second,
        go under a third, even yet blast through a fourth. With each manuever, 
        Scarr's henchmen fall further and further behind on your radar. You 
        feel like you've lost them completely. You see a giant mass, which appears 
        to be a black hole in the distance. No doubt, that could provide an escape.
         However, you feel like calling for help would also be a great option right now...`;
       

       // alter the buttons
       document.getElementById("btn4").innerHTML = 
       `ENTER THE BLACK HOLE`
  
       document.getElementById("btn5").innerHTML = 
       `SEND AN SOS SIGNAL AND WAIT`
     

       option4.style.display = 'initial';
      option5.style.display = 'initial';
       
  });}
viewAst();
  







 // this function allows you to fly TOWARDS the planet
 function flyToPlanet() { 
    
    option7.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `Waiting around at the end of the hypergate is just as good as surrendering,
       you reckon. They'll be following in no time. You take off towards the planet
       intent on landing, requesting help from the natives, and hiding until the search 
       party subdues. In the distance, however, you spot another hypergate that looks as if 
       it was in disrepair. However, the rings are still functioning, and as such, could 
       still transport you. If you go through, perhaps you can lose the fleet and not be followed
       down to the planet.`;
  
       option7.style.display = 'none';

       option8.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn9").innerHTML = 
       `LAND AND REQUEST ASSISTANCE`
  
       document.getElementById("btn10").innerHTML = 
       `GO THROUGH NEXT HYPERGATE`

       option9.style.display = 'initial';
      option10.style.display = 'initial';
     
    });}
    flyToPlanet();






// this function enters planet (LOSS)
function enterPlanet(){
    option9.addEventListener('click', () => {       
      
      
        // alter the master text
         document.getElementById("masterText").innerHTML = 
    
         `The hypergate looks too shoddy. You feel like it'd take immense luck
          if you made it through, and even more luck if you could make it out alive.
          You tear through open space and rocket down into the planet's atmosphere.
          The ship rocks and creaks as it hits turbulence, bumping against pockets
          of air. As you exit the clouds, the signs of civilization becomes visible.
          Sprawling cities, farms, and roadways are strewn across the landscape. 
          Although there are storm clouds in the distance, three seperate nearby stars 
          shine brightly down on the terrain. In awe of your scenery, you are startled 
          by a loud and definite warning coming from your radar. You look up, and 
          quickly identify an emerging object from the clouds to be Scarr's fighter. 
          You immediately pivot and begin to jettison away from him, however, you've 
          already been spotted. Scarr doesn't hesitate to open fire. A thermal bolt
        sizzles past you on your left, yet another on your right. A loud crack and boom
        is felt from the back of your ship, and you realize you've been hit. Your craft 
        spins uncontrollably, and as your cabin de-pressurizes, you fade out of 
        consciousness.`;
    
          option9.style.display = 'none';
          option10.style.display = 'none';
     
         // alter the buttons
    
        });}
     enterPlanet();
 







// this function enters the black hole

function enterBlackHole() { 
    
    option4.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `There's no point in waiting you think to yourself; that will only get 
       you captured. You aim your vessel to the seething abyss of the hole, 
       say a prayer, and press the throttle forward. The ship rumbles. 
       The monitor glitches. The hole absorbs your ship and wraps your 
       surroundings in darkness. You feel the fabric of your clothing start to bubble,
       and your forehead begins to sweat profusely. You're pressed into the 
       back of the seat as you reach speeds rarely comprehended or felt by man. Just as 
       quickly as it began, it stops, and your ship is flung out into the Alden star system.
       Your warp drive is fried, and the repair time is estimated by your console to be 2 hours.
       However, there's a ship nearby that you can perhaps make contact with for help. 
       You aren't familiar with this region, and as such, don't want to draw too much attention to 
       yourself.`;
  
       option4.style.display = 'none';

       option5.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn6").innerHTML = 
       `WAIT FOR WARP DRIVE TO RECHARGE`
  
       document.getElementById("btn11").innerHTML = 
       `MAKE COMMUNICATION WITH NEARBY SHIP`
     

       option6.style.display = 'initial';
      option11.style.display = 'initial';


    });}
    enterBlackHole();








// this function sends an SOS Signal (FIRST ONE) (LOSS)
function sendSos1() {  
    option5.addEventListener('click', () => {       
      
      

      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You begin to imagine where the black hole can lead and quickly shake
       off the thought. Who knows if this ship can handle such intense
       speeds and temperatures, you think. Reaching out for help is your best option.
       You press a few buttons on the console, and your location is immediately pinged
       to your team some few star systems away. You rest your eyes for a second, 
       able to take a deep breath at last. As you lean back in your seat, your ship lurches
       right. You swiftly take up the controls, but it's too late. One of Scarr's minions
       has you snagged in an energy net. You look frantically to see that your radar had been jammed.
        You pull the throttle, but theres very little response. Asteroids crumble from right to left
        as the enemy fleet closes in, pushing each rock out of the way. You have no choice but to surrender.`;
  
        // MAKE OPTIONS DISAPPEAR

      option4.style.display = 'none';
      option5.style.display = 'none';

    });}
    sendSos1();








// this function contacts the pirate ship (LOSS)
    function contactPirates() { 
    
        option11.addEventListener('click', () => {       
          
          
          // alter the master text
           document.getElementById("masterText").innerHTML = 
      
           `You can't do this alone. Getting help is worth any potential risk.
           After all, the universe is at stake and you believe in the goodness of 
           others. You snatch the intercom, find the general radio channel, and 
           speak as the mic crackles to life. Informing them that you need help to 
           Fusille and that your warpdrive is drained, the ship rushes over to your 
           position. Upon their approach, you spot an insignia roughly plastered to the 
           side of the ship. Translated to English, it renders Ta'gari. You quickly
           identify them as the merciless and cowardly pirating crew, responsible for 
           the disappearance of thousands of spacecraft across dozens of galaxies.
           Before you can react, their cannon jumps to life. You reach for the throttle, 
           but it's too late; they fire.`
      
            // MAKE OPTIONS DISAPPEAR
         
            option6.style.display = 'none';
            option11.style.display = 'none';

        });}
        contactPirates();






        
// this function waits for the warp drive to recharge
    function waitWarpdrive() { 
    
            option6.addEventListener('click', () => {       
              
              
              // alter the master text
               document.getElementById("masterText").innerHTML = 
          
               `You decide against asking for help. The ship could be full of bounty
               hunters, or otherwise crooked individuals. You reroute power from
               the lights and thrusters towards the recharging of the warp drive, 
               and the wait time is cut to 30 minutes. As you stand up out of your seat,
               you hear a faint beeping noise, seemingly coming from the underbelly of the ship.
               You get on your hands and knees and quickly recognize the sound; a tracking device.
               Frantically standing up and rushing back to your seat, you divert power back
               to your thrusters, but it's too late. Roughly a dozen enemy ships warp in, clearly
               sure of where you were located. As you begin to steer, an energy net is cast over
               your vessel. Pressing the throttle provides little response. You have no choice 
               but to surrender.`
          
                // MAKE OPTIONS DISAPPEAR

                option6.style.display = 'none';
                option11.style.display = 'none';
             
            });}
       waitWarpdrive();





// this function goes into the SOS option (SECOND) (LOSS)
       function sendSos2() { 
    
        option8.addEventListener('click', () => {       
          
          
          // alter the master text
           document.getElementById("masterText").innerHTML = 
      
        `You send an sos signal, but a scavenger robot spots you 
           and snitches. You surrender`
      
           option7.style.display = 'none';
           option8.style.display = 'none';
            // MAKE OPTIONS DISAPPEAR
         
        });}
   sendSos2();



// this function goes into the next hypergate option
function nextHypergate() { 
    
    option10.addEventListener('click', () => {       
      
      
        option9.style.display = 'none';


        option10.style.display = 'none';

    
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You narrowly make into the next hypergate.`;

   
       // alter the buttons
       document.getElementById("btn12").innerHTML = 
       `Reach out to a nearby police envoy for help 
       and protection as you go back to Fusille`
  
       document.getElementById("btn13").innerHTML = 
       `Respond to an SOS call in your sector`
     

       option12.style.display = 'initial';
       option13.style.display = 'initial';


    });}
    nextHypergate();




    function contactPolice() { 
    
        option12.addEventListener('click', () => {       
          
          
          // alter the master text
           document.getElementById("masterText").innerHTML = 
      
           `The police offer protection. Lord Scarr arrives 
           and attacks.`;
      
       
           // alter the buttons
           document.getElementById("btn14").innerHTML = 
           `Fight Scarr and his forces`
      
           document.getElementById("btn15").innerHTML = 
           `Run and escape through another hypergate`


           option12.style.display = 'none';
           option13.style.display = 'none';


           option14.style.display = 'initial';
           option15.style.display = 'initial';
         
        });}
        contactPolice();



// this function sends an SOS Signal (THIRD ONE) (LOSS)
function sendSos3() { 
    
    option13.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You arrive at the SOS but nobody is there. Lord Scarr
        and his minions tricked you, and as a result, they come and
         make you surrender.`;
      

         option12.style.display = 'none';
         option13.style.display = 'none';
        // MAKE OPTIONS DISAPPEAR
     
    });}
    sendSos3();




    // this function contacts the pirate ship (LOSS)
function fightScarr() { 
    
        option14.addEventListener('click', () => {       
          
          
          // alter the master text
           document.getElementById("masterText").innerHTML = 
      
           `You engage in combat with Scarr, but get shot down.`
      
            // MAKE OPTIONS DISAPPEAR

            option14.style.display = 'none';
            option15.style.display = 'none';
         
        });}
        fightScarr();



function runFromScarr() { 
    
            option15.addEventListener('click', () => {       
              
              
              // alter the master text
               document.getElementById("masterText").innerHTML = 
          
               ` You try to flee and manage to escape through
                a hyper gate. Upon leaving the gate and AFTER
                 sending an SOS, your ship goes dead silent. 
                 Everything is dead, you're in pitch black 
                 space. One of Scarr's ships follows you 
                 through the portal. About to destroy you
                  and salvage the tesseract, you're faced
                with a decision.`;
          
           
               // alter the buttons
               document.getElementById("btn16").innerHTML = 
               `Surrender`
          
               document.getElementById("btn17").innerHTML = 
               `Stand ground and face consequences`
             
               
            option14.style.display = 'none';
            option15.style.display = 'none';

            option16.style.display = 'initial';
            option17.style.display = 'initial';
     });}
runFromScarr();




 function surrender() { 
    
                option16.addEventListener('click', () => {       
                  
                  
                  // alter the master text
                   document.getElementById("masterText").innerHTML = 
              
                   ` They board ship, tie you up, take tesseract
                    and leave through gate. Moments later, your 
                    forces of good arrive. You tell them you gave
                     the tesseract up. The entire team breaks out 
                     into a frenzy of emotions. The universe is
                    doomed.`
              
                    // MAKE OPTIONS DISAPPEAR
                    option16.style.display = 'none';
                    option17.style.display = 'none';
 });}
 surrender();
            

  

 function standGround() { 
    
    option17.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       ` As the cannon of Lord Scarr's ship heats up and 
       the bolt is nearly fired, a shimmer of light flashes
        through space. His ship instantly shuts off. A laser
         bolt that appears as lightning strikes through his
          ship, causing it to instantly explode in a fiery
           ball. Your forces have arrived. They board your
            ship and secure the tesseract from you.
        "Congratulations pilot, you saved the universe.`
  
        // MAKE OPTIONS DISAPPEAR

        option16.style.display = 'none';
        option17.style.display = 'none';
     
});}
standGround();




// this function activates the reset button



function reset() { 
    
    option18.addEventListener('click', () => {       
      window.location.reload()

})}
reset();





// onClick="window.location.reload();



// hide button function
