import { Component, OnInit } from '@angular/core';
import { Account } from 'src/models/account';
import { AccountService } from 'src/services/account.service';
@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent implements OnInit{
  list: Account[] = [];
  constructor(private service: AccountService) {}
  ngOnInit(): void {
    //console.log('test')
    this.service.getAllAccounts().subscribe(data => {
     this.list = data;
    })
  }
}
