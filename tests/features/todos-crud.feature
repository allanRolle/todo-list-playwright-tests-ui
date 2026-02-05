Feature: CRUD actions with the todos

  Background:
    Given I am on the main page

  Scenario: Add a todo
    When I enter a todo
    Then I should see the new todo

  Scenario: Edit a todo

    Given A todo has been added
    When I edit a todo
    Then I should see the updated todo

  Scenario: Delete a todo
    Given A todo has been added
    When  I click on the delete button
    Then  The todo should be deleted  
