interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(mapContainerId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(mapContainerId),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    );
  }

  addEntityMarker(entity: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng
      }
    });
  }
}
