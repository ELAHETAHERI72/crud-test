import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public checkIsNotduplicated(arr: any[], object: any) {
    let obj;
    arr.forEach(item => {

      if (((object.Firstname === item.Firstname) ||
        (object.Lastname === item.Lastname) ||
        (object.BirthDate === item.BirthDate) ||
        (object.Email === item.Email))) {

        obj = object
      }
    })

    return obj
  }
}
