import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReturnsComponent } from './returns/returns.component';
import { GoodInwardsComponent } from './good-inwards/good-inwards.component';
import { DefectNoticeComponent } from './defect-notice/defect-notice.component';
import { PickOrdersComponent } from './pick-orders/pick-orders.component';
import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SupplierGoodsComponent } from './supplier-goods/supplier-goods.component';
import { CheckQualityComponent } from './check-quality/check-quality.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { BomComponent } from './bom/bom.component';
import { MasterStockRecordComponent } from './master-stock-record/master-stock-record.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReturnsComponent,
    GoodInwardsComponent,
    DefectNoticeComponent,
    PickOrdersComponent,
    DeliveryNoteComponent,
    SupplierGoodsComponent,
    CheckQualityComponent,
    ManageItemsComponent,
    TransactionHistoryComponent,
    BomComponent,
    MasterStockRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
