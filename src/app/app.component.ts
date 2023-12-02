import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  countryData: any | undefined;

  getCountryData(data: string):void {
    this.countryData = data;
  }
}
