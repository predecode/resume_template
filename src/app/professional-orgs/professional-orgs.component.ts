import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'professional-orgs',
  templateUrl: './professional-orgs.component.html',
  styleUrls: ['./professional-orgs.component.css']
})
export class ProfessionalOrgsComponent implements OnInit {

  organisations = [
    {
      "id": 0,
      "value": "<b>Telus International - Senior SDET</b> (Jan 2021 to till now)."
    },
    {
      "id": 1,
      "value": "<b>Playment - Senior SDET</b> (Feb 2021 to till now)."
    },
    {
      "id": 2,
      "value": "<b>Optym – Senior QA Engineer</b> (April 2020 to Jan 2021)."
    },
    {
      "id": 3,
      "value": "<b>The Hongkong & Shanghai Banking Corporation Limited</b> payroll of Marlabs Innovations Private Limited - Senior Software Engineer(Mar 2018 to Mar 2020)."
    },
    {
      "id": 4,
      "value": "<b>The Hongkong & Shanghai Banking Corporation Limited</b> payroll of Capgemini India Private Limited – Associate Consultant(Sep 2016 to Mar 2018)."
    },
    {
      "id": 5,
      "value": "<b>iTech Workshop Private Limited – Software Test Engineer</b> (Mar 2015 to Jun 2016)."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackById(index, summary) {
    return summary.id;
  }
}
