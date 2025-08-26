<template>
    <div class="bannerVideoMain">
        <video class="videoPlayBanner" autoplay muted  playsinline>
            <source :src="videoPC2" type="video/webm" />
            <source :src="videoPC" type="video/mp4" />
            Tu navegador no soporta video HTML5.
        </video>

        <video class="videoPlayBannerMovil" autoplay muted  playsinline>
            <source :src="videoMovil2" type="video/webm" />
            <source :src="videoMovil" type="video/mp4" />
            Tu navegador no soporta video HTML5.
        </video>
        <!-- <div class="footerVideo">
            <p>
                Un producto nutritivo pensado <br />para acompañarte diariamente. 
            </p>
            <img :src="arrow" alt="Un producto nutritivo pensado para acompañarte diariamente.">
        </div> -->
    </div>
</template>

<script setup>

const videoPC = '/images/BannerMainPC.mp4'; 
const videoPC2 = '/images/BannerMainPC.webm'; 

const videoMovil = '/images/BannerMainMovil.mp4'; 
const videoMovil2 = '/images/BannerMainMovil.webm'; 


const arrow = '/images/arrow.svg';
const images = [
  '/images/frontend/b1.png',
  '/images/frontend/b2.png',
  '/images/frontend/b3.png',
]

defineProps ({
  banners: {
    type: [],
    required: false,
    default: []
  }
})
</script>

