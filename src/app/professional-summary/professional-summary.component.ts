import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.css']
})
export class ProfessionalSummaryComponent implements OnInit {

  summaries = [
    {
      "id": 1,
      "value": "A technocrat with <b>around 7 years</b> of qualitative & rich experience in <b>SDET.</b>"
    },
    {
      "id": 2,
      "value": "Expertise in automation testing using <b>Selenium WebDriver, Selenium Grid, Appium, Java, TestNG, Cucumber, Maven, Jenkins, REST Assured , GIT and JMeter.</b>"
    },
    {
      "id": 3,
      "value": "Implemented <b>Modular Driven, Hybrid</b> and <b>BDD</b> framework."
    },
    {
      "id": 4,
      "value": "Experience in developing a framework using <b>Page Object Model.</b>"
    },
    {
      "id": 5,
      "value": "Expert in developing BDD scripts with <b>Cucumber</b> and writing step definitions for behavior."
    },
    {
      "id": 6,
      "value": "Well versed with <b>TestNG, Cucmber</b> and <b>Extent report</b> and <b>LambdaTest.</b>"
    },
    {
      "id": 7,
      "value": "Having good experience in <b>REST web service</b> testing using <b>REST Assured</b> and <b>Postman.</b>"
    },
    {
      "id": 8,
      "value": "Experience in identifying web elements using <b>Locators.</b>"
    },
    {
      "id": 9,
      "value": "Experience in <b>team building, hiring</b> and <b>Onboarding.</b>"
    },
    {
      "id": 10,
      "value": "Experience in apache <b>POI API </b>and <b>XML.</b>"
    },
    {
      "id": 11,
      "value": "Having good experience in <b>HTML, CSS, JavaScript</b> and <b>Bootstrap.</b>"
    },
    {
      "id": 12,
      "value": "Experience in <b>Jenkins, Bamboo</b> and <b>Microsoft Azure.</b>"
    },
    {
      "id": 13,
      "value": "Worked on mobile app testing using <b>Appium</b> on <b>Android</b> and <b>iOS platform.</b>"
    },
    {
      "id": 14,
      "value": "Worked on <b>AutoIt</b> and <b>Sikuli.</b>"
    },
    {
      "id": 15,
      "value": "Experience in <b>Log4j</b> logging framework."
    },
    {
      "id": 16,
      "value": "Worked on build tool <b>Maven.</b>"
    },
    {
      "id": 17,
      "value": "Expertise in failure analysis and <b>debugging.</b>"
    },
    {
      "id": 18,
      "value": "Maintained the Selenium & Java automation code and resources in source controls like, <b>GIT, RTC.</b>"
    },
    {
      "id": 19,
      "value": "Having experience in performance testing of <b>API</b> using <b>JMeter.</b>"
    },
    {
      "id": 20,
      "value": "Given <b>Selenium training to many project teams and organization’s employees.</b>"
    },
    {
      "id": 21,
      "value": "Experience in developing a framework using <b>JavaScript, Puppeteer, Chai, mocha.</b>"
    },
    {
      "id": 22,
      "value": "Expert in <b>exploratory, accessibility and device testing.</b>"
    },
    {
      "id": 23,
      "value": "Performed compatibility testing on Chrome, IE, Firefox, Safari, <b>IOS devices, Android devices.</b>"
    },
    {
      "id": 24,
      "value": "Experience in <b>GUI, Functional Testing,</b> Integration Testing, System Testing, Regression Testing."
    },
    {
      "id": 25,
      "value": "Expert in working in different Testing Methodologies like Agile – <b>Scrum Model,</b> Waterfall."
    },
    {
      "id": 26,
      "value": "Having knowledge in <b>Core Java, Collection framework, Data-Structure</b> and <b>SQL.</b>"
    },
    {
      "id": 27,
      "value": "Experience in <b>Banking and Financial services, Health Care, Logistic/ Transportation</b> domain."
    },
    {
      "id": 28,
      "value": "Expertise in Understanding and Analyzing Test Requirements, <b>Test Planning, Test Design,</b> Test Execution, Defect Reporting & Tracking."
    },
    {
      "id": 29,
      "value": "Having good experience in <b>Jira, QC, Qase, TestRail  and Bugzilla.</b>"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index, summary) {
    return summary.id;
  }

}
