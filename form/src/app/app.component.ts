import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm;
  defaultQuestion = 'color';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    demoQuestion: '',
    gender: '',
  };

  submitted = false;

  suggestUserName(): void {
    this.signUpForm.form.patchValue({
      userData: {
        username: 'Superuser'
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.demoQuestion = this.signUpForm.value.demoQuestion;
    this.user.gender = this.signUpForm.value.gender;

    // Respostas não são guardadas nem mostradas; o exemplo não deve recolher dados secretos.
    this.answer = '';
    this.signUpForm.resetForm({ demoQuestion: this.defaultQuestion });
  }
}
