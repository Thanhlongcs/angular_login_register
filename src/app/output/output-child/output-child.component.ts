import {Component, EventEmitter,OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
listStudent = [
  {id: 1, name: 'long'}, {id: 2, name: 'longabb'},{id: 3, name: 'bettor'}
]
  @Output()
  dataFromChild = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.dataFromChild.emit(this.listStudent);
  }

}
