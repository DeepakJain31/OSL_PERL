"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var SearchQueryService = (function () {
    function SearchQueryService(http) {
        this.http = http;
        this.BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
        this.API_TOKEN = 'AIzaSyBLr0guftLpWVEpHCVaTw9h_EbK1KQQZl0';
    }
    SearchQueryService.prototype.search = function (query) {
        if (query === '') {
            query = 'Theory of relativity';
        }
        return this.http.get(this.BASE_URL + "?q=" + query + "&part=snippet&order=viewCount&maxResults=25&key=" + this.API_TOKEN)
            .map(function (res) { return res.json(); })
            .map(function (json) { return json.items; });
    };
    SearchQueryService.prototype.suggestions = function (query) {
        return this.http.get("http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1?q=" + query)
            .map(function (res) { return res.json(); })
            .map(function (json) { return json.items; });
    };
    return SearchQueryService;
}());
SearchQueryService = __decorate([
    core_1.Injectable()
], SearchQueryService);
exports.SearchQueryService = SearchQueryService;
