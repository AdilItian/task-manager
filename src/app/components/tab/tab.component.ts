import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() title = '';
  @Input() componentName: any = null;
  @Input() onClick!: (args: any) => void;
  @Input() onClose!: (args: any) => void;
  @Input() payload: any;
  @Input() isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick({
      componentName: this.componentName,
      payload: this.payload,
      title: this.title
    });
    console.log("isActive", this.isActive);
    console.log("title", this.title);
  }

  handleClose(e: any) {
    e.preventDefault();
    this.onClose(this.title);
    e.stopPropagation();
  }
}
