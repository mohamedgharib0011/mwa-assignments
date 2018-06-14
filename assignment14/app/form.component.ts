import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RemoteService } from './remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent {

  private username: String;
  private email: String;
  private post: String;
  form: FormGroup;

  constructor(private remote: RemoteService, private fb: FormBuilder, private r: Router) {
    this.form = fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'post': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    })

  }

  getDate() {
    this.remote.getData().subscribe(x => {
      this.form.get('username').setValue(x['username']);
      this.form.get('email').setValue(x['email']);
      this.form.get('post').setValue(x['company']['catchPhrase']);
    });

  }

  onSubmit() {
    this.r.navigate(['thankyou']);

  }
}
