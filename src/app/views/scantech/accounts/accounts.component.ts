import { Component, OnInit } from '@angular/core';
import { Account } from 'src/models/account';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
list: Account[] = [];
account!: Account;
  constructor(private service: AccountService) { }

  ngOnInit(): void {
    this.service.getAllAccounts().subscribe(res => {
      this.list = res;
    })
  }

}
