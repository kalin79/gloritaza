<template>
    <footer class="footerContainer">
        <div class="containerFluid">
            <div class="footerContent">
                <div class="gloriaLatas">
                    <img :src="glorialatas" alt=""/>
                </div>
                <div class="redesSocialesContainer">
                    <h4 class="titleBotonGrande">Visita nuestras redes</h4>
                    <div class="redesSocialesListado">
                        <a href="https://www.facebook.com/share/1JXHxrUAJu/?mibextid=wwXIfr" target="_blank">
                            <img :src="facebook" alt=""/>
                        </a>
                        <a href="https://www.instagram.com/gloria_peru?igsh=cWswNm9uMWV1eDFr"  target="_blank">
                            <img :src="instagram" alt=""/>
                        </a>
                        <a href="https://youtube.com/channel/UCjpfosPtvFXMv4jGIDZX36A/GloriaPer%C3%BAOficial?si=zkMzpy2DDwEjhqGk"  target="_blank">
                            <img :src="youtube" alt=""/>
                        </a>
                        <a href="https://www.tiktok.com/@gloria_peru?_t=ZS-8z68qDKEtGL&_r=1"  target="_blank">
                            <img :src="lkn" alt=""/>
                        </a>
                    </div>
                </div>
                <div class="legalContent">
                    <router-link to="/politicas-y-privacidad" class="descripcionMediano txtMedium"> 
                        Politicas y Privacidad
                    </router-link>
                    <div class="descripcionMediano txtMedium">
                        © GLORIA. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const glorialatas = '/images/gloria.svg';
const planta1 = '/images/p1.svg';
const planta2 = '/images/p2.svg';
const facebook ='/images/facebook.svg'; 
const instagram ='/images/instagram.svg'; 
const youtube ='/images/youtube.svg'; 
const lkn ='/images/tiktok.svg'; 
</script>
