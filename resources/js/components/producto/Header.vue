<template>
    <div class="bannerContainer">
        <div class="containerFluid" v-show="!loading">
            <div class="gridContainer">
                <div>
                    <!-- Carrusel principal -->
                    <Splide
                        :options="mainOptions"
                        ref="mainSplide"
                        class="spileMain"
                        >
                        <SplideSlide v-for="(image, index) in images" :key="index">
                            <div class="imgContainer">
                                <img :src="image"  alt="Imagen grande" />
                            </div>
                        </SplideSlide>
                    </Splide>
                    <!-- Carrusel de thumbnails -->
                        <div class="thumbContainer">
                        <Splide
                            :options="thumbOptions"
                            ref="thumbSplide"
                            class="spliThumbContainer"
                            >
                            <SplideSlide
                                v-for="(image, index) in images"
                                :key="'thumb-' + index"
                                @click="goToSlide(index)"
                            >
                                <img :src="image" alt="Miniatura" />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div>
                    <div class="infoMainContainer">
                        <div class="tagContainer DescripcionRegular txtVerde">
                            Aceites esenciales
                        </div>
                        <h1 class="titularGrande fontWeight200 txtGrisOscuro4">Aceite esencial <br />de eucalipto</h1>
                        <p class="subtitleContainer DescripcionRegular"><span>Malaleuca alternifolia - </span>Destilado 100% puro</p>
                        <div class="priceContainer">
                            <div class="viewContent DescripcionRegular txtBlanco">15 ml</div>
                            <p class="DescripcionGrande txtGrisOscuro2">S./ 40.00</p>
                        </div>
                        <div class="descripcionCortaContainer DescripcionRegular">
                            <ul>
                                <li>Supresor de la tos, expectorante, combate la sequedad nasal y descongestiona la nariz. Ideal para vaporizar e inhalar.</li>
                                <li>Antiinflamatorio, alivia dolores musculares, reumáticos y artríticos.</li>
                                <li>Mejora la atención y concentración.</li>
                                <li>Antiséptico, ayuda a combatir piojos, caspa y dermatitis capilar.</li>
                                <li>Repelente natural.</li>
                            </ul>
                        </div>
                        <div class="addtoCartContainer">
                            <div class="quantityCartContainer">
                                <button class="quantityBtn circuloRegular txtVerde DescripcionMediano" @click="decrease(1)">
                                    -
                                </button>
                                <input 
                                    type="number" 
                                    class="DescripcionRegular txtGrisOscuro4" 
                                    :value="getQuantity(1)" 
                                    @input="updateManualQuantity($event, 1)"
                                    name="quantity" 
                                    min="1"
                                    max="99"
                                />
                                <button class="quantityBtn circuloRegular txtVerde DescripcionMediano" @click="increase(1)">
                                    +
                                </button>
                            </div>
                            <div class="btnAddToCart">
                                <button name="add" class="btnGlobal btnAddCart" @click="agregarAlCarrito({ id: 1, name: 'Producto A', price: 25 })">
                                    <div>
                                        <img :src="iconCart" />
                                    </div>
                                    <p class="DescripcionRegular txtBlanco">
                                        AÑADIR AL CARRITO
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div class="productoRelacionadosContainer1">
                            <div class="headerContainer">
                                <h2 class="DescripcionRegular fontWeight500 grisOscuro4">Va bien con:</h2>
                            </div>
                            <div class="listItemsProducts">
                                <div class="itemContainer">
                                    <div class="detailProduct">
                                        <div class="pictureContainer">
                                            <img :src="images[0]" alt=""/>
                                        </div>
                                        <div class="detailContainer">
                                            <h2 class="DescripcionRegular txtVerde">Perfumes Naturales</h2>
                                            <p class="DescripcionRegular grisOscuro2 fontWeight400">Perfume natural de naranja</p>
                                            <h3 class="DescripcionRegular grisOscuro2 fontWeight400">S/ 20.00</h3>
                                        </div>
                                    </div>
                                    <div class="addItemProduct">
                                        <button class="circuloRegular txtVerde DescripcionMediano">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="deliveryContainer">
                            <div class="itemDelivery">
                                <div class="circuloContainer2">
                                    <img :src="imgDelivery1" alt="HASTA 30 DÍAS DE  RETORNO" />
                                </div>
                                <p class="DescripcionMediano2 txtGrisOscuro2 fontWeight500">
                                    HASTA 30 <br />
                                    DÍAS DE <br />
                                    RETORNO
                                </p>
                            </div>
                            <div class="itemDelivery">
                                <div class="circuloContainer2">
                                    <img :src="imgDelivery2" alt="HASTA 30 DÍAS DE  RETORNO" />
                                </div>
                                <p class="DescripcionMediano2 txtGrisOscuro2 fontWeight500">
                                    ENVIO <br />
                                    GRATIS*
                                </p>
                            </div>
                            <div class="itemDelivery">
                                <div class="circuloContainer2">
                                    <img :src="imgDelivery3" alt="HASTA 30 DÍAS DE  RETORNO" />
                                </div>
                                <p class="DescripcionMediano2 txtGrisOscuro2 fontWeight500">
                                    SIN CRUELDAD <br />
                                    ANIMAL
                                </p>
                            </div>
                            <div class="itemDelivery">
                                <div class="circuloContainer2">
                                    <img :src="imgDelivery4" alt="HASTA 30 DÍAS DE  RETORNO" />
                                </div>
                                <p class="DescripcionMediano2 txtGrisOscuro2 fontWeight500">
                                    EMBALAJE <br />
                                    ECOLÓGICO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useCartStore } from '@/js/stores/cart';
    import { useCartPanel } from '@/js/stores/useCartPanel';

    import { useRoute } from 'vue-router';
    import '@splidejs/splide/dist/css/splide.min.css';
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    const route = useRoute();
    const slug = route.params.slug;
    const loading = ref(true);
    const iconCart = '/images/frontend/cart.svg';
    const imgDelivery1 = '/images/frontend/dia.svg';
    const imgDelivery2 = '/images/frontend/carro.svg';
    const imgDelivery3 = '/images/frontend/animal.svg';
    const imgDelivery4 = '/images/frontend/ecologico.svg';
    const images = [
        '/images/frontend/producto1.png',
        '/images/frontend/producto2.png',
        '/images/frontend/producto1.png',
        // Puedes cargar dinámicamente con una API de Laravel
    ];

    const mainSplide = ref(null);
    const thumbSplide = ref(null);

    const cart = useCartStore();
    const cartPanel = useCartPanel();
    const mainOptions = {
        type: 'slide',        // Desliza en lugar de hacer fade
        perPage: 1,           // Una imagen por slide (esto es importante)
        heightRatio: 0.5,     // Ajusta la altura respecto al ancho del contenedor
        pagination: false,    // Oculta los dots
        arrows: false,         // Si quieres flechas (puedes dejarlo en false si no)
        drag: true,           // Habilita arrastrar con mouse/touch
        cover: true,          // Hace que la imagen cubra el contenedor (útil si usas <img>)
        lazyLoad: 'nearby',   // (opcional) mejora carga si hay muchas imágenes
        rewind: true,         // (opcional) vuelve al inicio al llegar al final
    };

    const thumbOptions = {
        fixedWidth: 100,
        fixedHeight: 64,
        isNavigation: true,
        gap: 10,
        pagination: false,
        arrows: false,
        drag: true,
        focus: 'center',
        cover: true,
    };

    function getQuantity(productId) {
        return cart.getQuantity(productId);
    }

    function updateManualQuantity(event, productId) {
        const value = parseInt(event.target.value)
        if (value >= 1 && value <= 99) {
            cart.updateQuantity(productId, value)
        }
    }

    function increase(productId) {
        cart.increaseQuantity(productId);
    }
    function decrease(productId) {
        cart.decreaseQuantity(productId);
    }
    function agregarAlCarrito(producto) {
        cart.addToCart(producto);
        cartPanel.open();
    }

    function goToSlide(index) {
        mainSplide.value?.go(index);
    }

    // function syncThumbnails(splide) {
    //     const newIndex = splide.index;
    //     console.log('Main moved to:', newIndex);
    //     thumbSplide.value?.go(newIndex);
    // }

    onMounted(async () => {
        if (typeof window.showTransition === 'function') {
            window.showTransition()
        };
        // Simula carga del producto
        await new Promise(resolve => setTimeout(resolve, 1500))

        loading.value = false;
        // Refresca Splide para asegurar que se renderiza correctamente
        // Forzar refresco para que Splide re-calibre los slides
        setTimeout(() => {
            if (mainSplide.value?.splide) {
                mainSplide.value.splide.refresh(); // ← Usa `.splide.refresh()`
            }
        }, 100); // espera un poco por si el DOM aún no está listo

        if (typeof window.hideTransition === 'function') {
            window.hideTransition();
        };

        const mainImageProduct = mainSplide.value?.splide;
        if (mainImageProduct) {
            mainImageProduct.on('moved', (newIndex) => {
                if (thumbSplide.value?.splide) {
                    thumbSplide.value.splide.go(newIndex);
                };
            });
        };
    })
</script>
