import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { QualityComponent } from './quality/quality.component';
import { DesignComponent } from './design/design.component';
import { ColourCodeDyeingDetailComponent } from './colour-code-dyeing-detail/colour-code-dyeing-detail.component';
import { ColourShadeCardComponent } from './colour-shade-card/colour-shade-card.component';
import { FinishingHeadComponent } from './finishing-head/finishing-head.component';
import { FinishingProcessComponent } from './finishing-process/finishing-process.component';
import { BuyerOrderComponent } from './buyer-order/buyer-order.component';
import { PurchaseBillComponent } from './purchase-bill/purchase-bill.component';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ViewBuyerOrderListComponent } from './view-buyer-order-list/view-buyer-order-list.component';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { CarpetStockComponent } from './carpet-stock/carpet-stock.component';
import { LagatMasterComponent } from './lagat-master/lagat-master.component';
import { KotiMasterComponent } from './koti/koti-master/koti-master.component';
import { KotiCustomerComponent } from './koti/koti-customer/koti-customer.component';
import { KotiQualityComponent } from './koti/koti-quality/koti-quality.component';
import { KotiContainerDispatchComponent } from './koti/koti-container-dispatch/koti-container-dispatch.component';
import { KotiContainerReceivedComponent } from './koti/koti-container-received/koti-container-received.component';
import { KotiSaleBillComponent } from './koti/koti-sale-bill/koti-sale-bill.component';
import { QualityDesignComponent } from './koti/quality-design/quality-design.component';
import { ExcelFormateComponent } from './excel-formate/excel-formate.component';


import {MatDialogModule} from '@angular/material/dialog';
import { CheckDespatchdataComponent } from './koti/check-despatchdata/check-despatchdata.component';
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
    PurchaserDetailsComponent,
    EmployeeDetailsComponent,
    QualityComponent,
    DesignComponent,
    ColourCodeDyeingDetailComponent,
    ColourShadeCardComponent,
    FinishingHeadComponent,
    FinishingProcessComponent,
    BuyerOrderComponent,
    PurchaseBillComponent,
    ViewBuyerOrderListComponent,
    ManageBranchComponent,
    CarpetStockComponent,
    LagatMasterComponent,
    KotiMasterComponent,
    KotiCustomerComponent,
    KotiQualityComponent,
    KotiContainerDispatchComponent,
    KotiContainerReceivedComponent,
    KotiSaleBillComponent,
    QualityDesignComponent,
    ExcelFormateComponent,
    CheckDespatchdataComponent
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
    GoogleChartsModule,
    FormsModule ,
    Ng2TelInputModule,
    NgxIntlTelInputModule,
    MatDialogModule,
    TooltipModule.forRoot()


  ],

})
export class AdminModule { }
