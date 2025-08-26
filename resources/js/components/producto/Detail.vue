<template>
    <div class="detailSeccionContainer">
        <div class="florGrandeImg">
            <img :src="florGrande1" />
        </div>
        <div class="florGrandeImg pos2">
            <img :src="florGrande2" />
        </div>
        <div class="containerFluid">
            <div class="titleContainer">
                <h2 class="titularGrande txtVerde fontEditorialItalic">Todo acerca del</h2>
                <h3 class="titularGrande txtGrisOscuro6 fontWeight300">producto</h3>
            </div>
            <div class="tabsHeader">
                <div class="tabActive" ref="refTabActive"></div>
                <div class="itemTab DescripcionRegular fontWeight400" ref="refTab1" @click="mostrarTabs(0)">Acerca del producto</div>
                <div class="itemTab DescripcionRegular fontWeight400" ref="refTab2" @click="mostrarTabs(1)">¿Cómo usarlo?</div>
            </div>
            <div class="tabsBody">
                <div class="gridContainer" v-show="activeTab === 0">
                    <div>
                        <img :src="imgTba1" alt=""/>
                    </div>
                    <div>
                        <h2>Acerca del producto</h2>
                        <p>De aroma herbal profundo y refrescante, es usado por ser descongestionante, mejorar la respiración y aliviar el dolor de cabeza. También es usado como insumo en: jabones, cremas, aceites de masajes, etc. 100% puro y natural 100%. Aceite esencial de Eucalipto, destilado con vapor de agua.</p>
                        <ul>
                            <li>
                                Anticatarral, antitusígeno, expectorante y mucolítico.
                            </li>
                            <li>
                                Antiséptico, balsámico y antiinflamatorio.
                            </li>
                            <li>
                                Se usa principalmente en la industria farmacéutica (elaboración jarabes antitusígenos).
                            </li>
                            <li>
                                Usado para aliviar dolores de cabeza.
                            </li>
                        </ul>
                        <p>
                            Baño, Inhalación, Aerosol del sitio, Evaporador, Incienso, Masaje y Cosmética. No exponer a la luz o el aire. No ingerir, evitar el contacto con los ojos o mucosa.
                        </p>
                        <h2>Uso</h2>
                        <p>
                            Baño, Inhalación, Aerosol del sitio, Evaporador, Incienso, Masaje y Cosmética. No exponer a la luz o el aire. No ingerir, evitar el contacto con los ojos o mucosa.
                        </p>
                    </div>
                </div>
                <div class="gridContainer" v-show="activeTab === 1">
                    <div>
                        <img :src="imgTba1" alt=""/>
                    </div>
                    <div>
                        <h2>¿Cómo usarlo?</h2>
                        <p>De aroma herbal profundo y refrescante, es usado por ser descongestionante, mejorar la respiración y aliviar el dolor de cabeza. También es usado como insumo en: jabones, cremas, aceites de masajes, etc. 100% puro y natural 100%. Aceite esencial de Eucalipto, destilado con vapor de agua.</p>
                        <ul>
                            <li>
                                Anticatarral, antitusígeno, expectorante y mucolítico.
                            </li>
                            <li>
                                Antiséptico, balsámico y antiinflamatorio.
                            </li>
                            <li>
                                Se usa principalmente en la industria farmacéutica (elaboración jarabes antitusígenos).
                            </li>
                            <li>
                                Usado para aliviar dolores de cabeza.
                            </li>
                        </ul>
                        <p>
                            Baño, Inhalación, Aerosol del sitio, Evaporador, Incienso, Masaje y Cosmética. No exponer a la luz o el aire. No ingerir, evitar el contacto con los ojos o mucosa.
                        </p>
                        <h2>Uso</h2>
                        <p>
                            Baño, Inhalación, Aerosol del sitio, Evaporador, Incienso, Masaje y Cosmética. No exponer a la luz o el aire. No ingerir, evitar el contacto con los ojos o mucosa.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="bannerFullProducto" ref="containerBannerBg">
            <img :src="bannerP" ref="imagenBannerBg"/>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);
    const florGrande1 = '/images/frontend/florGrande1.png';
    const florGrande2 = '/images/frontend/florGrande2.png';
    const refTabActive = ref(null);
    const refTab1 = ref(null);
    const refTab2 = ref(null);
    const activeTab = ref(0); // 0 para la primera pestaña, 1 para la segunda
    const imgTba1 = '/images/frontend/tabportada.png';
    const bannerP = '/images/frontend/bannerP.webp';
    const imagenBannerBg = ref(null);
    const containerBannerBg = ref(null);

    const mostrarTabs = (valor) => {
        activeTab.value = valor;
        if (valor === 0) {
            gsap.to(refTab2.value, {
                color: '#7D7D7D', // blanco
                duration: 0.5,
                ease: 'power1.out'
            });
            gsap.to(refTab1.value, {
                color: '#ffffff', // blanco
                duration: 0.5,
                ease: 'power1.out'
            });
        }else{
            gsap.to(refTab1.value, {
                color: '#7D7D7D', // blanco
                duration: 0.5,
                ease: 'power1.out'
            });
            gsap.to(refTab2.value, {
                color: '#ffffff', // blanco
                duration: 0.5,
                ease: 'power1.out'
            });
        }
        
        const offset = valor * 100;
        gsap.to(refTabActive.value, {
            xPercent: offset, // blanco
            duration: 0.5,
            ease: 'power1.out'
        });

    }
    onMounted(() => {
        // Pintar de blanco por defecto el primer tab
        activeTab.value = 0;
        gsap.set(refTab1.value, {
            color: '#ffffff'
        });

        gsap.fromTo(imagenBannerBg.value, 
            { yPercent: '-25' }, // 👈 posición inicial
            {
                yPercent: '25', // Mueve hacia arriba 100px mientras haces scroll
                ease: 'none',
                scrollTrigger: {
                    trigger: containerBannerBg.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true, // hace que el movimiento sea proporcional al scroll
                    markers: false,
            }
        })
    });
</script>
