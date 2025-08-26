<template>
    <div class="sectionMensajeHome" id="seccion1">
        <h1 class="titularMediano colorTxtCrema">
            <span class="colorTxtRojo">LECHE GLORIA</span> CON QUINUA, KIWICHA Y CAÑIHUA, <br />
            Los mejores alimentos del Perú ahora se juntan, creando un superalimento que llevará nutrición a tu mesa.
        </h1>
        <div class="flechaMovil">
            <img :src="flecha" alt=""/>
        </div>
    </div>
</template>
<script setup>
const flecha = "/images/flecha.svg";
</script>