import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})

// Creating custom search filter pipe. A goal is to filter posts by word(string).

export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim())  {
      return posts;
    }
    return posts.filter(post => {
      return post[field].toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }

}
