import { AbstractControl, FormGroup } from "@angular/forms";

export class AdditionalValidators {
  static PhoneNumber(control: AbstractControl) {
    if (new RegExp('^(\\+98|0)+9\\d{9}$').test(control.value) || !control.value) {
      return null;
    }
    return { phoneNumber: true };
  }
  static CheckIsASCII(control: AbstractControl) {
    return /^[\x00-\x7F]+$/.test(control.value) || !control.value ? null : { ascii: true };
  }
  static OnlyIntegerNumber(control: AbstractControl) {
    return /^[0-9]+$/.test(control.value) || !control.value ? null : { onlyIntegerNumber: true };
  }
}