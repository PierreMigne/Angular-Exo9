import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() data: Array<any>;
  @Input() cols: string;

  rowsArray: Array<any>;

  constructor() { }

  ngOnInit(): void {
    const rows = Math.ceil(this.data.length / +this.cols);
    this.rowsArray = [];
    for (let i = 0; i < rows; i++) {
      this.rowsArray.push(i);
    }
  }

  selectItems(rowIndex) {

    const selectedItems = [];
    const start = rowIndex * +this.cols;
    const end = start + (+this.cols - 1);

    for (let i = start; i <= end; i++) {
      if (this.data[i]) {
        selectedItems.push(this.data[i]);
      }
    }

    return selectedItems;
  }

}
