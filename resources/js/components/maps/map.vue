<template>
    <div class="mapaContainer" id="seccion2">
        <div class="containerFluid">
            <div class="headerMapa">
                <h2 class="tituloPequeno colorTxtAzul">Hay un centro de canje cerca de ti</h2>
                <p class="descripcionGrande colorTxtAzul">Encuentra dónde canjear tu Gloritaza.</p>
                <div class="filtrosContent">
                    <div class="ubicacionBox">
                        <label for="" class="descripcionGrande colorTxtAzul pc">Ubicación</label>
                        <div class="custom-select-container">
                            <!-- <img :src="iconDown" class="arrowDownSelect" /> -->
                            <select
                                v-model="filterType"
                                class="custom-select"
                                >
                                <option value="" selected>Elige Ubicación</option>
                                <option v-for="tipo in alltipos" :key="tipo.value" :value="tipo.value">
                                    {{ tipo.name }}
                                </option>
                            </select>
                        </div>    
                    </div>
                    <div class="centerSearchContainer">
                        <div class="searchContainer">
                            <div class="inputSeachContainer">
                                <input class="descripcionGrande colorTxtAzul" ref="inputRef" type="text" v-model="searchQuery" placeholder="Buscar por distrito o dirección" @keyup.enter="applyFilters" />
                                <img :src="imgSearch" alt="" />
                            </div>
                            <!-- <div class="btnContainer">
                                <button class="descripcionGrande btnGral active colorTxtBlanco">Buscar</button>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="movil">
                    <div class="centerSearchContainer">
                        <div class="searchContainer">
                            <div class="inputSeachContainer">
                                <input class="descripcionGrande colorTxtAzul" ref="inputRef" type="text" v-model="searchQuery" placeholder="Buscar por distrito o dirección" @input="applyFilters" />
                                <img :src="imgSearch" alt="" />
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="map-container">
                <div class="pc">
                    <div class="listContainer">
                        <div class="lisScrollContainer">
                            <div v-for="location in locations" :key="location.id" class="location-item">
                                <div @click="centerOnLocation(location)">
                                    <h3 class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="iconlocal" :alt="location.name"/>
                                        <span>{{ location.name }}</span>
                                    </h3>
                                    <p class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="iconping" :alt="location.address"/>
                                        <span>{{ location.address }}</span>
                                    </p>
                                    <p class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="iconhorario" :alt="location.address"/>
                                        <span>{{ location.hours }}</span>
                                    </p>
                                    <p class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="icondistancia" :alt="location.address"/>
                                        <span>Distancia: ~{{ calculateDistancePlaceholder(location) }} km</span>
                                    </p>
                                </div>
                                <div class="btnContainer">
                                    <button class="btnGral" @click="openDirections(location)">Cómo llegar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map" class="mapGoogleContainer"></div>
            </div>
            <div class="movil">
                
                <div class="listadoUbicacionMovil">
                    <div class="listContainer">
                        <div class="lisScrollContainer">
                            <div v-for="location in locations" :key="location.id" class="location-item">
                                <div @click="centerOnLocation(location)">
                                    <h3 class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="iconlocal" :alt="location.name"/>
                                        <span>{{ location.name }}</span>
                                    </h3>
                                    <p class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="iconping" :alt="location.address"/>
                                        <span>{{ location.address }}</span>
                                    </p>
                                    <p class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="iconhorario" :alt="location.address"/>
                                        <span>{{ location.hours }}</span>
                                    </p>
                                    <p class="alignItems descripcionMediano colorTxtAzul">
                                        <img :src="icondistancia" :alt="location.address"/>
                                        <span>Distancia: ~{{ calculateDistancePlaceholder(location) }} km</span>
                                    </p>
                                </div>
                                <div class="btnContainer">
                                    <button class="btnGral" @click="openDirections(location)">Cómo llegar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
