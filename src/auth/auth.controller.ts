import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
class AuthController {
    constructor(private authService:AuthService){}
    
    @Post('signup')
    signup() {
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
    @Post('test')
    test() {
        return this.authService.test();
    }
}

export { AuthController };