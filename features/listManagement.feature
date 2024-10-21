Feature: List Management

  Scenario: User creates a list on a board
    Given I am logged into my account
    And I am on the 'Test Board' board
    When I click the 'Add a list' button
    And I enter 'To Do' as the list name
    And I click the 'Add List' button
    Then a new list named 'To Do' should be added to the 'Test Board' board