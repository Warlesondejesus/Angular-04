import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'


@Component({
  selector: 'card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEx04';

  constructor(private _snackBar: MatSnackBar) {}

  cRealizada():void {
    this._snackBar.open('Pacote comprado!', 'Fechar!',);
  }

}
