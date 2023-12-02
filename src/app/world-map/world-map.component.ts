import { Component, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { WorldBankService } from '../world-bank.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.scss'
})
export class WorldMapComponent implements AfterViewInit {
  @Output() sendCountryData = new EventEmitter<string>();

  constructor(private element: ElementRef, private countryData: WorldBankService) {}

  ngAfterViewInit(): void {
    const countries = this.element.nativeElement.children;
    
    for (let i = 0; i < countries.length; i++) {
      countries[i].addEventListener('click', (event: any) => {
        const country = event.target.id;
        this.countryData.triggerAPI(country).subscribe((response: any) => {
          this.sendCountryData.emit(response)
        })
      })
    }
    
  }
  
}
