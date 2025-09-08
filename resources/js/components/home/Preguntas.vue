<template>
    <div class="preguntasHome" id="seccion1">
        <div class="containerFluid">
            <div class="preguntasContainer">
                <div>
                    <div class="imgContainer">
                        <img :src="imgPreguntas" alt="Preguntas Frecuentes" />
                    </div>
                </div>
                <div>
                    <h2 class="tituloMediano colorTxtAzul">Preguntas Frecuentes</h2>
                    <div v-for="(faq, index) in faqs" :key="index" class="faqItem">
                        <button @click="toggle(index)">
                            <span class="subTituloPequeno colorTxtAzul txtRegular">
                            {{ faq.pregunta }}
                            </span>
                            <div class="iconFaq">
                                <img :src="iconMas" alt="" v-if="openIndex === index" />
                                <img :src="iconMenos" alt="" v-else/>
                            </div>
                        </button>
                        <div class="faqBody" v-if="openIndex === index">
                            <p class="titleBotonGrande colorTxtAzul">{{ faq.respuesta }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const iconMas= '/images/mas.svg';
const iconMenos= '/images/menos.svg';
const imgPreguntas='/images/faq.webp';
const faqs = reactive([
  {
    pregunta: "¿Cuantas Gloritaza puedo canjear?",
    respuesta: "Puedes canjear hasta un máximo de 3 Gloritazas por persona durante toda la vigencia de la promoción. Este límite se ha establecido para asegurar que más personas puedan disfrutar de esta experiencia con Gloria.Recuerda que cada canje está sujeto a la disponibilidad de stock y a que cumplas con los requisitos indicados en la landing (como presentar tus comprobantes de compra válidos).Una vez alcanzado el límite, no podrás realizar más canjes, incluso si cuentas con más comprobantes.",
    open: false
  },
  {
    pregunta: "¿Hasta que fechas se pondrán canjear las Gloritaza?",
    respuesta: "Puedes canjear hasta un máximo de 3 Gloritazas por persona durante toda la vigencia de la promoción. Este límite se ha establecido para asegurar que más personas puedan disfrutar de esta experiencia con Gloria.Recuerda que cada canje está sujeto a la disponibilidad de stock y a que cumplas con los requisitos indicados en la landing (como presentar tus comprobantes de compra válidos).Una vez alcanzado el límite, no podrás realizar más canjes, incluso si cuentas con más comprobantes.",
    open: false
  },
  {
    pregunta: "¿Hasta que fechas se pondrán canjear las Gloritaza?",
    respuesta: "Puedes canjear hasta un máximo de 3 Gloritazas por persona durante toda la vigencia de la promoción. Este límite se ha establecido para asegurar que más personas puedan disfrutar de esta experiencia con Gloria.Recuerda que cada canje está sujeto a la disponibilidad de stock y a que cumplas con los requisitos indicados en la landing (como presentar tus comprobantes de compra válidos).Una vez alcanzado el límite, no podrás realizar más canjes, incluso si cuentas con más comprobantes.",
    open: false
  }
]);

// Guardamos cuál índice está abierto (-1 = ninguno abierto)
const openIndex = ref(-1);

const toggle = (index) => {
  // Si ya está abierto, lo cerramos
  if (openIndex.value === index) {
    openIndex.value = -1
  } else {
    // Si abrimos uno nuevo, cerramos los demás
    openIndex.value = index
  }
}
</script>
