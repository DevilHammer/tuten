import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//const httpOptions = { headers: new HttpHeaders({'app':'APP_BCK','password':'1234','Accept':'application/json'})};
var httpOptions = {
    headers: new HttpHeaders({
        'app': 'APP_BCK',
        'password': '1234',
        'Content-Type': 'application/json'
    })
};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'test1';
        //restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';
        //restItemsUrl = 'https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl?email=testapis@tuten.cl';
        this.restItemsUrl = 'https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl?api_key=User API&email=testapis@tuten.cl';
        //this.displayHeaders();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRestItems();
    };
    AppComponent.prototype.displayHeaders = function () {
        var header = new HttpHeaders();
        header.append('app', 'APP_BCK');
        header.append('password', '1234');
        header.append('Accept', '22');
    };
    // Read all REST Items
    AppComponent.prototype.getRestItems = function () {
        var _this = this;
        this.restItemsServiceGetRestItems()
            .subscribe(function (restItems) {
            _this.restItems = restItems;
            console.log(_this.restItems);
        });
    };
    // Rest Items Service: Read all REST Items
    AppComponent.prototype.restItemsServiceGetRestItems = function () {
        return this.http
            .put(this.restItemsUrl, User, httpOptions)
            .pipe(map(function (data) { return data; }));
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map