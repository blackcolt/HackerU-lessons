import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/classes/weather';

@Component({
  selector: 'app-weather-compnent',
  templateUrl: './weather-compnent.component.html',
  styleUrls: ['./weather-compnent.component.scss'],
})
export class WeatherCompnentComponent {
  @Input() weather?: Weather;
}
