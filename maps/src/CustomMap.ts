// import { Company } from "./Company";
// import { User } from "./User";

export interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  colour: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  //This is not the best way to do this

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener(`click`, () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company:Company):void{
  //   new google.maps.Marker(
  //     {
  //       map:this.googleMap,
  //       position:{
  //         lat:company.location.lat,
  //         lng:company.location.lng
  //       }
  //     }
  //   );
  // };
}
