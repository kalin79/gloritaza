<template>
    <div
        class="overlay"
    >
        
        <div v-show="receta.valor===1" class="fullPopUp">
            <div class="centerRecetaContainer">
                <div class="closeLightBox" @click="cerrar">
                    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div class="contenidoMain">
                    <h2>INFORMACIÓN NUTRICIONAL</h2>
                    <h3>Tamaño de porción: 100g para 200mL diluido. <br />Porciones por envase: Aprox. 4</h3>
                    <h4>Cantidad de porción</h4>
                    <div class="headerInfo">
                        <div>Energía (kcal/KJ)</div>
                        <div>112/469</div>
                    </div>
                    <div class="tableResponsive">
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>100mL diluido*</th>
                                <th>100g</th>
                                <th>%RD**</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Grasa total (g)</td>
                                <td>2.3</td>
                                <td>4.5</td>
                                <td>6%</td>
                            </tr>
                            <tr>
                                <td><p>Grasa saturada (g)</p></td>
                                <td class="minTxt">1.6</td>
                                <td class="minTxt">3.2</td>
                                <td class="minTxt">16%</td>
                            </tr>
                            <tr>
                                <td><p>Grasa trans (g)</p></td>
                                <td class="minTxt">0.1</td>
                                <td class="minTxt">0.1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Sodio (mg)</td>
                                <td class="">75</td>
                                <td class="">150</td>
                                <td class="">8%</td>
                            </tr>
                            <tr>
                                <td>Carbohidratos (g)</td>
                                <td class="">5.9</td>
                                <td class="">11.8</td>
                                <td class="">4%</td>
                            </tr>
                            <tr>
                                <td><p>Azúcarestotales (g)</p></td>
                                <td class="minTxt">4.8</td>
                                <td class="minTxt">9.6</td>
                                <td class="minTxt">11%</td>
                            </tr>
                            <tr>
                                <td><p>Azúcares añadidos (g)</p></td>
                                <td class="minTxt">0</td>
                                <td class="minTxt">0</td>
                                <td class="minTxt"></td>
                            </tr>
                            <tr>
                                <td>Proteínas (g)</td>
                                <td class="">3.0</td>
                                <td class="">6.0</td>
                                <td class="">12%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">Calcio (mg)</td>
                                <td class="titleLight">93</td>
                                <td class="titleLight">185</td>
                                <td class="titleLight">19%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">F&oacute;sforo (mg)</td>
                                <td class="titleLight">93</td>
                                <td class="titleLight">185</td>
                                <td class="titleLight">26%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">Zinc (mg)</td>
                                <td class="titleLight">1.1</td>
                                <td class="titleLight">2.1</td>
                                <td class="titleLight">15%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">Vitamina B12 (ug)</td>
                                <td class="titleLight">0.2</td>
                                <td class="titleLight">0.4</td>
                                <td class="titleLight">15%</td>
                            </tr>
                            <!-- más filas -->
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div> 
        <div v-show="receta.valor===2" class="fullPopUp">
            <div class="centerRecetaContainer">
                <div class="closeLightBox" @click="cerrar">
                    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div class="contenidoMain">
                    <h2>INFORMACIÓN NUTRICIONAL</h2>
                    <h3>Tamaño de porción: 100g para 200mL diluido. <br />Porciones por envase: Aprox. 4</h3>
                    <h4>Cantidad de porción</h4>
                    <div class="headerInfo">
                        <div>Energía (kcal/KJ)</div>
                        <div>112/470</div>
                    </div>
                    <div class="tableResponsive">
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>100mL diluido*</th>
                                <th>100g</th>
                                <th>%RD**</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Grasa total (g)</td>
                                <td>2.3</td>
                                <td>4.5</td>
                                <td>6%</td>
                            </tr>
                            <tr>
                                <td><p>Grasa saturada (g)</p></td>
                                <td class="minTxt">1.6</td>
                                <td class="minTxt">3.2</td>
                                <td class="minTxt">16%</td>
                            </tr>
                            <tr>
                                <td><p>Grasa trans (g)</p></td>
                                <td class="minTxt">0.1</td>
                                <td class="minTxt">0.1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Sodio (mg)</td>
                                <td class="">75</td>
                                <td class="">150</td>
                                <td class="">8%</td>
                            </tr>
                            <tr>
                                <td>Carbohidratos (g)</td>
                                <td class="">5.9</td>
                                <td class="">11.9</td>
                                <td class="">4%</td>
                            </tr>
                            <tr>
                                <td><p>Azúcarestotales (g)</p></td>
                                <td class="minTxt">4.8</td>
                                <td class="minTxt">9.6</td>
                                <td class="minTxt">11%</td>
                            </tr>
                            <tr>
                                <td><p>Azúcares añadidos (g)</p></td>
                                <td class="minTxt">0</td>
                                <td class="minTxt">0</td>
                                <td class="minTxt"></td>
                            </tr>
                            <tr>
                                <td>Proteínas (g)</td>
                                <td class="">3.0</td>
                                <td class="">6.0</td>
                                <td class="">12%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">Calcio (mg)</td>
                                <td class="titleLight">93</td>
                                <td class="titleLight">185</td>
                                <td class="titleLight">19%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">F&oacute;sforo (mg)</td>
                                <td class="titleLight">93</td>
                                <td class="titleLight">185</td>
                                <td class="titleLight">26%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">Zinc (mg)</td>
                                <td class="titleLight">1.1</td>
                                <td class="titleLight">2.1</td>
                                <td class="titleLight">15%</td>
                            </tr>
                            <tr>
                                <td class="titleLight">Vitamina B12 (ug)</td>
                                <td class="titleLight">0.2</td>
                                <td class="titleLight">0.4</td>
                                <td class="titleLight">15%</td>
                            </tr>
                            <!-- más filas -->
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>

import { useLightboxStore } from '@/js/stores/useLightboxStore';
const store = useLightboxStore();
defineProps(['color', 'opacity', 'receta']);
defineEmits(['close']);


function cerrar() {
  // emit('close')
  const store = useLightboxStore()
  store.closeLightbox()
}

</script>

