import { Injectable } from '@angular/core';
import { IBlood } from '../model/blood.model'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  bloodBank:IBlood[]=[{
         id:1,
         group:"A+",
         count:3,
         donor:[1,5,3,7]
       },
       {
         id:2,
         group:"B+",
         count:8,
         donor:[3,7,2,6]
       },
       {
         id:3,
         group:"o+",
         count:2,
         donor:[3,7]
       },
       {
         id:4,
         group:"AB+",
         count:5,
         donor:[3,7,4,8]
       },
       {
         id:5,
         group:"A-",
         count:9,
         donor:[3,7,1,5]
       },
       {
         id:6,
         group:"B-",
         count:6,
         donor:[3,7,2,6]
       },
       {
         id:7,
         group:"o-",
         count:8,
         donor:[3,7]
       },
       {
         id:8,
         group:"AB-",
         count:3,
         donor:[3,7,4,8]
       }
       ];
  constructor(private _router:Router) { }
   getBloodBank():IBlood[]{
     return this.bloodBank;
   }
  save(data):void{
  for(let i=0; i<this.bloodBank.length; i++)
   {
     this.bloodBank[i].count=data[i];
   }
   this._router.navigate(['blood-bank']);
  }
}
