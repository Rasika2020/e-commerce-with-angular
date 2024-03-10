import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return [];
    if (searchText == '') return items;

    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      return (
        it.category.toLowerCase().includes(searchText) ||
        it.price.toLowerCase().includes(searchText) ||
        it.color.toLowerCase().includes(searchText) ||
        it.description.toLowerCase().includes(searchText) ||
        it.name.toLowerCase().includes(searchText)
      );
    });
  }
}
