import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductRoutingModule } from './product/product-routing.module';
import { ExamModule } from './exam/exam.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    FormsModule,
    ProductRoutingModule,
ExamModule,
ProductModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