const selectedOption= ref(null);
// Refs for state management
const googleMapsApiKey = import.meta.env.VITE_MAP_API_KEY; // Reemplaza con tu clave
const center = ref({ lat: -12.046374, lng: -77.042793 }); // Coordenadas para el mapa
const initialCenter = ref({ lat: -12.046374, lng: -77.042793 }); // Coordenadas iniciales
const allLocations = ref([]);
const alltipos = ref([]);
const locations = ref([]);
const filterType = ref("");
const searchQuery = ref('');
const selectedLocation = ref(null);
const radiusKm = 1; // Radio de 1 km
const map = ref(null); // Referencia al mapa
const infoWindow = ref(null); // Referencia a la InfoWindow
const isMapReady = ref(false); // Bandera para indicar si el mapa está listo
const mapId = import.meta.env.VITE_ID_MAP;  // Reemplaza con tu Map ID
const imgSearch = '/images/search.svg';
const inputRef = ref(null); // Ref para el input de búsqueda
const autocomplete = ref(null); // Ref para el autocompletado

const iconlocal='/images/iconlocal.svg';
const iconping='/images/iconping.svg';
const iconhorario='/images/iconhorario.svg';
const icondistancia='/images/icondistancia.svg';
const iconDown='/images/down.svg'
const fetchTipos = async () => {
    try {
        const response = await axios.get('/data/tipos.json');
        const typesTemp = response.data.sort((a, b) => 
                            a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
                        );
        alltipos.value = typesTemp;
    } catch (error) {
        console.error('Error fetching locations:', error);
    }
}

const fetchLocations = async () => {
    try {
        const response = await axios.get('/data/locations.json');
        allLocations.value = response.data;
        applyFilters();
    } catch (error) {
        console.error('Error fetching locations:', error);
    }
};

const applyFilters = () => {
    let filtered = [...allLocations.value];

    if (filterType.value) {
        filtered = filtered.filter(location => location.type === filterType.value);
    }

    if (searchQuery.value) {

        const queryWords = searchQuery.value.toLowerCase().split(/[\s,]+/).filter(word => word.trim() !== '');

        // Paso 1: Filtrar primero por distrito
        let filteredByDistrito = filtered.filter(location => {
            const distritoLower = location.distrito.toLowerCase();
            // console.log(`busqueda: ${distritoLower}`)
            return queryWords.some(word => distritoLower.includes(word));
        });

          
        if (filteredByDistrito.length === 0) {
            // Paso 2: Si no hay coincidencias en distrito, buscar en address
            filtered = filtered.filter(location => {
                const addressLower = location.address.toLowerCase();
                return queryWords.some(word => addressLower.includes(word));
            });
        } else {
            filtered = filteredByDistrito; // Usar solo los resultados de distrito si hay coincidencias
        }
    }

    // Ordenar por distancia de menor a mayor
    filtered.sort((a, b) => {
        const distanceA = calculateDistance(
        initialCenter.value.lat,
        initialCenter.value.lng,
        parseFloat(a.lat),
        parseFloat(a.lng)
        );
        const distanceB = calculateDistance(
        initialCenter.value.lat,
        initialCenter.value.lng,
        parseFloat(b.lat),
        parseFloat(b.lng)
        );
        return distanceA - distanceB; // Orden ascendente (menor a mayor)
    });

    locations.value = filtered;
    console.log('Final locations count:', locations.value.length);
    if (isMapReady.value && map.value) {
        // 🔹 Limpiar marcadores anteriores
        if (map.value.markers) {
            map.value.markers.forEach(marker => marker.setMap(null));
        }
        map.value.markers = [];

        // 🔹 Crear marcadores normales

        locations.value.forEach(location => {
            const marker = new window.google.maps.Marker({
                map: map.value,
                position: { lat: parseFloat(location.lat), lng: parseFloat(location.lng) },
                title: location.name,
                icon: getMarkerIcon(location.type), // <-- aquí el icono correcto
            });

            // Al hacer clic en un marcador abrir InfoWindow
            marker.addListener('click', () => openInfoWindow(location));

            map.value.markers.push(marker);
        });
    }
    
    

};


