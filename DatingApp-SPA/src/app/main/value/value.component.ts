import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'da-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/values')
      .subscribe(res => (this.values = res));
  }
}
