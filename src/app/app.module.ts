import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { AuthModule } from 'auth/auth.module';
import { GlobalErrorService } from 'shared/services/global-error/global-error.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
