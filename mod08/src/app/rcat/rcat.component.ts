import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-rcat',
  templateUrl: './rcat.component.html',
  styleUrls: ['./rcat.component.css']
})
export class RcatComponent implements OnInit {

  form:FormGroup;

  cat = {
    name: 'Zorro',
    age: 12
  }

nameError = null;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(2)
      ], [
        // Async validator
      ]],
      age:0
    });

    this.form.reset(this.cat);
    
    this.form.valueChanges
      .subscribe(e => {
        console.log('changes', e, this.cat);
        this.validateName();
    })
  }

  validateName(){
    const {errors} = this.form.controls.name;
    this.nameError = null;
    console.log(errors)
    if (!errors) return;

    if (errors.required) {
      this.nameError = "Moet er zijn"
    }
  }

  reset(){
    this.form.reset(this.cat);
  }
}
