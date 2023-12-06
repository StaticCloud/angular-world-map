import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldBankService {
  private formattedCountryData: any;

  constructor(private http: HttpClient) { }

  setCountryData(data: any) {
    this.formattedCountryData = data;
  }

  triggerAPI(country: string): Observable<any> {
    const countryObservable = new Observable(observer => {
      this.getCountryInfo(country).subscribe((response: any) => {
        this.setCountryData({
          name: response[1][0].name,
          capital: response[1][0].capitalCity,
          region: response[1][0].region.value,
          incomeLevel: response[1][0].incomeLevel.value,
          latitude: response[1][0].latitude,
          longitude: response[1][0].longitude
        })

        observer.next(this.formattedCountryData);
        observer.complete();
      })
    })

    return countryObservable;
  }

  getCountryInfo(country: string) {
    return this.http.get(`https://api.worldbank.org/v2/country/${country}?format=json`);
  }
}
