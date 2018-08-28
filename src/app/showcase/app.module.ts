import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

import {CarService} from './service/carservice';
import {CountryService} from './service/countryservice';
import {EventService} from './service/eventservice';
import {NodeService} from './service/nodeservice';
import {SlideMenuModule} from '../components/slidemenu/slidemenu';
import {DialogModule} from '../components/dialog/dialog';
import {LoginComponent} from './login/login.component';
import {ToastModule} from '../components/toast/toast';
import {PanelModule} from '../components/panel/panel';
import {MessageModule} from '../components/message/message';
import {DropdownModule} from '../components/dropdown/dropdown';
import {ButtonModule} from '../components/button/button';
import {InputTextModule} from '../components/inputtext/inputtext';
import {MessageService} from '../components/common/messageservice';
import {RegisterComponent} from './register/register.component';
import {FileUploadModule} from '../components/fileupload/fileupload';
import {ProfileComponent} from './componentsBoleto/profile/profile.component';
import {CardModule} from '../components/card/card';
import {CheckboxModule} from '../components/checkbox/checkbox';
import {RadioButtonModule} from '../components/radiobutton/radiobutton';
import {UserMantenimientoComponent} from './componentsBoleto/mantenimiento/user-mantenimiento/user-mantenimiento.component';
import {TableModule} from '../components/table/table';
import {PersonComponent} from './componentsBoleto/mantenimiento/person/person.component';
import {BoletoComponent} from './componentsBoleto/mantenimiento/boleto/boleto.component';

import { ItinerarioMantenimientoComponent } from './componentsBoleto/mantenimiento/itinerario-mantenimiento/itinerario-mantenimiento.component';
import {TerminalMantenimientoComponent} from './componentsBoleto/mantenimiento/terminal-mantenimiento/terminal-mantenimiento.component';
import { VehiculoMantenimientoComponent } from './componentsBoleto/mantenimiento/vehiculo-mantenimiento/vehiculo-mantenimiento.component';
import { ComboPersonComponent } from './componentsBoleto/utils/combo-person/combo-person.component';
import {MultiSelectModule} from '../components/multiselect/multiselect';
import { ComboVehiculoComponent } from './componentsBoleto/utils/combo-vehiculo/combo-vehiculo.component';
import { ComboTerminalComponent } from './componentsBoleto/utils/combo-terminal/combo-terminal.component';
import { ComboVehiculoOneComponent } from './componentsBoleto/utils/combo-vehiculo-one/combo-vehiculo-one.component';
import { ComboTerminalOneComponent } from './componentsBoleto/utils/combo-terminal-one/combo-terminal-one.component';
import {CalendarModule} from '../components/calendar/calendar';
import { ReservaMantenimientoComponent } from './componentsBoleto/mantenimiento/reserva-mantenimiento/reserva-mantenimiento.component';
import {ToggleButtonModule} from '../components/togglebutton/togglebutton';
import { ComboPersonOneComponent } from './componentsBoleto/utils/combo-person-one/combo-person-one.component';
import { ComboItinerarioOneComponent } from './componentsBoleto/utils/combo-itinerario-one/combo-itinerario-one.component';
import {SidebarModule} from '../components/sidebar/sidebar';
import {OverlayPanelModule} from '../components/overlaypanel/overlaypanel';
import {InplaceModule} from '../components/inplace/inplace';
import { AsientosChoseComponent } from './componentsBoleto/utils/asientos-chose/asientos-chose.component';
import {SplitButtonModule} from '../components/splitbutton/splitbutton';
import { AisentoChoseClientComponent } from './componentsBoleto/utils/aisento-chose-client/aisento-chose-client.component';
import { VentasComponent } from './componentsBoleto/ventas/ventas.component';
import { SellVisaComponent } from './componentsBoleto/utils/sell-visa/sell-visa.component';

@NgModule({
    declarations: [
//        CardModule,
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        UserMantenimientoComponent,
        PersonComponent,
        BoletoComponent,

        TerminalMantenimientoComponent,
        ItinerarioMantenimientoComponent,
        VehiculoMantenimientoComponent,
        ComboPersonComponent,
        ComboVehiculoComponent,
        ComboTerminalComponent,
        ComboVehiculoOneComponent,
        ComboTerminalOneComponent,
        ReservaMantenimientoComponent,
        ComboPersonOneComponent,
        ComboItinerarioOneComponent,
        AsientosChoseComponent,
        AisentoChoseClientComponent,
        VentasComponent,
        SellVisaComponent
    ],
    imports: [
        ToggleButtonModule,
        SplitButtonModule,
        CardModule,
        InplaceModule,
        OverlayPanelModule,
        SidebarModule,
        PanelModule,
        CalendarModule,
        MultiSelectModule,
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
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CarService, CountryService, EventService, NodeService, MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
