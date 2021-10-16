import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CertifsComponent } from './certifs/certifs.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalOrgsComponent } from './professional-orgs/professional-orgs.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'professional-summary',
    component: ProfessionalSummaryComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'professional-orgs',
    component: ProfessionalOrgsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'certifs',
    component: CertifsComponent,
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
