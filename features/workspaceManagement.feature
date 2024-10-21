Feature: Workspace Management

  Scenario: User changes the visibility of Workspace
    Given I am logged into my account
    And I am on 'Trello Workspace' page
    When I click on 'Change' button
    And I click on 'Public' button within the workspace visibility options
    Then the visibility of 'My Workspace' should be changed to 'Public'
