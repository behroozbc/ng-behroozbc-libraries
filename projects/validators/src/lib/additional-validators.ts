import { AbstractControl } from "@angular/forms";

export class AdditionalValidators{
  static PhoneNumber(control: AbstractControl) {
    if (new RegExp('^(\\+98|0)?9\\d{9}$').test(control.value) || !control.value) {
      return null;
    }
    return { phoneNumber: true };
  }
}