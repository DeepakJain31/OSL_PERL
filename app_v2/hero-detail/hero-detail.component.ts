import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchQueryService} from '../search-query.service';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Component({
    selector: 'app-hero-detail',
    providers: [SearchQueryService],
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    cookies: Object;
    titles: string;
    keys: Array<string>;
    search = new FormControl();
    results: Observable<any>;
    details: Observable<any>;
    saved: Observable<any>;
    myUrl;
    baseUrl = 'https://www.youtube.com/embed/';
    public SvideoId: string;

    ngOnInit() {
        this.update();
    }

    constructor(private SearchQueryService: SearchQueryService, private sanitizer: DomSanitizer, private http: Http) {
    this.changeVideo('abcd');

    /* Here we retriev the results from query */
    this.results =

            this.search.valueChanges
                .debounceTime(1000)
                .switchMap(query => SearchQueryService.search(query));

    }

    /* Here we pass cookies ',' separeted */
    update() {
        this.cookies = Cookie.getAll();
        this.keys = Object.keys(this.cookies);
        this.SearchQueryService.searchbyid(this.keys.join(',')).subscribe(res => this.saved = res);
    }

    
    /* Clicking on the saved video */
    public savedVideoPlay(title, item) {
        this.search.setValue(title);
        this.changeVideo(item);
    }

    public deletevideo(item) {
        Cookie.delete(item);
        this.update();
    }

    /* Function can be called by clicking on a particular video */
    public videoplay(item) {
        console.log(item);
        this.changeVideo(item);
        this.SearchQueryService.details(item).subscribe(res => this.details = res);
        this.SvideoId = item;
    }

     /* Function can be called by clicking on a '+' to save into cookies */
    public addCoockie() {
        Cookie.set(this.SvideoId, this.SvideoId );
        this.update();
    }

    public download() {
        console.log(this.SvideoId);
        //window.alert("Video will be available for download in drive!");
        return this.http.get('http://localhost:8888/cgi-bin/perlcgi.pl?a=https://www.youtube.com/watch?v='+this.SvideoId)
        .subscribe(
            () => { 
                console.log("Success");
              
            }, //For Success Response
            err => {console.error(err)} //For Error Response
        ); 

       
    }


    /* Sanitizer is important since I am using iframe. */
    public changeVideo(videoid) {
        this.myUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + videoid);
    }


}
