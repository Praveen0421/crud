import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  employee!: FormGroup;
  dataId: any;
  toUpdate:undefined | any;
  ngOnInit() {
    this.employee = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],
    });
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      let id = param['get']('id');
      this.dataId = Number(id);
    });
    this.api.fetchData(this.dataId).subscribe((data: any) => {
      this.toUpdate = data;
    });
  }
  update(form:any){
    this.api.udateData(form.value,this.dataId).subscribe((Response)=>{
      this.route.navigate(["/"])
    })
  }
}
