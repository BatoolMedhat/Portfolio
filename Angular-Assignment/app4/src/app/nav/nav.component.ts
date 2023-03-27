import { Component } from '@angular/core';
import { HostListener} from "@angular/core";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @HostListener('window:scroll') handeleSroll(){
  console.log("hi");
  
   
}
}




