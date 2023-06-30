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


// option2.style.display = 'none';
// option3.style.display = 'none';
// option4.style.display = 'none';
// option5.style.display = 'none';
// option6.style.display = 'none';
// option7.style.display = 'none';
// option8.style.display = 'none';
// option9.style.display = 'none';
// option10.style.display = 'none';
// option11.style.display = 'none';
// option12.style.display = 'none';
// option13.style.display = 'none';
// option14.style.display = 'none';
// option15.style.display = 'none';
// option16.style.display = 'none';
// option17.style.display = 'none';



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



     document.getElementById("btn2").innerHTML = 
     `Attempt to fly across open space to a hypergate and 
     risk being captured`

     document.getElementById("btn3").innerHTML =
     `Attempt to hide in nearby asteroid field`


option1.style.display = 'none';
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
     
});}
acceptMission();




// this button will allow you to select the hypergate option
  function viewHypergate() {     
     option2.addEventListener('click', () => {       
      
       

        // option2.style.display = 'none';
        // option3.style.display = 'none';
        // option5.style.display = 'none';
        // option6.style.display = 'none';
        // option9.style.display = 'none';
        // option10.style.display = 'none';
        // option11.style.display = 'none';
        // option12.style.display = 'none';
        // option13.style.display = 'none';
        // option14.style.display = 'none';
        // option15.style.display = 'none';
        // option16.style.display = 'none';
        // option17.style.display = 'none';
        
      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You pull back the throttle, accelerating amongst the
       stars. Lord Scarr and his troops are firing laser 
       bolts, barely grazing your wings. You make it into 
       the hypergate and accelerate to the next solar system.`;
  
   
       // alter the buttons
       document.getElementById("btn7").innerHTML = 
       `Fly towards the closest planet present`
  
       document.getElementById("btn8").innerHTML = 
       `Send out an SOS to your team and wait`

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
  
       `The asteroids FIELD`;
       

       // alter the buttons
       document.getElementById("btn4").innerHTML = 
       `Enter the black hole`
  
       document.getElementById("btn5").innerHTML = 
       `Send an SOS Signal and wait`
     

       option4.style.display = 'initial';
      option5.style.display = 'initial';
       
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

       option8.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn9").innerHTML = 
       `FLY IN AND REQUEST ASSISTANCE`
  
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
    
         `You pull into the atmosphere and Lord Scarr
          shoots you down`;
    
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
  
       `BLACCCCCC`;
  
       option4.style.display = 'none';

       option5.style.display = 'none';
   
       // alter the buttons
       document.getElementById("btn6").innerHTML = 
       `Wait for warp drive to recharge`
  
       document.getElementById("btn11").innerHTML = 
       `Make communication with nearby pirate ship`
     

       option6.style.display = 'initial';
      option11.style.display = 'initial';


    });}
    enterBlackHole();








// this function sends an SOS Signal (FIRST ONE) (LOSS)
function sendSos1() {  
    option5.addEventListener('click', () => {       
      
      

      // alter the master text
       document.getElementById("masterText").innerHTML = 
  
       `You send an sos signal, but a scavenger robot spots you 
       and snitches. You surrender`;
  
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
      
           `They are pirates! You get executed.`
      
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
          
               `As the warp drive charges, your location is pinged
               and you get surrounded and captured.`
          
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

// onClick="window.location.reload();



// hide button function
