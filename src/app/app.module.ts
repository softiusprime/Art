import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { AdmitFormComponent } from './student/admit-form/admit-form.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentPromotionComponent } from './student/student-promotion/student-promotion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AllStudentComponent,
    AdmitFormComponent,
    StudentDetailsComponent,
    StudentPromotionComponent
  ],
  imports: [
    
    BrowserModule, 
    
    AppRoutingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
