<template>
    <div class="bannerHomeMain">
        <div class="containerFluid">
            <div class="bannerContainer">
                <div>
                    <div>
                        <h1 class="tituloGrande">
                            ¡Vuelven las Gloritazas!
                        </h1>
                        <h2 class="subTitulo">
                            La promoción de Leche Gloria <br />que estabas esperando.
                        </h2>
                        <button class="btnGral titleBotonGrande active" @click="scrollToSection('#seccion2')">
                            <img :src="imgBtn" alt="Encuentra tu tienda más cercana" />
                            <span>Encuentra tu tienda más cercana</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="imgContainer">
                        <img :src="imgLatas" alt="¡Vuelven las Gloritazas!"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"; // 👈 IMPORTANTE
gsap.registerPlugin(ScrollToPlugin); // 👈 REGISTRAR

const imgBtn='/images/iconBtn.svg';
const imgLatas='/images/latas.webp';

function scrollToSection(selector) {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: selector,
            offsetY: 80 // opcional: si tienes un header fijo, ajusta este valor
        },
        ease: 'power2.out'
    })

    // closePopup?.() // en caso closePopup no esté definido aún
}
</script>