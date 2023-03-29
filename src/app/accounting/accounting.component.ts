import { Component, OnInit } from '@angular/core';
import { AccountingService } from '../shared/services/accounting/accounting.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  constructor(private accountingService : AccountingService) { }

  ngOnInit(): void {
  }

}
