import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Display } from '../display';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

   display:Display[]=[
  {title:"LOG CABIN",pic:"assets/imges/cabin.png"},
  {title:"LOG Cake",pic:"assets/imges/cake.png"},
  {title:"LOG Circus",pic:"assets/imges/circus.png"},
  {title:"LOG Game",pic:"assets/imges/game.png"},
  {title:"LOG Safe",pic:"assets/imges/safe.png"},
  {title:"LOG Submarine",pic:"assets/imges/submarine.png"}
 
   ]

   show:boolean=true

   displayModel : Display=
    {title:"LOG CABIN",pic:"assets/imges/cabin.png"}
  
   
}
