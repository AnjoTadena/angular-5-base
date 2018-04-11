import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'app/app.component';
import { AuthModule } from 'auth/auth.module';
import { LoggerService } from 'shared/services';
import { GlobalErrorService } from 'shared/services/global-error/global-error.service';
import { SharedModule } from 'shared/shared.module';
import { CoreModule } from 'app/core/core.module';
import { routes } from './routes/app.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
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
