import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCount?:number;
  @Input() pageSize?:number;

  @Output() pageChangedOutput = new EventEmitter<number>();

  onPagerChanged(event: any) {
    this.pageChangedOutput.emit(event.page);
  }

}
