import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN, INTERNAL_SERVER_ERROR } from "http-status-codes";
import { HttpErrorResponse } from "@angular/common/http";
import { ToasterService } from './shared/serivices/toaster.service';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
    constructor(private injector: Injector, private zone: NgZone) {
        super()
    }

    handleError(error: HttpErrorResponse | any): Response | any {
        if (error instanceof HttpErrorResponse) {
            let httpErrorCode = error.status;

            this.zone.run(() => {
                switch (httpErrorCode) {
                    case UNAUTHORIZED:
                        this.showError("ACCESS_DENIED");
                        break;
                    case FORBIDDEN:
                        this.showError("ACCESS_DENIED");
                        break;
                    case BAD_REQUEST:
                        if (error.error != null && error.error.notifications != null) {
                            error.error.notifications.forEach(notification => {
                                this.showError(notification.code);
                            });
                            break;
                        }

                        break;
                    case INTERNAL_SERVER_ERROR:
                        this.showError("DEFAULT_ERROR_MESSAGE");
                        break;
                    default:
                        this.showError("DEFAULT_ERROR_MESSAGE");
                }
            })

            return error;
        }

        super.handleError(error);
    }

    private showError(message: string) {
        var injectorInstance = this.injector.get(ToasterService);
        if (injectorInstance)
            injectorInstance.onError(message);
    }
}
