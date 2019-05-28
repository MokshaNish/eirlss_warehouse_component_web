import { MasterStockRecordComponent } from './master-stock-record/master-stock-record.component';
import { MasterStockRecord } from './Models/MasterStockRecord';
import { BomComponent } from './bom/bom.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { CheckQualityComponent } from './check-quality/check-quality.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReturnsComponent } from './returns/returns.component';
import { GoodInwardsComponent } from './good-inwards/good-inwards.component';
import { DefectNoticeComponent } from './defect-notice/defect-notice.component';
import { PickOrdersComponent } from './pick-orders/pick-orders.component';
import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';
import { SupplierGoodsComponent } from './supplier-goods/supplier-goods.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "supplier-goods", component: SupplierGoodsComponent },
  { path: "returns", component: ReturnsComponent },
  { path: "good-inwards", component: GoodInwardsComponent },
  { path: "checkquality", component: CheckQualityComponent },
  { path: "Defectnotice", component: DefectNoticeComponent },
  { path: "transactionHistory", component: TransactionHistoryComponent },
  { path: "bom", component: BomComponent },
  { path: "msr", component: MasterStockRecordComponent },
  { path: "pickorders", component: PickOrdersComponent },

  { path: "manageItems/new", component: ManageItemsComponent },
  { path: "manageItems/:id", component: ManageItemsComponent },
  
  { path: "deliverynote", component: DeliveryNoteComponent },
  { path: "returns", component: ReturnsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
