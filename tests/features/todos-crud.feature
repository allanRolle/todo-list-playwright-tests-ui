Feature: CRUD actions with the todos

  Background:
    Given I am on the main page

  Scenario: Add a todo
    When I enter a todo
    Then I should see the new todo

  Scenario: Edit a todo

    Given A todo has been added
    When  I edit a todo
    Then  I should see the updated todo

  Scenario: Delete a todo
    Given A todo has been added
    When  I click on the delete button
    Then  The todo should be deleted 

  Scenario: Filter a list of todos
    Given Multiple todos have been added   
    When  I click on the checkbox to toggle all todos
    Then  All todos are selected
    When  I uncheck a todo
    Then  There should be 4 todos selected
    When  I click on the button ALL
    Then  There should be 5 todos visible
    When  I click on the button ACTIVE
    Then  There should be one todo visible
    When  I click on the button COMPLETED
    Then  There should be 4 todos visible
    When  I click on the button CLEAR COMPLETED
    Then  There should be 1 todo visible