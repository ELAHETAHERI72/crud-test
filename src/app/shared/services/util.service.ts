import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {


  public checkIsNotduplicated(arr: any[], object: any) {
     let isDuplicate :boolean =false;;
   arr.forEach(item=>{
      if(object.Firstname.trim() != item.Firstname.trim() &&
       object.Lastname.trim() != item.Lastname.trim()  &&
       object.BirthDate != item.BirthDate &&
       object.Email.trim() != item.Email.trim()){

        isDuplicate = false
         }else{
          isDuplicate =true
         }

    })
      
    return isDuplicate
  }
}
