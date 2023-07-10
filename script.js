// this is the class of Pilot, instantiation at bottom
class Pilot {
    constructor(height, age, shipName, race, homePlanet) {
        this.height = height;
        this.age = age;
        this.shipType = shipName;
        this.race = race;
        this.homePlanet = homePlanet;
    }
};

// this is the class of LordScarr, instantiation at bottom
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
     asteroid field that might grant protection... Now having limited time, you are faced with a critical 
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
      
        `You send an SOS signal, and relax off of the throttle. As
        your engine slows down, you recognize a scavenger robot 
        nearby. It boops along, retrieving metal strewn across space.
        You shut your lights off, in hopes that it won't spot you.
        As the lights turn off, your ship flashes a signal that traverses through space
        and glares off the robot's sensors. It immediately fixates on you.
         The robot sounds an alarm, and Scarr and his forces 
        arrive nearly instantly. An energy net is cast over you, and
        after a few minutes of struggle, you have no choice but to 
        surrender.`
      
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
  
       `You push the throttle and manuever your vessel towards the gate. Fleeing to the 
       planet can only get you so far; if you get caught on the planet then escape is
       practically impossible. The ship buckles and churns as you approach. The rings,
       covered in space amoeba and intergalactic sludge, barely rotate as you enter.
       After a deep breath and a prayer, you advance the throttle and are instantly 
       jolted into hyperspace. The vessel rocks back and forth, your dashboard cluttered
       with the detections of star systems and celestial bodies. Moments later, you're
       spit out into the deep of space once again. Instantly, the first alert to overtake
       your HUD is an SOS signal a few hundred miles away. It's definitely close enough for you
       to investigate. After all, it's against Intergalactic Law to ignore a person in distress.
        However, there's a police envoy nearby that might escort you safely to Fusille where you can
       ensure the tesseract is disposed of. Handling the SOS shouldn't take long, but is it more
       important than the tesseract?...`;

   
       // alter the buttons
       document.getElementById("btn12").innerHTML = 
       `REACH OUT TO THE POLICE ENVOY FOR HELP AND PROTECTION AS YOU TRAVEL TO FUSILLE`
  
       document.getElementById("btn13").innerHTML = 
       `RESPOND TO THE SOS CALL IN YOUR SECTOR`
     

       option12.style.display = 'initial';
       option13.style.display = 'initial';


    });}
    nextHypergate();




    function contactPolice() { 
    
        option12.addEventListener('click', () => {       
          
          
          // alter the master text
           document.getElementById("masterText").innerHTML = 
      
           `Breaking intergalactic law in the scope of saving the universe is acceptable, you reckon.
           Clutching the comms, you instantly make contact with the policing craft and 
           inform them of your situation. Immediately, they rally to your aid and offer to escort
           you through a nearby hypergate that would land you in the same star system as Fusille.
           Before you're able to express thanks, a blinding light flashes in your cockpit, and your 
           radar completely deadens. No less than thirty of Lord Scarr's ships warp in, instantly 
           destroying two police craft idling nearby. The police spring to action, firing back at the
           incoming ambushees. Bolts fly in every direction, and explosions begin to litter the once
           calm spacefront. The hypergate isn't too far, nor is it too close. You're tired of running.
           Now might be your time to make your stand. If you make it to the gate, Scarr will definitely
           be in pursuit. You don't want to run, but staying and fighting might be exactly what Scarr wants you
           to do...`;
      
       
           // alter the buttons
           document.getElementById("btn14").innerHTML = 
           `FIGHT SCARR AND HIS FORCES`
      
           document.getElementById("btn15").innerHTML = 
           `RUN AND ESCAPE THROUGH ANOTHER HYPERGATE`


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
  
       `You arrive at the SOS but there is no ship in sight. All
       you see is barren space, and you get a bad feeling in your
       stomach. Scarr's fleet arrives, and you realize that its a trap.
       Scarr's ship casts an energy net, and you have no choice but to 
       surrender.`;
      

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
      
           `Now is not the time to retreat. It will never end if you run now.
           This is your best chance at defending the universe, and if you flee you'll just
           be hunted down. You tug two switches located at the end of the dash, engaging
           combat procedures. Two energy miniguns deploy from the bottom of the craft, and
           the targeting systems come to life. You immediately notice that one 
           of Scarr's grunts has taken aim at the main police vessel, and you set off
           to intercept. Pushing the throttle harder than you ever have before and pulling 
           the trigger, you feel the miniguns rumble as they pre-fire at the estimated 
           coordinates of the enemy craft. Three direct hits, and the enemy ship immediately explodes 
           into a fiery ball. Relieved, you slow the ship down in search of the next target.
           Before you see it, however, Scarr's ship itself scorches past you, deploying a 
           space mine that immediately clings to the bottom of your ship. Before you have time 
           to react, it detonates. You and your vessel are erased forever.
           `
      
            // MAKE OPTIONS DISAPPEAR

            option14.style.display = 'none';
            option15.style.display = 'none';
         
        });}
        fightScarr();


