import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { raw } from 'express';
import { AdminComponent } from './admin.component';
import { BuyerMasterComponent } from './buyer-master/buyer-master.component';
import { ByerComponent } from './byer/byer.component';
import { ContractorComponent } from './contractor/contractor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DyingMasterComponent } from './dying-master/dying-master.component';
import { FinishingLabourLedgerComponent } from './finishing-labour-ledger/finishing-labour-ledger.component';
import { FinishingLedgerComponent } from './finishing-ledger/finishing-ledger.component';
import { LedgerAccountComponent } from './ledger-account/ledger-account.component';
import { PurchaserDetailsComponent } from './purchaser-details/purchaser-details.component';
import { RawMaterialGroupComponent } from './raw-material-group/raw-material-group.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { ShaedCardComponent } from './shaed-card/shaed-card.component';
import { SizeMasterComponent } from './size-master/size-master.component';
import { ViewByerListComponent } from './view-byer-list/view-byer-list.component';
import { ViewFinishingLedgerComponent } from './view-finishing-ledger/view-finishing-ledger.component';
import { WeavingComponent } from './weaving/weaving.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'buyer',component:ByerComponent  },
    {path:'view-byer-list',component:ViewByerListComponent},
    {path:'buyer-master',component:BuyerMasterComponent},
    {path:'dying-master',component:DyingMasterComponent},
    { path:'shaed-card',component:ShaedCardComponent},
    {path:'size-master', component:SizeMasterComponent},
    {path:'raw-material', component:RawMaterialComponent},
    {path:'weaving',component:WeavingComponent},
    {path:'finishing-labour-ledger',component:FinishingLabourLedgerComponent},
    {path:'ledger-account',component:LedgerAccountComponent},
    {path:'contractor',component:ContractorComponent},
    {path:'finishing-ledger',component:FinishingLedgerComponent},
    {path:'view-finishing-ledger',component:ViewFinishingLedgerComponent},
    {path:'raw-material-group',component:RawMaterialGroupComponent},
    {path:'purchaser-details',component:PurchaserDetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
