# Dirt-Finder
## Table of Contents
* [Basic Problem Domain](### Basic Problem Domain)
* [Welcome Screen](### Welcome)
* [Sign Up Page](### Sign Up Page)
* [Have Dirt/Need Dirt](### Have/Need Page)
* [Map Page](### Map Page)
* [About Page](### About Page)
* [Contact Page](### About Page)
* [Initial Data Required](### Initial Data Required)

### Basic Problem Domain
* Create a database that visually shows jobsites that have or need dirt
  * User Constructor (Group members have jobsites as preset instances)
   * Form validation to ensure that required data input is entered.
   * When User Form is Submitted a new User is created and added to local storage.
  * Sign in for users (to allow ownership of pin locations.)
    * Form with user email and password windows.
    * Form submittal compares input to global user email and password pairs and upon success creates an active user instance to give that user ownership of the site. 
  * Form to collect new pin data.
    * Checks local storage to make sure that active user exists.
      * If active user exists take them to pin data form.
      * If active user doesn't exist take them to User form
      * Form submittal:
        * Adds pin data as a child of user and posts pin data to a global array for the map to use to render data and 
        * Loads the map page. 
  * Map Page
    * When loaded renders stored pin data.
    * Green Pins = Need Dirt Pin
    * Red Pin = Have Dirt Pin
    * Stretch Goals: 
      * When Pin is selected show that pin's pin form data.
        * When contact email is selected open up email prompt with that contacts info filled out.
        * When site address is selected open up Google Maps with that pins address input.

### Welcome
* Welcome screen brief intro to problem domain. 
* Map showing current existing pins.
* Have Dirt/Need Dirt Button that takes user to [Have Dirt/Need Dirt](### Have/Need Page).

### Sign Up Page
* New Account Form Elements
  * User Name
  * User Phone Number
  * User Company Name
  * User Email
  * User Password
* New Account Form Workflow
  * Requirements:
    * User must input:
      * Name
      * Email
      * Password
    * Create Account Button
      * When pressed New Account Data is stored and new User is created.
      * Takes user to [Welcome Screen](### Welcome)

### Have/Need Page
* Create New Location Form
  * Checks if user has an account.
    * If no redirects to [Sign Up Page](### Sign Up Page)
    * If yes shows New Pin Form.
      * New Pin Form Elements
        * Pin Name
        * Pin Phone Number
        * Pin Company Name
        * Pin Email 
        * Have Need Radio Buttons
          * Have Dirt
          * Need Dirt
        * Pin Address
        * Pin Amount of Material
        * Type of Dirt Radio Buttons
          * Structural Material
          * Base Material
          * Topsoil Material
        * Pin Dirt Density
        * Import/Export Start Date
      * New Pin Form Workflow
        * Requirements:
          * User Must Input:
            * Pin Name
            * Pin Email
            * Pin Address
          * Post to Map Button
            * When pressed Pin Data is added to User Account Data and new Pin is created and posted to [Map Page](### Map Page).
            * Takes user to [Map Page](### Map Page) when pressed.


### Map Page
* Map showing current existing pins.
* Legend
  * Red Pins = Have Dirt
  * Green Pins = Need Dirt
* Have Dirt/Need Dirt Button that takes user to [Have Dirt/Need Dirt](### Have/Need Page).

### About Page
* About Page Elements
  * Jason
  * Reed
  * Diego
* About Page Workflow
  * Each person has a photo and bio.
  * Each person has links to their Linkedin and Github pages.

### Contact Page
* Contact information.
* Contact Email
* Comment Box that opens email prompt.

### Initial Data Required
* 5 user to demonstate login capabilities for presentation.
* 2 pins per user to demonstrate pin ownership or individual users.

