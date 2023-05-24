import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform( array: Array<any>, orderField: any, orderType: boolean ): Array<any> {
    array.sort( ( a: any, b: any ) => {
        let ae = a[ orderField ];
        let be = b[ orderField ];
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
        if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
        if ( ae == be ) return 0;
        return orderType ? (ae > be ? -1 : 1) : (be> ae ? -1 : 1);
    } );
    return array;
  }
}
