import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {
    
    auth0 = new auth0.WebAuth({
        clientId: '',
        domain: '',
        redirectUri: '',
        responseType: ''
    });

    constructor() { }

}