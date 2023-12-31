import { HotelAdmin } from "./hotel-admin"
import { RoomCategory } from "./room-category"
import { RoomService } from "./room-service"

export class RoomInformation 
{
    roomid:number
    roomnumber:number
    roompriceperday:number
    roomdescription:string
    roomimageurl:string
    numberofpeople:string
    cloneHotelAdminId:number
    hotelAdmin:HotelAdmin
    roomservice: RoomService[];
    roomcategory:RoomCategory
  

    

    constructor(
      roomid:number,
      roomnumber:number,
      roompriceperday:number,
      roomdescription:string,
      roomimageurl:string,
      numberofpeople:string,
      cloneHotelAdminId:number
      
   
    ){
      this.roomid=roomid;
      this.roomnumber=roomnumber;
      this.roompriceperday=roompriceperday;
      this.roomdescription=roomdescription;
      this.roomimageurl=roomimageurl;
      this.numberofpeople=numberofpeople;
      this.cloneHotelAdminId=cloneHotelAdminId;
    }

}
