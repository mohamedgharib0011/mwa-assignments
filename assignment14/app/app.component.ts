import { Component } from '@angular/core';
import { RemoteService } from './remote.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // private username: String;
  // private email: String;
  // private post: String;
  // private form: FormGroup;

  // constructor(private remote: RemoteService, private fb: FormBuilder,private r:Router) {
  //   this.form = fb.group({
  //     'username': ['', Validators.required],
  //     'email': ['', Validators.required],
  //     'post': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
  //   })
  // }

  // getDate() {
  //   this.remote.getData().subscribe(x => {
  //     this.form.get('username').setValue(x['username']);
  //     this.form.get('email').setValue(x['email']);
  //     this.form.get('post').setValue(x['company']['catchPhrase']);
  //   });

  // }

  // onSubmit() {
  //   console.log(this.form.value);
  //   // this.r.navigate(['thankyou']);

  // }
}
