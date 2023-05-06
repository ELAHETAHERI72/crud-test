import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public checkIsNotduplicated(arr: any[], object: any) {
    let obj;

    if (object.id != null) {

      let arrayWithOtCustomObject = arr.filter(item => {
        return item.id != object.id
      });

      arrayWithOtCustomObject.forEach(valu => {

        if (((object.Firstname === valu.Firstname) ||
          (object.Lastname === valu.Lastname) ||
          (object.BirthDate === valu.BirthDate) ||
          (object.Email === valu.Email))) {

          return obj = object
        }
      })


    } else if (!object.id) {
      arr.forEach(item => {

        if (((object.Firstname === item.Firstname) ||
          (object.Lastname === item.Lastname) ||
          (object.BirthDate === item.BirthDate) ||
          (object.Email === item.Email))) {

          obj = object
        }
      })
    }

    return obj
  }
}
