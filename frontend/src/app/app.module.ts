import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordFrequencyComponent } from './components/word-frequency/word-frequency.component';
import { WordFrequencyInfoService } from './services/word-frequency-info.service';


@NgModule({
  declarations: [
    AppComponent,
    WordFrequencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    FormsModule,
    KeyFilterModule,
    TooltipModule
  ],
  providers: [WordFrequencyInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
