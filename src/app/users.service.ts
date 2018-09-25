import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
     users = [];
    constructor(private http: Http) {
    }

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=db').map(function (response) {
            return response.json();
        }).map(response => response.results)
            .map(users => {
               // console.log(users);
                return users.map(user => {
                    return {
                        name: user.name.first + ' ' + user.name.last,
                        location: user.location.city + ' ' + user.location.street,
                        img: user.picture.large
                    };
                });
            }) ;
        }
}

/*users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
]*/
