SHOT PLOT




Elevator Pitch:
As an avid hunter, I am starting to teach my little sister how to hunt. However, she is often discouraged by the amount of foreknowledge that often turns into guesswork that is required when it comes to shooting accurately in the wild. This startup helps close the experience gap between new and seasoned hunters. WHen the user calibrates the startup by answering a few simple questions, the user will be shown on an interactive map how far their planned shot will be. Additionally, they will be shown where to hold on the target with a strategically placed dot on an image of a reticle. This eliminates any guess work that may frustrate a beginner hunter. 

Key Features:
  1.  Secure login through https. 
  2. The user will designate several specifications such as the barrel length of their gun, the ammunition they are using, the date and time of the hunt, and the location of the shot.
  3. The startup will feature an interactive map that the user will be able to use to plan precisely where the shot will take place. '
  4. The startup will output the distance the bullet will travel, the amount of bullet drop expected based on the humidity and temperature of the day, and the amount of windage the shooter will have to compensate due to weather conditions.
  5. The startup will output a dot on an image of a reticle showing where the user should hold on the target, based on the input given. 

Description of how I will use each technology:
  1. HTML will be used to build the framework required for the startup.
  2. CSS will be used to make it all look visualy appealing.
  3. JavaScript will be used to provide security and to manipulate teh map and visuals.
  4. The startup will use authentication by allowing each new user to create a new account. This will enable each user to save their new "shots" and visit old ones.
  3. The startup will use a database in the form of the interactive map, and the formulas required to calculate bullet drop.
  4. The startup will use WebSocket data in the form of predicted weather/windage calculations that are accurate to the half hour. 

Rough sketch:




you may be wondering why everything is coming so late. i made a note explaining why in the "fortheta" page. I have learned a lot about html and such in this assignment. i hope that next time i don;t have to do this in so little time" in terms of html and css adn javascript, this was built from the ground up in the last few weeks. 
in html i added head body and div containers, along with input and output boxes and images
in css i added styles to position everything on the screen and allow the webpage to change with the size of the window. 
in javascript i added the fetch requests to several csv files that determine the output given back to the user. I also added the basis for a login mechanism and a websocket request. included was an active database listing all of the users inputs and the connected outputs.
i also got to add a bunch of confusing code that made my website available at "http://localhost:3000/index.html" with a quote that showed up in the header of the login page. 
it looks like i am having some troubles with the mongodb database, hwoever i am getting the user authentication to work ok. it works just fine when it is run through the local host and such.

yo what the heck all of a sudden my startup isnt showing up in the browser. 
