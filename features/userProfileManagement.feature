Feature: User Profile Management

  Scenario: User edits their profile
    Given I am logged into my account
    When I navigate to my profile management page
    And I change my full name to 'John Smith'
    And I click on 'Save' button
    Then my profile should be updated with the new full name
