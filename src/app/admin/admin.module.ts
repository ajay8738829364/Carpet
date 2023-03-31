import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ByerComponent } from './byer/byer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatSelectModule} from '@angular/material/select';
import { ViewByerListComponent } from './view-byer-list/view-byer-list.component';

import {MatTableModule} from '@angular/material/table';

import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import { BuyerMasterComponent } from './buyer-master/buyer-master.component';
import { DyingMasterComponent } from './dying-master/dying-master.component';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ColorPickerModule } from 'ngx-color-picker';
import { ShaedCardComponent } from './shaed-card/shaed-card.component';
import { SizeMasterComponent } from './size-master/size-master.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { WeavingComponent } from './weaving/weaving.component';
import { FinishingLabourLedgerComponent } from './finishing-labour-ledger/finishing-labour-ledger.component';
import { LedgerAccountComponent } from './ledger-account/ledger-account.component';
import { FieldsetModule } from "primeng/fieldset";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ContractorComponent } from './contractor/contractor.component';
import { FinishingLedgerComponent } from './finishing-ledger/finishing-ledger.component';
import { NgParticlesModule } from "ng-particles";
import { ViewFinishingLedgerComponent } from './view-finishing-ledger/view-finishing-ledger.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarsComponent } from './admin-sidebars/admin-sidebars.component';
import { RawMaterialGroupComponent } from './raw-material-group/raw-material-group.component';
import { PurchaserDetailsComponent } from './purchaser-details/purchaser-details.component';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ByerComponent,
    ViewByerListComponent,
    BuyerMasterComponent,
    DyingMasterComponent,
    ShaedCardComponent,
    SizeMasterComponent,
    RawMaterialComponent,
    WeavingComponent,
    FinishingLabourLedgerComponent,
    LedgerAccountComponent,
    ContractorComponent,
    FinishingLedgerComponent,
    ViewFinishingLedgerComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarsComponent,
    RawMaterialGroupComponent,
    PurchaserDetailsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FieldsetModule,
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatPaginatorModule,
    ColorPickerModule,
    MatSnackBarModule,
    HttpClientModule,
    NgParticlesModule,
    GoogleChartsModule



  ],

})
export class AdminModule { }
