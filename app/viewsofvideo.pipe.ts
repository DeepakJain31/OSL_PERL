import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewsofvideo'
})
export class ViewsofvideoPipe implements PipeTransform {

  transform(value: number): string {
    let message = value.toString();
    if (value > 1000 && value < 1000000) {
      message = Math.round(value / 1000) + ' K';
    }else if (value > 1000000) {
      message = Math.round(value / 1000000) + 'M';
    }
    return message;
  }

}
