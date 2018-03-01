import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwd'
})
export class PasswdPipe implements PipeTransform {

  transform(value: string, isEnabled: boolean = true): string {
    console.log('valueeeeee: ', value);
    console.log('isEnableddddd: ', isEnabled);
    return isEnabled ? "********" : value;
  }

}
