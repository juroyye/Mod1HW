Approach to the Space Text Adventure Game:

 Step 1: Construct the divs, UI, and overall structure of the program.
 
 Step 2: Research how I am going to hide text inside of options (so that when I select an option, I am presented with a path of other options.) I've decided to hardcode everything, and attempt to create a entirely new instance everytime I click the button.
 I'm going to create different categories, each function is going to be tied to a specific prompt.
  I'm now weighing the pros and cons of utilizing multiple if statements vs multiple functions.

  I need to transform the text of the container, value of each of the buttons when a button is selected, and also set the button up for the next time it is clicked.
I am going to create well over the amount of boxes I need and create a function that only displays the boxes with text inside.

CREATE DELETING/DISAPPEARING BOXES FUNCTION NEXT, TEST TO SEE IF IT WORKS.
IF SO, CREATE MORE BOXES, ASSIGN VALUES, AND MAKE FINISHING TOUCHES.


Option Tree:

Accept Mission:

   1. Asteroid field:

    1a. Send an SOS signal and wait: (LOSS)

         A scavenger robot spots you and alerts that you're hiding. You are surrounded by enemy forces and have no ther choice but to surrender.


    1b. Enter a black hole

         Wait for warp drive to recharge: (LOSS)

         They pinged your location and surround your ship, forcing you to surrender.

         Make communication with a nearby ship in hope that they will help you. (LOSS)

         The ship is a pirate/pillaging vessel. They board your ship, tie you up, and steal the energy tesseract.

//////////////////////////////////////////////////////////////////////////////////

   2. Hypergate:
    
    2a. FLy towards the closest planet so their radars can't detect you:
       
           Land on their planet and request assistance: (LOSS)

           As you enter the atmosphere, Scarr's military forces appear from the clouds. You try to flee, but they ultimately shoot you down, retrieving the tesseract in the process.

//////////////////////////////////////////////////////////////////////////////////

           - Go through next hypergate:

            Reach out to the policing division and request protection as you return to home base.
                 
                   You gain protection, but Scarr's ships detect a massive envoy of ships moving on his radar. He pinpoints your position and they arrive through the hypergates and attack.

                      Fight: (LOSS)

                      Shot down in battle. 

                      Run: 

                      You try to flee and manage to escape through a hyper gate. 
                      Upon leaving the gate and AFTER sending an SOS, your ship goes dead silent. Everything is dead, you're in pitch black space. 
                      One of Scarr's ships follows you through the portal. About to destroy you and salvage the tesseract, you're faced with a decision.

                        Surrender: (LOSS)

                        They board ship, tie you up, take tesseract and leave through gate. Moments later, your forces of good arrive. You tell them you gave the tesseract up. The entire team breaks out into a frenzy of emotions. The universe is doomed.

                        Refuse and face the consequences: (WIN)

                        As the cannon of Lord Scarr's ship heats up and the bolt is nearly fired, a shimmer of light flashes through space. His ship instantly shuts off. A laser bolt that appears as lightning strikes through his ship, causing it to instantly explode in a fiery ball. Your forces have arrived. They board your ship and secure the tesseract from you. "Congratulations pilot, you have saved the universe."

            Respond to an SOS call in your sector:

               It was a trap sent up by Lord Scarr. The tesseract is taken.

    2b. Send out an SOS signal and wait:
 
 Ping your location and you surrender.

     
       
 




 // if(option1.textContent.trim () === "") {
//     option1.style.display = 'none';
// }

// if(option2.textContent.trim () === "") {
//     option2.style.display = 'none';
// }

// if(option3.textContent.trim () === "") {
//     option3.style.display = 'none';
// }

// if(option4.textContent.trim () === "") {
//     option4.style.display = 'none';
// }

// if(option5.textContent.trim () === "") {
//     option5.style.display = 'none';
// }

// if(option6.textContent.trim () === "") {
//     option6.style.display = 'none';
// }

// if(option7.textContent.trim () === "") {
//     option7.style.display = 'none';
// }
// if(option8.textContent.trim () === "") {
//     option8.style.display = 'none';
// }
// if(option9.textContent.trim () === "") {
//     option9.style.display = 'none';
// }
// if(option10.textContent.trim () === "") {
//     option10.style.display = 'none';
// }

// if(option11.textContent.trim () === "") {
//     option11.style.display = 'none';
// }

// if(option12.textContent.trim () === "") {
//     option12.style.display = 'none';
// }

// if(option13.textContent.trim () === "") {
//     option13.style.display = 'none';
// }

// if(option14.textContent.trim () === "") {
//     option14.style.display = 'none';
// }

// if(option15.textContent.trim () === "") {
//     option15.style.display = 'none';
// }

// if(option16.textContent.trim () === "") {
//     option16.style.display = 'none';
// }





 //  document.getElementById("btn8").innerHTML = 
        //  ``
    
        //  document.getElementById("btn9").innerHTML = 
        //  ``

        //  document.getElementById("btn10").innerHTML = 
        //  ``
  
        //  document.getElementById("btn4").innerHTML = 
        //  ``
    
        //  document.getElementById("btn5").innerHTML = 
        //  ``
  
        //  document.getElementById("btn3").innerHTML = 
        //  ``
  
        //  document.getElementById("btn2").innerHTML = 
        //  ``
        //  document.getElementById("btn7").innerHTML = 
        //  ``
   


option7.style.display = 'initial';
option8.style.display = 'initial';

option7.style.display = 'none';
option8.style.display = 'none';