<template>
    <header class="headerContainerMain">
        <div class="containerFluid">
            <div class="gridContainer">
                <div>
                    <router-link to="/" class="logoContainer">
                        <img :src="imgLogo" alt="Logo de Gloria" width="162" height="112" loading="eager"/>
                    </router-link>
                </div>
                <div>
                    <div class="menuMovil" @click="openMenu">
                        <img :src="menumovil" alt=""/>
                    </div>
                    <nav>
                        <button type="button" class="titleNav" @click="scrollToSection('#seccion1')">Nuestros productos</button>
                        <button type="button" class="titleNav" @click="scrollToSection('#seccion2')">Recetas Nutritivas</button>
                        <button type="button" class="titleNav" @click="scrollToSection('#seccion3')">Preguntas Frecuentes</button>
                    </nav>
                </div>
                
            </div>
        </div>
        <div class="menuMovilContainer" ref="menu" v-show="menuVisible">
            <div class="headerContainer">
                <router-link to="/" class="logoContainer">
                    <img :src="imgLogo" alt="Logo de Gloria" width="231" height="159" loading="eager"/>
                </router-link>

                <button @click="closePopup">
                    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
            <div class="bodyContainer">
                <nav>
                    <button type="button" class="titleNav" @click="irInicio">Inicio</button>
                    <button type="button" class="titleNav" @click="scrollToSection('#seccion1')">Nuestros productos</button>
                    <button type="button" class="titleNav" @click="scrollToSection('#seccion2')">Recetas Nutritivas</button>
                    <button type="button" class="titleNav" @click="scrollToSection('#seccion3')">Preguntas Frecuentes</button>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRouter } from 'vue-router';
gsap.registerPlugin(ScrollToPlugin);
const menumovil = '/images/menu.svg';
const router = useRouter();
const menuVisible = ref(false)
const menu = ref(null)

function closePopup(){
    // Animación de salida de izquierda a derecha
    gsap.to(menu.value, {
        x: '-100%',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
        menuVisible.value = false
        gsap.set(menu.value, { x: '-100%' }) // reset para próxima vez
        }
    })
}

function openMenu() {
    menuVisible.value = true
    // Animación de entrada de izquierda a derecha
    gsap.fromTo(
        menu.value,
        { x: '-100%' },
        {
        x: '0%',
        duration: 0.5,
        ease: 'power2.out'
        }
    )
}
function irInicio(){
    router.push(`/`);
}
function scrollToSection(selector) {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: selector,
      offsetY: 80 // opcional: si tienes un header fijo, ajusta este valor
    },
    ease: 'power2.out'
  })

  closePopup?.() // en caso closePopup no esté definido aún
}
const imgLogo = '/images/gloria3.svg';
</script>