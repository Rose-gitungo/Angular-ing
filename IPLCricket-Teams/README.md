# The frontend application will be implemented using Angular.
 For managing data, we'll utilize JSON Server to create a pseudo API that simulates server responses with JSON data.
JSON Server will handle data management tasks such as CRUD operations, allowing us to
interact with data without the need for a backend server

## Design UI for all web pages, including the following components:
### Login Component
Responsible for user authentication.
Provides a form for users to enter their credentials and log in.
Sends login requests to the server or handles authentication locally if using a mock
server like JSON Server.
### Registration Component
Allows new users to register for the application.
Provides a form for users to enter their registration details such as username, email,
and password.
Sends registration requests to the server or handles registration locally if applicable.
### Logout Component
Handles user logout functionality.
Allows users to log out of the application and clear their session or authentication
status.
### Error Component
Displays error messages to users in case of any unexpected errors or failures.
Provides a consistent UI for displaying error messages throughout the application.
### Dashboard Component
Represents the main dashboard of the application.
Displays relevant information and data summary.
May contain links or widgets to navigate to other sections of the application.
### Team Component
Displays a list of teams available in the application.
Allows users to view details of each team and navigate to the TeamDetailsComponent
for more information.
### Team Details Component
Displays detailed information about a specific team.
Shows team members, statistics, and other relevant details.
### Player Component
Represents a single player within a team.
Displays player information such as name, position, and statistics.
May include functionality for editing player details or viewing player profiles.
### Navbar Component
Provides navigation links and options for users to navigate through the application.
Typically displayed at the top of the page and contains links to different sections or
pages of the application.
## On the homepage
display a card-based grid of all the teams. Clicking on a team card navigates
the user to the team details page.
## The Team Details Page will have the following information:
Team Name
Team Icon
Player Count
Top Batsman
Top Bowler
Championship Won Count
Card grid with all the players.
## Player card should have the following information:
Full Name
Photo
Team
Price
Playing Status (Playing or On-bench)
Role (Batsman, Bowler, or All-rounder).
## Clicking on a player card should navigate to the player details page. 
The player details page
will have the same details as the card but with a different design.
## From the homepage, users can search players from different teams by entering a team name
(e.g., MI for Mumbai Indians, RR for Rajasthan Royals). Display all players present in the same
team searched by the user.
## The top bar should have a button allowing users to add new teams and new players. When a
new team/player is added, it should be immediately visible on the screen.