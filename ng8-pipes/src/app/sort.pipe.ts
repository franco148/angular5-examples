import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(serversArray: any[], propName: string): any {
    const other = serversArray.sort((server1, server2) => {
      if (server1[propName] > server2[propName]) {
        return 1;
      }

      if (server1[propName] < server2[propName]) {
        return -1;
      }
      
      return 0;
    });
    return serversArray;
  }

}
