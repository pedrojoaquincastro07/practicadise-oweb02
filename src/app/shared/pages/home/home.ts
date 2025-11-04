import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
    'assets/img/crosstrak.png',
    'assets/img/hondacivic.webp',
    'assets/img/yaris.jpg'
  ];
  active = 0;
  private timer?: any;
  private intervalMs = 5000;

  ngOnInit(){ this.timer = setInterval(()=> this.next(), this.intervalMs); }
  ngOnDestroy(){ if (this.timer) clearInterval(this.timer); }
  next(){ this.active = (this.active + 1) % this.images.length; }
  prev(){ this.active = (this.active - 1 + this.images.length) % this.images.length; }
  goTo(i:number){ this.active = i; }
}
