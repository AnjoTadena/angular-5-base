;
import { LoginComponent } from './core/components/pages/login/login.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { AuthModule } from 'auth/auth.module';
import { LoggerService } from 'shared/services';
import { GlobalErrorService } from 'shared/services/global-error/global-error.service';
import { SharedModule } from 'shared/shared.module';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    /**
     * Change default error handler using custom global error handler
     */
    {
      provide: ErrorHandler,
      useClass: GlobalErrorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
