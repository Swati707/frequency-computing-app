import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frequency } from '../model/frequency';

@Injectable()
export class WordFrequencyInfoService {

  getUrl: String = "/"

  constructor(private http: HttpClient) { }

    //service to get top N most frequent words
    getTopNMostFrequentWords(number){
      return this.http.get<Frequency[]>(this.getUrl + number);
    }
}
