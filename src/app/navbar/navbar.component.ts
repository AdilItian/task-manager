import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APP_URLS } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  onConfigureConnection!: (args: boolean) => void;
  @Input()
  loadTab!: (args: any) => void;

  APP_URLS = APP_URLS;
  
  public isMenuCollapsed = true;

  constructor(private modalService: NgbModal){}  

  ngOnInit(): void {
  }

  open(content: any) {  
    return this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  } 

}
