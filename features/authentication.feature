Feature: User authentication

  Scenario: Existing user signs in to the system
    Given I am on the Trello login page
    When I enter my email address and password
    And I click the "Log in" button
    Then I should be redirected to the home page
