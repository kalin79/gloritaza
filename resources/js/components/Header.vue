<template>
    <header class="headerContainerMain" ref="navbar">
        <div class="containerFluid">
            <div class="gridContainer">
                <div>
                    <router-link to="/" class="logoContainer">
                        <img :src="imgLogo" ref="logoImg" alt="Leche Gloria - Logo oficial" width="162" height="112" loading="eager"/>
                    </router-link>
                </div>
                <!-- <div>
                    <div class="alignButtonContainer">
                        <button class="btnGral titleBoton colorTxtAzul" @click="scrollToSection('#seccion1')">Preguntas Frecuentas</button>
                        <button class="btnGral active titleBoton" @click="scrollToSection('#seccion2')">DONDE CANJEAR</button>
                    </div>
                </div> -->
            </div>
        </div>
       
    </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin"; // 👈 IMPORTANTE
const imgLogo = '/images/logo.svg';
const navbar = ref(null);
const logoImg = ref(null);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // 👈 REGISTRAR
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

// Registrar el plugin ANTES de usarlo
onMounted(() => {
    ScrollTrigger.create({
        trigger: document.body,
        start: "0 0", // cuando pasas 100px
        onEnter: () => {
            gsap.to(navbar.value, {
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderBottom: "1px solid #DDDDDD", 
                duration: 0.4,
                ease: "power2.out"
            });
            // gsap.to(logoImg.value, {
            //     width: 120, // nuevo ancho en px
            //     duration: 0.4,
            //     ease: "power2.out"
            // });
        },
        onLeaveBack: () => {
            gsap.to(navbar.value, {
                backgroundColor: "transparent",
                borderBottom: "none",
                duration: 0.4,
                ease: "power2.out"
            });
            // gsap.to(logoImg.value, {
            //     width: 180, // nuevo ancho en px
            //     duration: 0.4,
            //     ease: "power2.out"
            // });
        }
    });
});
</script>