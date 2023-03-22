import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-finishing-ledger',
  templateUrl: './finishing-ledger.component.html',
  styleUrls: ['./finishing-ledger.component.css']
})
export class FinishingLedgerComponent {
  groupName = new FormControl('');
  groupNameList : string [] = ['g1','g2'];
}
