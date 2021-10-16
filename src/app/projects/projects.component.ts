import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  i = 2;
  companies = [
    {
      "title": "Telus International – Senior SDET (Jan 2021 – till now)",
      "projects": [
        {
          "id": 1,
          "name": "GT Stdio",
          "duration": "Jan 2021 to till now",
          "position": "Senior SDET",
          "companyName": "Telus International",
          "description": "GT Studio is a scalable, web-based data labeling platform designed to empower ML teams. GT Studio has two main components, GT Create and GT Manage. GT Manage interface where user can set up projects, invite teammates, create labeling workflows, and upload data.Once the projects are configured, user can navigate to the GT Create interface where you can actually start labeling their data faster than any other open- source tools.",
          "url": "",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Working on planning for ​quarter goals, ​Short ​term goals and ​long ​term goals for ​QA Team and thriving the team to achieve goals."
            },
            {
              "id": 2,
              "value": "Have taken active participation in tweaking ​Release​ Cycles."
            },
            {
              "id": 3,
              "value": "Have worked on setting up​ QA processes."
            },
            {
              "id": 4,
              "value": "Have worked on Planning of creation of ​Automation​ suite for regression tests."
            },
            {
              "id": 5,
              "value": "Worked on team building, hiring and Onboarding."
            },
            {
              "id": 6,
              "value": "Have mentored SDET engineers on the ​product and ​automation framework​."
            }
          ],
          "environment": "Mac OS, Web application, Selenium WebDriver, LambdaTest, AWS, Gradle, Java, linear, Postman, Rest assured."
        }
      ]
    },
    {
      "title": "Optym, India – Senior QA Engineer (April 2020 – Jan 2021)",
      "projects": [
        {
          "id": this.i,
          "name": "RouteMax",
          "duration": "Apr 2020 to Jan 2021",
          "position": "Senior QA Engineer",
          "companyName": "Optym",
          "description": "RouteMAX is a dynamic route optimization software designed to streamline and speed pickup and delivery operations for the less-than-truckload (LTL) industry.",
          "url": "https://routemax.com/",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Responsible for UI, Functional, Regression, UAT, Engine and automation testing of RouteMax project"
            },
            {
              "id": 2,
              "value": "Handling deployment in Test environment."
            },
            {
              "id": 3,
              "value": "Test Planning & management."
            },
            {
              "id": 4,
              "value": "Defect detection, reporting and tracking."
            },
            {
              "id": 5,
              "value": "Developing Test scripts"
            }
          ],
          "environment": "Windows 10, Android, Web application, JavaScript, Puppeteer, Chai, mocha, Microsoft Azure, Postman, Microsoft SQL Server."
        }
      ]
    },
    {
      "title": "Marlabs – Senior Software Engineer (Mar 2018 – Mar 2020)",
      "projects": [
        {
          "id": this.i + 1,
          "name": "HSBC Term Life Insurance",
          "duration": "Jun 2019 to Mar 2020",
          "position": "Senior Software Engineer",
          "companyName": "Client: HSBC",
          "description": "HSBC Term Protector is a term life insurance plan with no savings element underwritten by HSBC Life (International) Limited. It is not a bank deposit or bank savings plan.",
          "url": "https://www.hsbc.com.hk/insurance/products/life/term-protector/",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Working on Agile methodology, Involved in Sprint Planning, Scrum and Retrospective meetings."
            },
            {
              "id": 2,
              "value": "Designed and implemented cucumber framework for Term Life project."
            },
            {
              "id": 3,
              "value": "Working on creating automation test scripts using selenium, cucumber."
            },
            {
              "id": 4,
              "value": "Used Gherkin languages to write features and scenarios."
            },
            {
              "id": 5,
              "value": "Involved in project/effort estimation for each project task."
            },
            {
              "id": 6,
              "value": "Working on web service automation using Rest assured."
            },
            {
              "id": 7,
              "value": "Managed a team of four QA’s in India and China."
            },
            {
              "id": 8,
              "value": "Working on performance testing using JMeter."
            },
            {
              "id": 9,
              "value": "Execution of test scripts on Chrome, IE, Firefox  and Android mobile device."
            },
            {
              "id": 10,
              "value": "Reporting and tracking the Bug using Jira."
            },
            {
              "id": 11,
              "value": "Provided KT – Knowledge Transfer sessions for the members joining the team."
            }
          ],
          "environment": "Windows 10 , IOS, Android,  Web application, Selenium WebDriver, Selenium Grid, Appium ,Cucumber, Apache Maven, Java, Jenkins, Jira, Postman, Rest assured and JMeter."
        },
        {
          "id": this.i + 2,
          "name": "HSBC FirstSave USD Life Insurance",
          "duration": "Sep 2018 to May 2019",
          "position": "Senior Software Engineer",
          "companyName": "Client: HSBC",
          "description": "Self-selected sustainable FirstSave digital life insurance product – 2 years of premiums and 5 years policy terms with a guaranteed return 2.3%. There are multiple features which we have given to our Hong Kong customer “Pay monthly” or “Pay annually”, Pay by credit card.",
          "url": "https://retailbank.hsbc.com.hk/ins/en/savings-and-investment-plans/first-save-insurance-plan/",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Worked on Agile methodology, Involved in Sprint Planning, Scrum and Retrospective meetings."
            },
            {
              "id": 2,
              "value": "Designed and implemented cucumber framework for FirstSave project."
            },
            {
              "id": 3,
              "value": "Worked on creating automation test scripts using selenium, cucumber."
            },
            {
              "id": 4,
              "value": "Used Gherkin languages to write features and scenarios."
            },
            {
              "id": 5,
              "value": "Involved in project/effort estimation for each project task."
            },
            {
              "id": 6,
              "value": "Worked on web service automation using Rest assured."
            },
            {
              "id": 7,
              "value": "Reporting and tracking the Bug using Jira."
            },
            {
              "id": 8,
              "value": "Provided KT – Knowledge Transfer sessions for the members joining the team."
            }
          ],
          "environment": "Windows 8 , IOS, Android,  Web application, Selenium WebDriver, Selenium Grid, Cucumber, Apache Maven, Java, Jenkins, Jira, Postman, Rest assured."
        },
        {
          "id": this.i + 3,
          "name": "HSBC TargetSave RMB Life Insurance",
          "duration": "Mar 2018 to Sep 2018",
          "position": "Senior Software Engineer",
          "companyName": "Client: HSBC",
          "description": "HSBC TargetSave RMB digital life insurance product -5 years policy terms with a guaranteed return 125%. There are multiple features which we have given to our customer like pay by credit card or bank account, year wise accidental death benefit, death benefit, terminal illness benefit table and graphs analysis.",
          "url": "",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Worked on Agile methodology"
            },
            {
              "id": 2,
              "value": "Designed and implemented cucumber framework for TargetSave project."
            },
            {
              "id": 3,
              "value": "Worked on creating automation test scripts using selenium, cucumber."
            },
            {
              "id": 4,
              "value": "Used Gherkin languages to write features and scenarios."
            },
            {
              "id": 5,
              "value": "Executed various test suites on daily basis."
            },
            {
              "id": 6,
              "value": "Involved in project/effort estimation for each project task."
            },
            {
              "id": 7,
              "value": "Worked on web service automation using Rest assured."
            },
            {
              "id": 8,
              "value": "Reporting and tracking the Bug using Jira."
            }
          ],
          "environment": "Windows 7, IOS, Android,  Web application, Selenium WebDriver, Selenium Grid, Cucumber, Apache Maven, Java, Jenkins, Jira, Postman, Rest assured."
        }
      ]
    },
    {
      "title": "Capgemini – Associate Consultant (Sep 2016 – Mar 2018)",
      "projects": [
        {
          "id": this.i + 4,
          "name": "Python and Opee – ANZ",
          "duration": "Sep 2017 to Mar 2018",
          "position": "Automation Test Engineer",
          "companyName": "Client: ANZ Bank",
          "description": "Client User functionality through Payments Transaction Manager (PYTHON) – using which the clients can originate cash management transactions and view the transaction status along with reports. Bank User functionality through Operations Payments Entry Enrichment(OPEE) – using which the Bank admin can process the transactions for the customers as required.These applications are in-house build by ANZ.",
          "url": "",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Prepared and executed test scripts using Selenium."
            },
            {
              "id": 2,
              "value": "Optimized old test scripts."
            },
            {
              "id": 3,
              "value": "Executed various test suites on daily basis with the help of Jenkins tool."
            },
            {
              "id": 4,
              "value": "Implemented re - run concept through Jenkins for failed test scripts."
            },
            {
              "id": 5,
              "value": "Implemented selenium grid in the existing framework."
            },
            {
              "id": 6,
              "value": "Worked on framework implementation and enhancement."
            },
            {
              "id": 7,
              "value": "Maintain Framework(Updating object Repository & test data)."
            },
            {
              "id": 8,
              "value": "Logging defects in defect tracking tool for failed scenario."
            },
            {
              "id": 9,
              "value": "Preparation of daily project status report & defect report."
            },
            {
              "id": 10,
              "value": "Involved in project / effort estimation for each project task."
            },
            {
              "id": 11,
              "value": "Provided KT – Knowledge Transfer sessions for the members joining the team."
            }
          ],
          "environment": "Windows 7, Web application, Selenium WebDriver, Selenium Grid, TestNG framework, Apache Maven, Java, Jenkins, ALM."
        },
        {
          "id": this.i + 5,
          "name": "Global Service Platform – HSBC",
          "duration": "Sep 2016 to Aug 2017",
          "position": "Automation Test Engineer",
          "companyName": "Client:  HSBC",
          "description": "Global Service platform is about conversing varied retail banking into common platform. It provide various types of services to end user into a single application like Move Money, Money Management, Account Opening, Account Management, Communication, Payments with single login. GSP is broadly categories into various projects based on country. I worked on Honk Kong release for GSP.",
          "url": "",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Worked as a Team Lead for HK entity."
            },
            {
              "id": 2,
              "value": "Executed tasks related to stand up meetings, daily update calls, regression tests and various test scripts creation."
            },
            {
              "id": 3,
              "value": "Developed Automation test scripts for different Test Scenarios covering all aspects of project functionality and flows."
            },
            {
              "id": 4,
              "value": "Involved in Automation Environment setup using Eclipse, Java, Selenium WebDriver jars and TestNG."
            },
            {
              "id": 5,
              "value": "Identified and documented defects using HP ALM, Tracking the status of the bugs."
            },
            {
              "id": 6,
              "value": "Worked closely with clients and developers to ensure application development meets with the user expectations."
            },
            {
              "id": 7,
              "value": "Provided KT – Knowledge Transfer sessions for the members joining the team."
            }
          ],
          "environment": "Windows 7, Selenium WebDriver, Selenium Grid, TestNG, Maven, Java, Jenkins, ALM."
        }
      ]
    },
    {
      "title": "iTech Workshop Private Limited – Software Test Engineer (Mar 2015 – Jun 2016)",
      "projects": [
        {
          "id": this.i + 6,
          "name": "expEDIum Medical Billing(eMB)",
          "duration": "Mar 2015 to Jun 2016",
          "position": "Automation Test Engineer",
          "companyName": "iTech Workshop Pvt. Ltd.",
          "description": "The expEDIum Medical Billing Solution allows uploading of medical claims securely (in a variety of supported formats including data entry of claims one at a time), validation of claims, scrubbing of claims, and automatic electronic submission to payers (or clearinghouses). This Solution also processes the various reports such as TA1s, 997s, ERA, 277s, etc that are returned from the payers, clearinghouses and reconciles with the original claims automatically. This Solution provides a complete view of the medical claims across its life cycle. Additionally this portal handles all the HIPAA compliance requirements including support for v4010A1 transaction code sets such as 837 (Professional) (HCFA), 837(Intuitional) (UB04), 835 (ANSI ERAs), 270 (Eligibility Inquiry) and 271 (Eligibility Response).",
          "url": "",
          "rolesAndResponsiblities": [
            {
              "id": 1,
              "value": "Developed the Automation Test Scripts using Selenium."
            },
            {
              "id": 2,
              "value": "Performed data driven using Apache POI."
            },
            {
              "id": 3,
              "value": "Performed functional, compatibility testing on different browsers like Firefox & IE."
            },
            {
              "id": 4,
              "value": "Developed the Modular driven framework."
            },
            {
              "id": 5,
              "value": "Defect Tracking and Reporting."
            },
            {
              "id": 6,
              "value": "Triggered the automation jobs using Jenkins."
            },
            {
              "id": 7,
              "value": "Performed various black box testing methodologies like functional and regression testing."
            },
            {
              "id": 8,
              "value": "Involved in project status meetings with team members."
            },
            {
              "id": 9,
              "value": "Provided KT – Knowledge Transfer sessions for the members joining the team."
            },
          ],
          "environment": "Windows, Selenium WebDriver, TestNG, ReportNG, Apache Maven, Java, Programming, Jenkins, Postgresql, Bugzilla."
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackById(index, project) {
    return project.id;
  }
}
