"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(SearchQueryService, sanitizer) {
        this.SearchQueryService = SearchQueryService;
        this.sanitizer = sanitizer;
        this.search = new forms_1.FormControl();
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.myUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + 'abcd');
        this.results =
            this.search.valueChanges
                .debounceTime(1000)
                .switchMap(function (query) { return SearchQueryService.search(query); });
    }
    HeroDetailComponent.prototype.videoplay = function (event, item) {
        this.myUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + item);
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
