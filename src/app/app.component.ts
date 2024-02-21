import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, ConvertPipe],
})
export class AppComponent {
  name: string = '';
  date = '';
  amount = 0;
  height = 0;
  miles=0;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
  onNameChange(value: string) {
    this.name = value;
  }
  onDatechange(value: string) {
    this.date = value;
  }
  onAmoutnchange(value: string) {
    this.amount = parseFloat(value);
  }
  onHeightnchange(value: string) {
    this.height = parseFloat(value);
  }
}
