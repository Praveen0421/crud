import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employee!: FormGroup;
  formValue: any;
  heroes: {
    id: number;
    name: string;
    email: string;
    city: string;
    pincode: number;
    phonenumber: number;
  }[] = [];
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.employee = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],
    });
    this.getEmployee();
  }

  getEmployee() {
    this.api.getData().subscribe((response: any) => {
      this.heroes = response;
      console.log(this.heroes);
    });
  }
  addEmployee(form: any) {
    this.postEmployee(form.value);
    form.reset();
  }
  postEmployee(data: any) {
    this.api.postData(data).subscribe((response: any) => {
      
    });
    this.getEmployee();
  }
  delete(id: number) {
    this.api.deleteData(id).subscribe((response) => {
      this.getEmployee();
    });
  }
}

