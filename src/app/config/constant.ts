import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = environment.baseUrl;

    public readonly API_AUTH: string = this.API_ENDPOINT + 'auth/';
    public readonly API_USER: string = this.API_ENDPOINT + 'users/';
    public readonly API_Role: string = this.API_ENDPOINT + 'roles/';
    
    public readonly API_200: string = this.API_ENDPOINT + 'ln/twhinh200120/';
    public readonly API_204: string = this.API_ENDPOINT + 'ln/twhinh204120/';
    public readonly API_220: string = this.API_ENDPOINT + 'ln/twhinh220120/';
    public readonly API_movements: string = this.API_ENDPOINT + 'scantech/movements/';
    public readonly API_products: string = this.API_ENDPOINT + 'scantech/products/';
    public readonly API_accounts: string = this.API_ENDPOINT + 'scantech/accounts/';
    
}

