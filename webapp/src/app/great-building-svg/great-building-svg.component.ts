import { Component, Input, OnInit } from '@angular/core';
import { GreatBuilding } from '../models/great-building.model';
import { SvgLine } from '../models/svg-line.model';

@Component({
  selector: 'app-great-building-svg',
  templateUrl: './great-building-svg.component.svg',
  styleUrls: ['./great-building-svg.component.scss']
})
export class GreatBuildingSvgComponent implements OnInit {
  @Input() gb!: GreatBuilding;
  x!: number;
  y!: number;
  h!: number;
  w!: number;
  lines!: SvgLine[];

  ngOnInit() {
    let baseWidth: number = 40;
    let baseHeight: number = 18;

    this.x = this.gb.x;
    this.y = this.gb.y;
    this.h = baseHeight * (this.x + this.y + 2);
    this.w = baseWidth * (this.x + this.y + 2);

    this.lines = [];

    for(let i = 0; i <= this.x; i++) {
			let x1 = (this.y + 1) * baseWidth + (i * baseWidth);
			let y1 = this.h - (i * baseHeight);
			let x2 =(this.y + 1) * baseWidth - ((this.y - i) * baseWidth);
			let y2 = this.h - ((this.y + i) * baseHeight);
			let line: SvgLine = new SvgLine(x1, x2, y1, y2);
			this.lines.push(line);
		}

    for (let i = 0; i <= this.y; i++) {
			let x1 = (this.y + 1) * baseWidth - (i * baseWidth);
			let y1 = this.h - (i * baseHeight);
			let x2 = (this.y + 1) * baseWidth + ((this.x - i) * baseWidth);
			let y2 = this.h - ((this.x + i) * baseHeight);
			let line: SvgLine = new SvgLine(x1, x2, y1, y2);
			this.lines.push(line);
		}
  }
}
