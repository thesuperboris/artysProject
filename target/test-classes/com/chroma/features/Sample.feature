Feature: Sample Feature

  @Test1 @Regression
  Scenario: Valid credentials login
    Given a CTSMS user is on the home page "https://mexil.it/chroma_tech_academy/test/site/login"
    When the user logs in with valid credentials username "general@teacher.com" and password "123456"
    Then user is on the dashboard page