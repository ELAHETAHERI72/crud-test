import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public checkIsNotduplicated(arr: any[], object: any) {
    if (
      arr.filter((item) => {
        item.Firstname.trim() == object.Firstname.trim() &&
          item.Lastname.trim() == object.Lastname.trim() &&
          item.BirthDate.trim() == object.BirthDate.trim();
      })
    ) {
      return object;
    }
  }
}
