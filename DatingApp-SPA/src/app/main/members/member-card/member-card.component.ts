import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'da-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
