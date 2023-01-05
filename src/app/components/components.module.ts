import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HeaderComponent
  ]
})
export class ComponentsModule { }
