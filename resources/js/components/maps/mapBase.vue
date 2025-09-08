<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const googleMapsApiKey = 'AIzaSyCtBNQ-hz7ZqkqXQw7DKCczBLCk5Zu1KFs'; 

// Array de tiendas
const stores = [
  {
    id: 1,
    name: "Agencia - BCP LAB",
    address: "Av. Melgarejo N° 450, Urb. Santa Patricia Etapa",
    lat: -12.046374,
    lng: -77.042793,
    type: "agencia",
    hours: "Lun a Vie: 9:00 - 18:00 | Sáb: 9:00 - 13:00"
  },
  {
    id: 2,
    name: "Cajero - Agencia BCP - LAB 1",
    address: "Av. Melgarejo 450, Santa Patricia",
    lat: -12.046200,
    lng: -77.042600,
    type: "cajero",
    hours: "Lun a Dom: 24 hrs."
  },
  {
    id: 3,
    name: "Agencia - BCP Centro",
    address: "Av. Javier Prado Este 123, Surco",
    lat: -12.105000,
    lng: -77.020000,
    type: "agencia",
    hours: "Lun a Vie: 9:00 - 18:00 | Sáb: 9:00 - 13:00"
  },
  {
    id: 4,
    name: "Agente - BCP San Juan",
    address: "Av. España 456, San Juan de Lurigancho",
    lat: -12.050000,
    lng: -77.030000,
    type: "agente",
    hours: "Lun a Vie: 10:00 - 16:00"
  },
  {
    id: 5,
    name: "Cajero - BCP Lircay",
    address: "Av. Lircay 789, La Molina",
    lat: -12.080000,
    lng: -76.950000,
    type: "cajero",
    hours: "Lun a Dom: 24 hrs."
  },
  {
    id: 6,
    name: "Cajero - BCP Plaza San Miguel",
    address: "CC, Plaza San Miguel, Av. de la Marina 2040, San Miguel 15088",
    lat: -12.0774814,
    lng: -77.0875486,
    type: "cajero",
    hours: "Lun a Dom: 24 hrs."
  }
]

// Función para crear el ícono según el tipo
// function getMarkerIcon(type) {
//   const colors = {
//     agencia: "blue",
//     cajero: "green",
//     agente: "orange"
//   }
//   const svg = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
//       <circle cx="15" cy="15" r="12" fill="${colors[type] || "red"}" />
//     </svg>
//   `
//   return new DOMParser().parseFromString(svg, "image/svg+xml").documentElement
// }

function getMarkerIcon(type) {
  const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  return image; // Devuelve la URL de la imagen
}

function initMap() {
  const center = { lat: stores[0].lat, lng: stores[0].lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center
  });

  stores.forEach(store => {
    const marker = new google.maps.Marker({
      position: { lat: store.lat, lng: store.lng },
      map,
      title: store.name,
    //   icon: {
    //     url: `data:image/svg+xml;utf8,${encodeURIComponent(getMarkerIcon(store.type).outerHTML)}`,
    //     scaledSize: new google.maps.Size(30, 30)
    //   }
    icon: getMarkerIcon(store.type) // Usa la URL de la imagen
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${store.name}</strong><br>${store.address}<br>${store.hours}`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

onMounted(() => {
  // Cargar Google Maps dinámicamente
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=marker&callback=initMap`
  script.async = true
  script.defer = true
  window.initMap = initMap
  document.head.appendChild(script)
})
</script>

<style>
#map {
  height: 600px;
  width: 100%;
}
</style>
