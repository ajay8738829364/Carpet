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
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { QualityComponent } from './quality/quality.component';
import { DesignComponent } from './design/design.component';
import { ColourCodeDyeingDetailComponent } from './colour-code-dyeing-detail/colour-code-dyeing-detail.component';
import { ColourShadeCardComponent } from './colour-shade-card/colour-shade-card.component';
import { FinishingHeadComponent } from './finishing-head/finishing-head.component';
import { FinishingProcessComponent } from './finishing-process/finishing-process.component';
import { BuyerOrderComponent } from './buyer-order/buyer-order.component';
import { PurchaseBillComponent } from './purchase-bill/purchase-bill.component';
import { ViewBuyerOrderListComponent } from './view-buyer-order-list/view-buyer-order-list.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'buyer',component:ByerComponent  },
    {path:'view-byer-list',component:ViewByerListComponent},
    {path:'buyer-master',component:BuyerMasterComponent},
    {path:'buyer-master/:id',component:BuyerMasterComponent},
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
    {path:'raw-material-group/:id',component:RawMaterialGroupComponent},
    {path:'purchaser-details',component:PurchaserDetailsComponent},
    {path:'purchaser-details/:id',component:PurchaserDetailsComponent},
    {path:'employee-details',component:EmployeeDetailsComponent},
    {path:'quality',component:QualityComponent},
    {path:'quality/:id',component:QualityComponent},

    {path:'design',component:DesignComponent},
    {path:'design/:id',component:DesignComponent},

    {path:'colour-code-dyeing-detail',component:ColourCodeDyeingDetailComponent},
    {path:'colour-shade-card',component:ColourShadeCardComponent},
    {path:'finishing-head',component:FinishingHeadComponent},
    {path:'finishing-process',component:FinishingProcessComponent},
    {path:'buyer-order',component:BuyerOrderComponent},
    {path:'view-buyer-order-list',component:ViewBuyerOrderListComponent},
    {path:'purchase-bill',component:PurchaseBillComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
