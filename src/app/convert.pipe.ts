import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnite: string): any {
    if (!value) {
      return '';
    }
    switch (targetUnite) {
      case 'Km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not support');
    }
    return value * 1.60934;
  }
}
