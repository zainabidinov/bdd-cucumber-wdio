Feature: Search Board

  Scenario: User searches for an existing board
    Given I am logged into my account
    When I enter 'Test Board' in the search bar
    Then the board 'Test Board' should appear in the search results
