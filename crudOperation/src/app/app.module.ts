import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
