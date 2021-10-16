import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appTitleVersion = AppConstants.APP_TITLE_VERSION;
  authorName = AppConstants.AUTHOR_NAME;
  public innerWidth: any;
  isHidden = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerWidth > 765 ? this.isHidden = true : this.isHidden = false;
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle("Amit Resume");
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerWidth > 765 ? this.isHidden = true : this.isHidden = false;
  }

  downloadResume() {
    if (confirm("Are you sure to download the resume ")) {
      window.open('/assets/resume/Amit_cv_exp.pdf');
    }
  }

}
