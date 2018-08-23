import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';
import {SlideMenuModule} from '../components/slidemenu/slidemenu';
import {DialogModule} from '../components/dialog/dialog';
import { LoginComponent } from './login/login.component';
import {ToastModule} from '../components/toast/toast';
import {PanelModule} from '../components/panel/panel';
import {MessageModule} from '../components/message/message';
import {DropdownModule} from '../components/dropdown/dropdown';
import {ButtonModule} from '../components/button/button';
import {InputTextModule} from '../components/inputtext/inputtext';
import {MessageService} from '../components/common/messageservice';
import { RegisterComponent } from './register/register.component';
import {FileUploadModule} from '../components/fileupload/fileupload';
import { ProfileComponent } from './componentsBoleto/profile/profile.component';
import {CardModule} from '../components/card/card';
import {CheckboxModule} from '../components/checkbox/checkbox';
import {RadioButtonModule} from '../components/radiobutton/radiobutton';
import { UserMantenimientoComponent } from './componentsBoleto/mantenimiento/user-mantenimiento/user-mantenimiento.component';
import {TableModule} from '../components/table/table';
import { PersonComponent } from './componentsBoleto/mantenimiento/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserMantenimientoComponent,
    PersonComponent
  ],
  imports: [
      TableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
      SlideMenuModule,
      DialogModule,
      ToastModule,
      ButtonModule,
      InputTextModule,
        FileUploadModule,
      PanelModule,
      MessageModule,
      CardModule,
      CheckboxModule,
      RadioButtonModule,
      DropdownModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      CarService,CountryService,EventService,NodeService,MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
