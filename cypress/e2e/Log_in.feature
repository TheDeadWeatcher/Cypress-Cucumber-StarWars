Feature: StarWars - Sign in

    Scenario: Valid Correct Log In To The Account
        Given I navigate to the starwars homepage
        When I click on the sign in button
        And I type e-mail adress
        And I click on continue button
        And I type password
        Then