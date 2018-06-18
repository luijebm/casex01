


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {

        console.info('-- SearchFilterPipe transform() value:', value,' search:', search);


        if (!search) {
            return value;
        }
        let solution = value.filter(v => {
            if (!v) {
                return;
            }
            return (v.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
                    v.code.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
                    v.description.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        });
        return solution;
    }
}