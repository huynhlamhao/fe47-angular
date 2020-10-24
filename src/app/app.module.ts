import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Baitap1Module } from './baitap1/baitap1.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { Baitap2Module } from './baitap2/baitap2.module';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { AttributesDirectivesModule } from './attributes-directives/attributes-directives.module';
import { Baitap5Module } from './baitap5/baitap5.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { InteractionModule } from './interaction/interaction.module';
import { BookBusModule } from './book-bus/book-bus.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import { RouterModule, Routes } from "@angular/router";
// import { MainModule } from "./main/main.module"
import { AdminModule } from './admin/admin.module';
// import { Baitap1Component } from './baitap1/baitap1.component';
// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap8Component } from './baitap8/baitap8.component';
import { AdminGuard } from "src/app/core/guards/admin.guard"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthenticationInterceptor } from "src/app/core/interceptors/authentication.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  // { path: 'baitap1', component: Baitap1Component },
  // { path: 'baitap2', component: Baitap2Component },
  // { path: 'baitap8', component: Baitap8Component }
  // khi dùng router load module không cần khai báo module dưới import
  { path: 'baitap1', loadChildren: () => Baitap1Module },
  { path: 'baitap2', loadChildren: () => Baitap2Module },
  { path: 'baitap8', loadChildren: () => Baitap8Module },
  { path: 'admin', canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) }

]
//có nhiều loại module
//module do angular cung cấp: FormsModule,RouterModule,HttpModule
//module do dev tự định nghĩa
@NgModule({
  // khai báo component sẽ được module quản lý
  declarations: [AppComponent, DemoComponent],
  // khai báo các module sẽ được sử dụng
  // ngoại trừ AppModule đã được import ở main.ts
  // tất cả các module khác đều phải được import mới sử dụng được
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    // Baitap1Module,
    // Baitap2Module,
    FormsModule,
    StructuralDirectivesModule,
    AttributesDirectivesModule,
    Baitap5Module,
    Baitap6Module,
    InteractionModule,
    BookBusModule,
    HttpClientModule,
    BrowserAnimationsModule
    // Baitap8Module
  ],
  // nơi gắn các services vào
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  // khai báo để AppComponent là component chạy đầu tên của module
  bootstrap: [AppComponent],
})
export class AppModule { }
