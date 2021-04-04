import { AbstractControl } from "@angular/forms";
import isEmpty from "lodash-es/isEmpty";

export class AdditionalValidators{
  static PhoneNumber(control: AbstractControl) {
    if (new RegExp('^(\\+98|0)?9\\d{9}$').test(control.value) || isEmpty(control.value)) {
      return null;
    }
    return { phoneNumber: true };
  }
}