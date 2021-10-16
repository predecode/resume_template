import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  technical_skills = [
    {
      "id": 1,
      "key": "Operating System",
      "value": "Windows 7,8,10, Linux, Android, IOS"
    },
    {
      "id": 2,
      "key":"Database",
      "value": "Oracle 10g, Postgresql, Microsoft SQL Server"
    },
    {
      "id": 3,
      "key":"Languages",
      "value": "Core Java, SQL, Gherkin, HTML, JavaScript"
    },
    {
      "id": 4,
      "key":"Other",
      "value": "Other	Eclipse IDE, Selenium WebDriver, Selenium Grid, Appium, UiAutomater Viewer, Maven, Jenkins, RTC, Bugzilla, QC, JUnit, Cucumber, Jira, Git, Postman, Rest assured, JMeter, Visual studio code, Puppeteer, Chai, mocha"
    }
  ]

  functional_skills = [
    {
      "id": 1,
      "key":"Management and Leadership Skills",
      "value": "Management and Leadership Skills Ability to deal with new requirements, new changes within the working system, decision making capabilities, Technical Leader, Capable of leading and managing team resources, Project Management, Planning, Development"
    },
    {
      "id": 2,
      "key":"Training and Development",
      "value": "Training and Development Developed automation framework and given knowledge transfer sessions"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackById(index, skill) {
    return skill.id;
  }

}
