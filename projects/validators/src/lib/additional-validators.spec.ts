import { FormControl } from '@angular/forms';

import { AdditionalValidators } from './additional-validators';

describe('AdditionalValidators', () => {
  
  it('Validate Phone Number For Hamrah Aval ', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl('09123129220'))).toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('+989123129220'))).toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('09197082572'))).toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('+989197082572'))).toBeNull();
  });
  it('Validate Phone Number For Irancell', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl('09034015021'))).toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('+989034015021'))).toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('09397082572'))).toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('+989397082572'))).toBeNull();
  });
  it('Not Validate Phone Number less number', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl('090340150'))).not.toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('+9890340150'))).not.toBeNull();
  });
  it('Not Validate Phone Number more number', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl('0903401503443'))).not.toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('+98903401503443'))).not.toBeNull();
  });
  it('Not Validate Phone Number alphatic word', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl('0939708257s'))).not.toBeNull();
    expect(AdditionalValidators.PhoneNumber(new FormControl('0939708257س'))).not.toBeNull();
  });
  it('Not Validate Phone Number have phoneNumber object', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl('0931'))).toBeDefined('phoneNumber');;
  });
  it('Validate Phone Number empty string', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl(''))).toBeNull();
  });
  it('Validate CheckIsASCII empty string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl(''))).toBeNull();
  });
  it('Validate CheckIsASCII persian alphabet string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('سسسی'))).not.toBeNull();
  });
  it('Validate CheckIsASCII persian number string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('۱۱۲۳۲۱۲۳'))).not.toBeNull();
  });
  it('Validate CheckIsASCII persian mix string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('۱۱۲۳@er$۲۱۲۳'))).not.toBeNull();
  });
  it('Validate CheckIsASCII defined ascii object', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('۱۱۲۳۲۱۲۳'))).toBeDefined('ascii');
  });
  it('Validate CheckIsASCII number string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('1234'))).toBeNull();
  });
  it('Validate CheckIsASCII alpabet string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('aaazztyghf'))).toBeNull();
  });
  it('Validate CheckIsASCII symbole string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('@#45*$!)('))).toBeNull();
  });
  it('Validate CheckIsASCII mix string', () => {
    expect(AdditionalValidators.CheckIsASCII(new FormControl('sdsad4355443sasdasd@dff$$ssd'))).toBeNull();
  });
});
