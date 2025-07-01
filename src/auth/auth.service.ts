import { Injectable,  } from '@nestjs/common';

@Injectable()
export class AuthService {
  
    signup() {
        return "From signup";
    }

    signin() {
            return "From signin";
    }
       
    test() {
            return {msg:"From test"};
    }
}
