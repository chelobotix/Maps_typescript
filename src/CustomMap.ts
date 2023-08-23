/// <reference types="@types/google.maps" />

interface Mapabble {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(containerId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(containerId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mapabble): void {
    const newMark = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    newMark.addListener('click', () => {
      console.log(mappable);
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, newMark);
    });
  }
}

export { CustomMap };
