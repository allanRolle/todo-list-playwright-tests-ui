Feature: CRUD actions with the todos

  Background:
    Given I am on the main page

  Scenario: Add a todo
    When I enter a todo
    Then I should see the new todo
