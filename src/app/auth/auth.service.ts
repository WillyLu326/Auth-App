import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {
    
    auth0 = new auth0.WebAuth({
        clientID: 'earBAaq-hjrVHGOt6BB2FmiILklKas89',
        domain: 'willy-project.auth0.com',
        redirectUri: 'http://localhost:4200',
        responseType: 'token id_token'
    });

    constructor() { }

    login() {
        this.auth0.authorize();
    }    
}