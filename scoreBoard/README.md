# ESPN Score Board Challenge :

The objective of the challenge is to create a HTML5 scoreboard component using a given JSON data file.

##Specifications:

The Scoreboard should be 970px wide and 66px high.

##Your work will be evaluated on the following criteria:

The Scoreboard should be associated with a brand (we would like something nicely designed / laid out.)

Some interactivity preferred (photo gallery, mini game, etc.) While we aren't expecting production-quality polish, we are expecting more than just a basic HTML list / table.

Bonus points for solid test coverage.

## My solution

I decided to try and build a dynamic solution using React / Redux framework in order to simulate a connection with an API that sends the data to the Scoreboard. I wanted the solution to be able to respond and change dynamically in the future according to new streamed information from the server.

##Scoreboard Features:

### MLB branding , including logo and corresponding color schemes.

### Filter between scheduled games and live and final games.

### Live games show dynamically the current score , current inning, which based are currently occupied and count outs.
![Live Game](https://github.com/talgoldfus/ESPN-Score-Board/blob/master/Screenshots/Live_and_Final_games.png)

### On mouse hover the live game shows a link to the Play By Play ESPN page as well as more details feature which displays all the above information with the addition of the teams records pitcher and batter (changes dynamically upon new information from the server) and live commentators feed.
![Full Live Game](https://github.com/talgoldfus/ESPN-Score-Board/blob/master/Screenshots/Full_Live_game_feature.png)

###Final games show the final score and highlight the winning team.
![Final Game](https://github.com/talgoldfus/ESPN-Score-Board/blob/master/Screenshots/Live_and_Final_games.png)

##On mouse hover the final games shows links to the recap and Box Score ESPN pages.
![Final Game Hover ](https://github.com/talgoldfus/ESPN-Score-Board/blob/master/Screenshots/Final_game_hover.png)

###Scheduled games show the day and time of the upcoming game and each team's record.
![Scheduled Game](https://github.com/talgoldfus/ESPN-Score-Board/blob/master/Screenshots/Scheduled_games.png)

###On mouse hover the scheduled games shows links to the conversation ESPN page.
![Scheduled Game Hover ](https://github.com/talgoldfus/ESPN-Score-Board/blob/master/Screenshots/Scheduled_game_hover.png)

### Installing and testing the challenge

A)Clone the repo to your local machine.
B)Cd into the scoreBoard folder and run npm install ($ npm install)
C)Once npm install has ended run the tests run the npm test command ($ npm test ).
D)To see the Scoreboard start the npm server ($ npm start). If the browser hasn't opened automatically open your browser in http://localhost:3000/
