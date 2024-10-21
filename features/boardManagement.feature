Feature: Board Management

  Scenario: User creates a new Board
    Given I am logged into my account
    When I click on the 'Create new board' button
    And I enter 'Test Board' as the board title
    And I click the 'Create' button
    Then a new board named 'Test Board' should be created

