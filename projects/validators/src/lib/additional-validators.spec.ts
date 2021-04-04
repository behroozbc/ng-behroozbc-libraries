import { TestBed } from '@angular/core/testing';
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
  it('Validate Phone Number empty string', () => {
    expect(AdditionalValidators.PhoneNumber(new FormControl(''))).toBeNull();
  });
});
