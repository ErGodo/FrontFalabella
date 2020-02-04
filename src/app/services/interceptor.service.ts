import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  browser: string; 
  os: string;
  deviceInfo = null;

  constructor(private deviceService: DeviceDetectorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.deviceInfo = this.deviceService.getDeviceInfo();

    this.browser = this.deviceInfo.browser
    this.os = this.deviceInfo.os_version

    console.log(this.deviceInfo)

    const headers = new HttpHeaders({
      'x-user-browser': this.browser,
      'x-user-os': this.os
    });

    console.log(headers)

    req = req.clone({headers});

    return next.handle(req);
  }
}
