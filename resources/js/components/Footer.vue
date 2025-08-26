<template>
    <footer class="footerContainer">
        <div class="gloriaLatas">
            <img :src="glorialatas" alt=""/>
        </div>
        <div class="planta1">
            <img :src="planta1" alt=""/>
        </div>
        <div class="planta2">
            <img :src="planta2" alt=""/>
        </div>
        <div class="centerContent">
            <div>
                <div class="redesContainer">
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
                <div class="legalBox">
                    © GLORIA. All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const glorialatas = '/images/footerlatas.svg';
const planta1 = '/images/p1.svg';
const planta2 = '/images/p2.svg';
const facebook ='/images/r1.svg'; 
const instagram ='/images/r2.svg'; 
const youtube ='/images/r3.svg'; 
const lkn ='/images/tiktok.svg'; 
</script>
