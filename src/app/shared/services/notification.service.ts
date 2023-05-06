import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: "root" })

export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    return this.snackBar.open(message, "", {
      panelClass: "notification-success",
      duration: 3000,
    });
  }
  error(message: string) {
    return this.snackBar.open(message, "", {
      panelClass: "notification-error",
      duration: 3000,
    });
  }

  warn(message:string){
    return this.snackBar.open(message, "",{
      panelClass:'notification-warning',
      duration: 2000,
    })
  }

}
