Feature: Passing demo

  @only
  Scenario: Passing demo
    When a user has navigated to the Playwright homepage
    Then title "Playwright" should be displayed on the webUI
    When a user clicks on "Get started" button
    Then title "Installation" should be displayed on the webUI

  @skip
  Scenario: Skipped demo
    When a user has navigated to the Playwright homepage

  @ignore
  Scenario: Ignored demo
    When a user has navigated to the Playwright homepage
