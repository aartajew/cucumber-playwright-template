Feature: Failing demo

  Scenario: Undefined demo
    When a step is undefined

  Scenario: Pending demo
    When I invoke pending step

  @only
  Scenario: Failing demo
    When a user has navigated to the Playwright homepage
    Then title "Nebuchadnezzar" should be displayed on the webUI

  @flaky @only
  Scenario: Flaky demo
    When I invoke flaky step
