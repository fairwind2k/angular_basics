import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup( {
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
        }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form);
      const formData = {...this.form.value};

      console.log('Form Data: ', formData);
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kiev',
      nl: 'Amsterdam'
    };

    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];

    console.log(city);

    this.form.patchValue( {
      address: {city}
    });
  }

  // get skill() {
  //   return this.form.get('skills') as FormArray;
  // }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
    // this.skill.push(control);
  }
}