function getMarkerIcon(type) {
    console.log('icon')
    const image = "/images/location.png";
    const isMobile = window.innerWidth < 768;
    // Medidas según dispositivo
    const size = isMobile ? new google.maps.Size(25, 21) : new google.maps.Size(35, 30);


    return {
        url: image,
        scaledSize: size, // aquí defines el tamaño final del ícono
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(size.width / 2, size.height), // ajusta el "punto de apoyo"
    };
}

const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const toRad = (value) => (value * Math.PI) / 180;

const centerOnLocation = (location) => {
    center.value = { lat: parseFloat(location.lat), lng: parseFloat(location.lng) };
    if (map.value) {
        map.value.setCenter(center.value);
    }
    openInfoWindow(location);
};

const openInfoWindow = (location) => {
    selectedLocation.value = location;

    if (map.value && infoWindow.value) {
        infoWindow.value.setContent(`
        <div>
            <h3>${location.name}</h3>
            <p>${location.address}</p>
            <p>Horarios: ${location.hours}</p>
        </div>
        `);

        // Establecer la posición manualmente
        infoWindow.value.setPosition({
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng)
        });

        // Ahora abrir en el mapa
        infoWindow.value.open(map.value);
    }
};


const calculateDistancePlaceholder = (location) => {
    const distance = calculateDistance(
        initialCenter.value.lat,
        initialCenter.value.lng,
        parseFloat(location.lat),
        parseFloat(location.lng)
    );
    return distance.toFixed(2);
};

const setUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            initialCenter.value = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            center.value = { ...initialCenter.value };
            applyFilters();
            if (map.value) {
                map.value.setCenter(center.value);
                // 🔹 Limpiar marcador anterior si ya existe
                if (map.value.userMarker) {
                    map.value.userMarker.setMap(null);
                }

                // 🔹 Agregar marcador para tu ubicación
                map.value.userMarker = new window.google.maps.Marker({
                    position: center.value,
                    map: map.value,
                    title: "Tu ubicación",
                    icon: {
                        url: "/images/ping2.png", // usa un ícono distinto para diferenciar
                        scaledSize: new window.google.maps.Size(40, 40) // tamaño del ícono
                    }
                });
            }
        },
        (error) => {
            console.warn('Geolocation denied or error:', error);
            // Fallback a coordenadas predeterminadas
            initialCenter.value = { lat: -12.046374, lng: -77.042793 };
            center.value = { ...initialCenter.value };
            if (isMapReady.value && map.value) {
            map.value.setCenter(center.value);
                applyFilters();
            }
        },
        { timeout: 10000, enableHighAccuracy: true }
        );
    } else {
        console.warn('Geolocation is not supported by this browser.');
        initialCenter.value = { lat: -12.046374, lng: -77.042793 };
        center.value = { ...initialCenter.value };
        if (isMapReady.value && map.value) {
            map.value.setCenter(center.value);
            applyFilters();
        }
    }
};

const getDirectionsUrl = (location) => {
    const origin = `${initialCenter.value.lat},${initialCenter.value.lng}`;
    const destination = `${location.lat},${location.lng}`;
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
};

const openDirections = (location) => {
    if (typeof window !== 'undefined' && window.open) {
        window.open(getDirectionsUrl(location), '_blank');
    } else {
        console.error('Window is not available. Cannot open directions.');
    }
};

// Inicializar el mapa y marcadores


