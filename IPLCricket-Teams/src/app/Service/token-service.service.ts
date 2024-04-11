import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }
  generateToken(payload: any): string {
    // Generate JWT token with the payload
    return jwt.sign(payload, 'your_secret_key', { expiresIn: '2h' }); // Change the secret key and expiration time as needed
  }
}
