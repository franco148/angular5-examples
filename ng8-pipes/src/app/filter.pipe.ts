import { Pipe, PipeTransform } from '@angular/core';
import { Button } from 'protractor';
import { attachEmbeddedView } from '@angular/core/src/view';
import { timeout } from 'q';
import { areAllEquivalent, not } from '@angular/compiler/src/output/output_ast';
import { AbstractControlDirective } from '@angular/forms';

// Currently we have an 'issue', it happens when you are filtering, then clicking Add Server Button,
// You will not able to see those changes, however, those new items will be added.
// It may be a bad idea to filter or recalculate the pipe all the time, but it will depend on the scenario
// you are.
// For fixing the issue mentioned above, we need to specify if this is a pure pipe or not.
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propName: string): any {
    if (value.length === 0 || filterStr === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {      
      if (item[propName] === filterStr) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
