<template>
        <div class="sectionPresentacionHome">
            <div class="plantaImg4">
                <img :src="planta4" alt=""/>
            </div>
            <div class="gridContainer">
                <div>
                    <div class="plantaImg1">
                        <img :src="planta1" alt=""/>
                    </div>
                    <div class="itemLata">
                        <div class="lataContainer">
                            <img :src="lata1" alt="LECHE CON QUINUA, KIWICHA Y CAÑIHUA"/>
                            <div class="btnLigthBoxBox">
                                <button @click="abrirLightbox(1)">
                                    <p>Valor nutricional</p>
                                    <img :src="ojo" alt=""/>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="itemLata">
                        <div class="lataContainer">
                            <img :src="lata2" alt="LECHE CON QUINUA, KIWICHA Y CAÑIHUA"/>
                            <div class="btnLigthBoxBox">
                                <button @click="abrirLightbox(2)">
                                    <p>Valor nutricional</p>
                                    <img :src="ojo" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div class="plantaImg2">
                            <img :src="planta2" alt=""/>
                        </div>
                         <div class="plantaImg3">
                            <img :src="planta3" alt=""/>
                        </div>
                    </div>
                   
                </div>
                <div>
                    <h2 class="titularRegular">Alimenta tu día con lo mejor del Perú</h2>
                    <h3 class="descripcionGrande">Nuevas presentaciones</h3>
                    <p>
                        <span class="txtBoldItalic">La nueva Leche Gloria con Quinua y Leche Gloria con Quinua, Kiwicha y Cañihua </span>
                        — reconocidos por su alto valor nutricional— con el sabor, la cremosidad y la nutrición de nuestra leche Gloria de siempre. Por eso, estos productos aportan energía, proteínas y minerales.
                        <span class="txtBold">Son una excelente opción para complementar una dieta variada y equilibrada</span> con lo mejor de nuestra biodiversidad andina.
                    </p>
                </div>
            </div>
        </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useLightboxStore } from '@/js/stores/useLightboxStore';
const lata1 = '/images/lata1.webp';
const lata2 = '/images/lata2.webp';
const ojo = '/images/ojo.svg';
const planta1 = '/images/pp1.png';
const planta2 = '/images/pp2.png';
const planta3 = '/images/pp3.png';
const planta4 = '/images/pp4.png';
const recetaOverlay = ref(1);
const colorOverlay = ref('bgAzul');
function abrirLightbox(id){
    const store = useLightboxStore()
    store.openLightbox({
        color: '26, 26, 26',
        opacity: 0.6,
        receta: {
            valor: id,
            descripcion: 'Descripción de la receta',
        }
    })
}
</script>