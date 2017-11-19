import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class SearchQueryService {
    private BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    private DETAILS_URL = 'https://www.googleapis.com/youtube/v3/videos';
    private API_TOKEN = 'AIzaSyBLr0guftLpWVEpHCVaTw9h_EbK1KQQZl0';

  constructor(private http: Http) { }

    details(query) {
      if (query === '') {
          query = 'Theory of relativity';
      }
      return this.http.get(`${this.DETAILS_URL}?part=statistics&id=${query}&key=${this.API_TOKEN}`)
          .map((res: Response) => res.json())
          .map(json => json.items);
    }

    search(query) {
        if (query === '') {
            query = 'Theory of relativity';
        }
        return this.http.get(`${this.BASE_URL}?q=${query}&part=snippet&order=viewCount&maxResults=25&key=${this.API_TOKEN}`)
            .map((res: Response) => res.json())
            .map(json => json.items);
    }

    searchbyid(query) {
            return this.http.get(`${this.DETAILS_URL}?id=${query}&fields=items(id,snippet(title))&part=snippet&key=${this.API_TOKEN}`)
            .map((res: Response) => res.json())
            .map(json => json.items);
    }

    suggestions(query) {
    return this.http.get(`http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1?q=${query}`)
    .map((res: Response) => res.json())
    .map(json => json.items.statistics);
    }
}
