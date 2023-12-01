import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Şart Blokları</h1>
<button *ngIf="!isActive; else check" (click)="changeActiveStatus">
Aktif et
</button>
<br><br>
<ng-template #check>
<button  (click)="changeActiveStatus()">
Pasife Al
</button>
</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conditenal';
  isActive:boolean=false;
  changeActiveStatus(){
    this.isActive=this.isActive;
  }
}
