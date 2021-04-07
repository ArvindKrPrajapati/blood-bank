import { Component, OnInit } from '@angular/core';
import { BloodService } from '../../service/blood.service';

@Component({
  selector: 'app-blood-form',
  templateUrl: './blood-form.component.html',
  styleUrls: ['./blood-form.component.css']
})
export class BloodFormComponent implements OnInit {
 count:number[]=[3,8,2,5,9,6,8,3];
 
  constructor(private _service:BloodService) { }

  ngOnInit(): void {
      }
saveRecords():void{
 this._service.save(this.count);
}
}
