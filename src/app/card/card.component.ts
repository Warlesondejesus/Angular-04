import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo: string = ''
  @Input()
  p1: string = ''
  @Input()
  p2: string = ''
  @Input()
  p3: string = ''
  @Input()
  p4: string = ''
  @Input()
  id: string = ''

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento():void {
    this.btnClickEvent.emit()
  }



}