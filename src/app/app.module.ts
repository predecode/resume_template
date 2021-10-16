import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ResolutionService } from './fwk/service/resolution.service';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppMissingTranslationHandler } from './fwk/i18n/i18n.module';
import { HomeComponent } from './home/home.component';
import { CertifsComponent } from './certifs/certifs.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ProfessionalOrgsComponent } from './professional-orgs/professional-orgs.component';
import { FooterComponent } from './footer/footer.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  providers: [
    Title,
    ResolutionService,
    {
      provide: MissingTranslationHandler,
      useClass: AppMissingTranslationHandler
    },
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CertifsComponent,
    AchievementsComponent,
    NavbarComponent,
    ProfessionalSummaryComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ProfessionalOrgsComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