// this function goes into the run from Scarr option (LOSS)
function runFromScarr() { 
    
            option15.addEventListener('click', () => {       
              
              
              // alter the master text
               document.getElementById("masterText").innerHTML = 
          
               ` THe police are heavily overpowered and severely outgunned.
               Fighting now would be handing the tesseract over. The ship startles 
               to life as you set off for the gate, dodging multiple explosions and searing energy 
               shards that are cast through through the battlefield. An enemy attempts to intercept 
               you, but is hastily shot down by a police crusader. You perform barrel roll after 
               barrel roll, tilting your wings to avoid debris and swirling to avoid thermal 
               missiles fired with you as the target. Your luck expires, however, and while you are 
               in proximity of the hypergate, you are struck by a bolt through the right wing. 
               Your ship spirals as you struggle to regain control, in which you nearly collide
               with a cracked in half police vessel. Upon activating the auxiliary thrusters, you 
               stabilize the vessel and jettison to the gate. Rumbling through, you immediately shut the
               lights off to conserve power and plot your next move. Almost instantly after,
               Lord Scarr follows through with his cannons already charged. His groggy and distorted 
               voice comes across your comms with a chilling yet simple message. "Pass the tesseract."
               Once again, you're faced with a critical decision that will affect trillions of lives.`;
          
           
               // alter the buttons
               document.getElementById("btn16").innerHTML = 
               `SURRENDER`
          
               document.getElementById("btn17").innerHTML = 
               `STAND GROUND AND FACE CONSEQUENCES`
             
               
            option14.style.display = 'none';
            option15.style.display = 'none';

            option16.style.display = 'initial';
            option17.style.display = 'initial';
     });}
runFromScarr();



// this function goes into the surrender option (LOSS)
 function surrender() { 
    
                option16.addEventListener('click', () => {       
                  
                  
                  // alter the master text
                   document.getElementById("masterText").innerHTML = 
              
                   ` You did all you could. You turn your ship off, and allow an energy
                   net to be cast over your vessel. Scarr's ship links to your vessel,
                   and he boards. You are tied up, and the tesseract is taken from your ship. 
                   You have failed.`
              
                    // MAKE OPTIONS DISAPPEAR
                    option16.style.display = 'none';
                    option17.style.display = 'none';
 });}
 surrender();
            

  
// this function goes into the stand ground option (WIN)
 function standGround() { 
    
    option17.addEventListener('click', () => {       
      
      
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       ` You'd rather die than give into evil. You made it this far. Surrendering
       is not an option. "You've made your decision", Scarr crackles across once again.
       You close your eyes as Scarr's cannons charge up, fully aware of what is to come next.
       Running isn't an option; your wing is far too damaged. Seconds before the bolt is fired,
       a flash of light overtakes your viewport. A laser bolt like lightning cracks across, destroying 
       Scarr's ship with it exploding into a fiery ball. Your own fleet arrives, linking to your
       ship and boarding. Your star commander steps on board as soldiers rush, taking the tesseract back
       aboard their own home ship. Congratulations, he states, "You have saved the universe."`
  
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

// instantiations of the classes
const Scarr = new LordScarr(true, "Scavenger", "cannons", "red", "Krishna");

const You = new Pilot("6'2", 29, Retriever, "Human", "Earth");

console.log(Scarr);
console.log(You);


// onClick="window.location.reload();



// hide button function
