<template>
    <div class="VideoContentMain">
        <div class="textoBoxVideo">
            <h3 class="titularMediano colorTxtBlanco">
                <span class="txtRegular">Mira este video y descubre el mundo de la  </span>
                <span class="txtBold">Leche Gloria con Quinua y Leche Gloria 
                con Quinua, Kiwicha y Cañihua</span>
            </h3>
        </div>
        <video class="videoPlayBanner"  controls>
            <source :src="videoPC2" type="video/webm" />
            <source :src="videoPC" type="video/mp4" />
            Tu navegador no soporta video HTML5.
        </video>
    </div>
</template>
<script setup>
const videoPC = '/images/video2.mp4'; 
const videoPC2 = '/images/video2.webm'; 
</script>