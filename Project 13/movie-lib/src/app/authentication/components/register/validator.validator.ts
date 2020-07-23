import { FormControl } from '@angular/forms';

export class CustomValidators {
  public static passwordsMatch(password: string, password2: string) {
    return (control: FormControl): { [s: string]: boolean } => {
      if (password !== password2) {
        return { passwordMismatch: true };
      }
    };
  }
}
