import { Component, OnInit } from '@angular/core';
import { Frequency } from '../../model/frequency';
import { WordFrequencyInfoService } from '../../services/word-frequency-info.service';

@Component({
  selector: 'app-word-frequency',
  templateUrl: './word-frequency.component.html',
  styleUrls: ['./word-frequency.component.css']
})
export class WordFrequencyComponent implements OnInit {

  numberN;
  inputNumber;
  frequencies: Frequency[] = [];

  constructor(private frequency_service: WordFrequencyInfoService) { }

  ngOnInit() {
  }

  getAllFrequencies(){
    let table_div = <HTMLInputElement> document.getElementById("tableDiv");
    this.frequency_service.getTopNMostFrequentWords(this.numberN)
      .subscribe(data => {
        this.frequencies = data;
        this.inputNumber = this.frequencies.length;
        table_div.style.display = "block";
      });
  }
}