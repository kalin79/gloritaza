<template>
    <div class="gloritazaHome">
        <div class="containerFluid">
            <div class="gloritazaContainer">
                <div>
                    <div class="infoContainer">
                        <div class="headerInfo">
                            <img :src="imgTaza" alt="Gloritaza - Taza promocional de Leche Gloria" />
                        </div>
                        <div class="bodyInfo">
                            <div class="pc">
                                <h3 class="tituloMediano colorTxtAzul">
                                    ¿Como llevarte <br />
                                    tu gloritaza?
                                </h3>
                            </div>
                            <div class="movil">
                                <h3 class="tituloMediano colorTxtAzul topmarginH3">
                                    ¿Como <br />
                                    llevarte tu <br />
                                    gloritaza?
                                </h3>
                            </div>
                        </div>
                        <div class="footerInfo">
                            <div class="fechaContainer">
                                <p class="descripcion">Canje válido del 15 de setiembre al 31 de octubre de 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <VideoComponent />
                </div>
            </div>
            <div class="tycCenterContainer">
                <div class="tycContainer">
                    <h3 class="descripcionMediano colorTxtAzul txtBold">TÉRMINOS Y CONDICIONES</h3>
                    <p class="descripcionPequeno colorTxtAzul">
                        Esta promoción está vigente del 15 de setiembre al 31 de octubre de 2025 en bodegas, mercados y autoservicios autorizados, o hasta agotar stock de 1,000,000 de tazas. Válida en Lima, Callao, Trujillo, Arequipa, Cusco, Chiclayo, Huancayo, Piura, Tarapoto, Tacna, Ica, Iquitos, Juliaca. Mecánica de canje: Canjea 1 Gloritaza con 3 etiquetas de leche Gloria de 390 gr (Azul, Niños, Light, Evaporada, Zero Lacto, Quinua o Quinua, Kiwicha o Cañihua) + S/ 3.50.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import VideoComponent from '@/js/components/home/Video.vue';
const imgTaza='/images/taza.svg';
</script>