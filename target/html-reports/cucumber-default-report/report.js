$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/chroma/features/Sample.feature");
formatter.feature({
  "name": "Sample Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid credentials login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a CTSMS user is on the home page \"https://mexil.it/chroma_tech_academy/test/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.a_CTSMS_user_is_on_the_home_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.the_user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});