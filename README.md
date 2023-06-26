Approach to the Space Text Adventure Game:

 Step 1: Construct the divs, UI, and overall structure of the program.
 
 Step 2: Research how I am going to hide text inside of options (so that when I select an option, I am presented with a path of other options.) I've decided to hardcode everything, and attempt to create a entirely new instance everytime I click the button.
 I'm going to create different categories, each function is going to be tied to a specific prompt.
  I'm now weighing the pros and cons of utilizing multiple if statements vs multiple functions.

  I need to transform the text of the container, value of each of the buttons when a button is selected, and also set the button up for the next time it is clicked.







  function viewAst() {     
    
    
    if () {
        
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

    

     }};

viewAst();