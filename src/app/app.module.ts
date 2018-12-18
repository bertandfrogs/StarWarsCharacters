import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule
} from '@angular/material';
import { CharacterListComponent } from './character-list/character-list.component';
import { SidenavContentComponent } from './app-sidenav/sidenav-content/sidenav-content.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav/app-sidenav.component';
import { FormsModule } from '@angular/forms';
import { ForceComponent } from './shared/force-component/force-component.component';
import { CharacterPipe } from "./character/character.pipe";
import { ForceChangeDialogComponent } from './shared/force-component/force-change-dialog/force-change-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    SidenavContentComponent,
    AppSidenavComponent,
    ForceComponent,
    CharacterPipe,
    ForceChangeDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
        MatDialogModule,
        MatSliderModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
