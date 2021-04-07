import { Component, OnInit } from '@angular/core';
import { BloodService } from '../../service/blood.service';
import { IBlood } from '../../model/blood.model';

import { CdkDragDrop} from '@angular/cdk/drag-drop';

import * as $ from 'jquery' ;

@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css']
})
export class BloodComponent implements OnInit {
  bloodBanks:IBlood[]=[];
  selected:number;
  green:number[]=[];
  darkgreen:number[]=[];
  numberOfBottle:number;
  allowCountSelect=true;
  noOfBottle:IBlood[]=[];
  isDragDisabled=true;
  exam:IBlood[]=[];
  alert=false;
  allowSelectGroup=false;
  
  
  constructor(private _bloodService:BloodService) { }

  ngOnInit(): void {

   this.bloodBanks= this._bloodService.getBloodBank();
  }
  check():void{
     for(let i=0; i<=this.green.length; i++)
     {
       this.noOfBottle[i]=this.bloodBanks.find(c=>c.id==this.green[i]);
       let greenId=this.noOfBottle[i].id;
       
      // alert(this.noOfBottle[i].count)
        if(this.noOfBottle[i].count>=this.numberOfBottle)
        {
         // alert(this.noOfBottle[i].count)
           $(".makeDarkGreen_"+greenId).css("background","green");
           this.isDragDisabled=false;
           this.darkgreen.push(greenId);
        }else{
          //alert(this.noOfBottle[i].count)
           $(".makeDarkGreen_"+greenId).css("background","lightgreen");
          // this.isDragDisabled=true;
        }
     }
     
  }
  
  
  removeDisabled():void{
    if(this.selected)
     {
       this.allowCountSelect=false;
     }
     //$(".blood-box").css("background","white");
     this.green= this.bloodBanks[this.selected].donor;
  }
  
  drop(event){
    if(this.numberOfBottle)
    {
    let ind=event.previousIndex;
    let id=this.bloodBanks[ind].id;
    if(this.darkgreen.indexOf(id)!=-1)
    {
      if(this.bloodBanks[ind].count==this.numberOfBottle)
      {
       this.exam.push(this.bloodBanks[ind]);
       this.bloodBanks=  this.bloodBanks.filter((bb)=>{
          return bb.id!=id;
         });
      }else{
        let x=Object.assign({},this.bloodBanks[ind]);
        x.count=this.numberOfBottle;
        this.exam.push(x);
        this.bloodBanks[ind].count-=this.numberOfBottle;
        $(".makeDarkGreen_"+id).css("background","lightgreen");
        this.alert=true;
        this.allowCountSelect=true;
        this.allowSelectGroup=true;
      }
      //drag prohibit
      this.isDragDisabled=true;
    }
 
    }
        

   // moveItemInArray(this.bloodBanks, event.previousIndex, event.currentIndex);
   }
   
   totalReset():void{
     $(".alert").fadeOut();
    location.reload();
   }
}
