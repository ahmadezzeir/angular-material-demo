import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {
  public tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  foods: any[] = [
    { name: 'Number', rating: 'SV 1232' },
    { name: 'From', rating: 'Riyadh' },
    { name: 'Time', rating: '10:00' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
