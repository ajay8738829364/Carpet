import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { raw } from 'express';
import { AdminComponent } from './admin.component';
import { BuyerMasterComponent } from './buyer-master/buyer-master.component';
import { ByerComponent } from './byer/byer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DyingMasterComponent } from './dying-master/dying-master.component';
import { FinishingLabourLedgerComponent } from './finishing-labour-ledger/finishing-labour-ledger.component';
import { LedgerAccountComponent } from './ledger-account/ledger-account.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { ShaedCardComponent } from './shaed-card/shaed-card.component';
import { SizeMasterComponent } from './size-master/size-master.component';
import { ViewByerListComponent } from './view-byer-list/view-byer-list.component';
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
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
