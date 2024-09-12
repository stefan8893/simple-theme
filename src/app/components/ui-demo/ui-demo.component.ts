import { Component } from '@angular/core';
import { ContentHeaderComponent } from '../content-header/content-header.component';

@Component({
  selector: 'app-ui-demo',
  standalone: true,
  imports: [ContentHeaderComponent],
  templateUrl: './ui-demo.component.html',
  styleUrl: './ui-demo.component.scss',
})
export class UiDemoComponent {}
