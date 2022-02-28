import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-image',
  templateUrl: './to-image.component.html',
  styleUrls: ['./to-image.component.css']
})
export class ToImageComponent {
  @Input() image: string = ""
}
