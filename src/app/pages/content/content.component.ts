import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-content',
  imports: [MenuBarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/VW_Brasilia.jpg/1200px-VW_Brasilia.jpg"
  contentTitle:string = "O Volkswagen Brasília"
  contentDescription:string = "O Volkswagen Brasília foi lançado em junho de 1973. O carro foi fabricado pela Volkswagen do Brasil até 1982. "
}
