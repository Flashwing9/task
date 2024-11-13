import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function mustContainAt(control: AbstractControl) {
  if (control.value.includes('@')) {
    return null;
  }

  return { doesNotContainAt: true };
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  form = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45),
      ],
    }),
    email: new FormControl('', {
      validators: [
        Validators.email,
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(45),
        mustContainAt,
      ],
    }),
    phone: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45),
      ],
    }),
    address: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45),
      ],
    }),
    country: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45),
      ],
    }),
    states: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45),
      ],
    }),
    notes: new FormControl('', {
      validators: [Validators.maxLength(250)],
    }),
  });

  get nameIsInvalid() {
    return (
      this.form.controls.name.touched &&
      this.form.controls.name.dirty &&
      this.form.controls.name.invalid
    );
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }
  get phoneIsInvalid() {
    return (
      this.form.controls.phone.touched &&
      this.form.controls.phone.dirty &&
      this.form.controls.phone.invalid
    );
  }
  get addressIsInvalid() {
    return (
      this.form.controls.address.touched &&
      this.form.controls.address.dirty &&
      this.form.controls.address.invalid
    );
  }
  get countryIsInvalid() {
    return (
      this.form.controls.country.touched &&
      this.form.controls.country.dirty &&
      this.form.controls.country.invalid
    );
  }
  get statesIsInvalid() {
    return (
      this.form.controls.states.touched &&
      this.form.controls.states.dirty &&
      this.form.controls.states.invalid
    );
  }
  get notesIsInvalid() {
    return (
      this.form.controls.notes.touched &&
      this.form.controls.notes.dirty &&
      this.form.controls.notes.invalid
    );
  }

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.email;
    console.log(enteredEmail, enteredPassword);
  }
}