const initMap = () => {
    if (isMapReady.value) return; // Evitar recargar
    console.log('RECARGANDO');
    if (window.google && window.google.maps) {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            map.value = new window.google.maps.Map(mapElement, { center: center.value, zoom: 17, mapId });
            infoWindow.value = new window.google.maps.InfoWindow();
            isMapReady.value = true;
            console.log('Map initialized with mapId:', mapId);
            setUserLocation(); // Obtener ubicación del usuario
            fetchLocations(); // Cargar ubicaciones
            fetchTipos(); // Cargar tipos
            applyFilters(); // Renderizar marcadores iniciales
            // Inicializar el autocompletado
            if (window.google.maps.places) {
                autocomplete.value = new window.google.maps.places.Autocomplete(inputRef.value, {
                    fields: ['place_id', 'geometry', 'name', 'formatted_address'],
                    types: [], // Restringe a direcciones
                    componentRestrictions: { country: 'PE' } // Limita a Perú
                });
                autocomplete.value.addListener('place_changed', () => {
                    const place = autocomplete.value.getPlace();
                    if (place.geometry && place.geometry.location) {
                        const newCenter = {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                        };
                        center.value = newCenter;
                        initialCenter.value = newCenter; // Actualizar la ubicación inicial
                        map.value.setCenter(newCenter);
                        map.value.setZoom(17);

                        // Actualizar o crear el marcador de ubicación del usuario
                        if (map.value.userMarker) {
                            map.value.userMarker.setMap(null); // Eliminar el marcador anterior
                        }
                        map.value.userMarker = new window.google.maps.Marker({
                            position: newCenter,
                            map: map.value,
                            title: "Tu ubicación",
                            icon: {
                                url: "/images/ping2.png",
                                scaledSize: new window.google.maps.Size(40, 40),
                            },
                        });

                        // Agregar un marcador en la ubicación seleccionada
                        if (map.value.markers) {
                            map.value.markers.forEach(marker => marker.setMap(null));
                        }
                        map.value.markers = [];
                        const marker = new window.google.maps.Marker({
                            map: map.value,
                            position: newCenter,
                            title: place.name || place.formatted_address,
                            icon: getMarkerIcon('default'),
                        });
                        map.value.markers.push(marker);

                        // Actualizar searchQuery con la dirección seleccionada
                        searchQuery.value = place.formatted_address || '';
                        applyFilters(); // Reaplicar filtros con la nueva ubicación
                    }else{
                        console.error('No geometry data available for the selected place');
                    }
                });
            } else {
                console.error('Places API not loaded');
            }
            // Asegurar que la ubicación se establezca después de inicializar
            if (!center.value.lat || !center.value.lng) {
                console.log('OK MUNDO')
                setUserLocation();
            }
        } else {
        console.error('Map element not found in DOM');
        }
    } else {
        console.error('Google Maps API not loaded');
    }
};


const loadGoogleMaps = () => {
    if (isMapReady.value) return; // Evitar recargar
    // Cargar Google Maps dinámicamente
    if (!window.google) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=marker,places&callback=initMap`
        script.async = true
        script.defer = true
        script.onerror = () => console.error('Error loading Google Maps API. Check your API key and network.');
        window.initMap = () => {
        initMap();
        };
        document.head.appendChild(script)
    } else{
        initMap();
    }
    // setUserLocation();
    // fetchLocations();
    // fetchTipos();
}


// onMounted(() => {
//     // Cargar Google Maps dinámicamente
//     const script = document.createElement('script')
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=marker,places&callback=initMap`
//     script.async = true
//     script.defer = true
//     window.initMap = initMap
//     document.head.appendChild(script)
//     setUserLocation();
//     fetchLocations();
//     fetchTipos();
// });

onMounted(() => {
  const mapSection = document.getElementById('seccion2')

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadGoogleMaps()
        observer.disconnect()
      }
    }, { threshold: 0.25 }) // 25% visible
    observer.observe(mapSection)
  } else {
    // fallback: scroll listener clásico
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > window.innerHeight * 0.25) {
    //     loadGoogleMaps()
    //   }
    // })
    loadGoogleMaps();
  }
})

// onMounted(() => {
//   const mapSection = document.getElementById('seccion2');
//   setTimeout(() => {
//     loadGoogleMaps();
//   }, 500); // Retraso mínimo para no bloquear la UI
//   if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         if (!isMapReady.value) loadGoogleMaps();
//         observer.disconnect();
//       }
//     }, { threshold: 0.25 });
//     observer.observe(mapSection);
//   } else {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY > window.innerHeight * 0.25 && !isMapReady.value) {
//         loadGoogleMaps();
//       }
//     });
//   }
// });



// watch([filterType, searchQuery], applyFilters, { immediate: true });
</script>