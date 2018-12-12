import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
} from '@angular/material';
import { CharacterListComponent } from './character-list/character-list.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import {MatFormFieldModule} from '../../node_modules/@angular/material/typings/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    SidenavContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
