Feature: Card Management

  Scenario: User creates a card in a list
    Given I am logged into my account
    Given I view the 'To Do' list on the 'Test Board' board
    When I click on the 'Add a card' button
    And I enter 'Shopping Cart Feature' as the card title
    And I click the 'Add Card' button
    Then a new card named 'Shopping Cart Feature' should be added to the 'To Do' list
