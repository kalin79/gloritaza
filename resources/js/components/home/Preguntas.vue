<template>
    <div class="preguntasHome" id="seccion1">
        <div class="containerFluid">
            <div class="preguntasContainer">
                <div>
                    <div class="imgContainer">
                        <img :src="imgPreguntas" alt="Familia disfrutando Leche Gloria - Promoción Gloritaza" />
                    </div>
                </div>
                <div>
                    <h2 class="tituloMediano colorTxtAzul">Preguntas Frecuentes</h2>
                    <div v-for="(tipo, index) in faqs" :key="index" class="faqItem">
                        <button @click="toggle(index)">
                            <span class="subTituloPequeno colorTxtAzul txtRegular">
                            {{ tipo.categoria }}
                            </span>
                            <div class="iconFaq">
                                <img :src="iconMas" alt="" v-if="openIndex === index" />
                                <img :src="iconMenos" alt="" v-else/>
                            </div>
                        </button>
                        <div class="faqBody" v-if="openIndex === index">
                            <div v-for="(faq, i) in tipo.fap" :key="i">
                              <h3 class="titleBotonGrande colorTxtAzul">{{ faq.pregunta }}</h3>
                              <p class="titleBotonGrande colorTxtAzul">{{ faq.respuesta }}</p>
                            </div>
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
    categoria: "Mecánica del canje",
    open: false,
    fap: [
      {
        pregunta: "¿Cuál es la mécanica de canje?",
        respuesta: "Entrega 3 etiquetas de Leche Gloria de 390 g y haz el pago de S/3.50 para canjear tu Gloritaza en los puntos de canje autorizados.",
      },
      {
        pregunta: "¿Cuáles son los métodos de pago?",
        respuesta: "En supermercados, el pago de los S/ 3.50 puedes hacerlo en efectivo o por billeteras digitales (Yape/Plin). En bodegas y mercados se realizará según la forma de pago que tenga implementado el centro de canje. ",
      },
      {
        pregunta: "¿Tengo que hacer una compra en el establecimiento para poder hacer el canje?",
        respuesta: "El proceso de canje es independiente de la compra. Los consumidores pueden llevar etiquetas de compras anteriores para realizar el canje de las Gloritazas. No es obligatoria la compra en el centro de canje.",
      },
      {
        pregunta: "¿Hay un límite de canje por persona?",
        respuesta: "No hay un límite de canje por persona. Se pueden canjear todas las tazas que desee siempre y cuando haga entrega de las 3 etiquetas y S/ 3.50 por cada taza requerida.",
      },
      {
        pregunta: "¿Qué etiquetas participan del canje?",
        respuesta: "Participan las latas de Leche Gloria de 390 g: Azul, Niños, Light, Evaporada, Zero Lacto, Quinua o Quinua, Kiwicha o Cañihua.",
      },
    ]
  },
  {
    categoria: "Dónde hacer el canje",
    open: false,
    fap: [
      {
        pregunta: "¿Dónde puedo encontrar los puntos de canje?",
        respuesta: "Tenemos puntos de canje en bodegas, mercados y autoservicios seleccionados. Puedes consultar el punto de canje más cercano a tu ubicación en gloritaza.pe",
      },
      {
        pregunta: "¿Cuál es el horario de canje en bodegas y mercados?",
        respuesta: "Si compras en bodegas o mercados, busca los centros identificados como punto de canje todos los días, en el horario de apertura de los establecimientos. ",
      
      },
      {
        pregunta: "¿Cómo identifico si una bodega o puesto de mercado es centro de canje autorizado?",
        respuesta: "Podrás identificar los centros de canje en bodegas y mercados porque contarán con un distintivo en la puerta que los acredita como centros de canje autorizados.",
      },
      {
        pregunta: "¿Cuál es el horario de canje en supermercados?",
        respuesta: "En supermercados, tendremos módulos de canje los viernes, sábados y domingos de 9am a 2pm y de 4pm a 9pm. Estos estarán ubicados en tiendas seleccionadas de Tottus, Plaza Vea y Metro.",
       
      }
    ]
  },
  {
    categoria: "Restricciones",
    open: false,
    fap: [
      {
        pregunta: "¿Qué productos no participan de la promoción?",
        respuesta: "Etiquetas de leche de otras presentaciones (170gr) u otros productos Gloria no participan de la promoción.",
      },
      {
        pregunta: "Si no tengo etiquetas, ¿puedo comprar la Gloritaza?",
        respuesta: "No se efectuará el canje si el consumidor no presenta las 3 etiquetas en físico. ",
      
      },
      {
        pregunta: "¿Hay algún criterio de rechazo de mis etiquetas?",
        respuesta: "Etiquetas que estén incompletas en menos de un 70% podrían ser consideradas como invalidas. Esto depende del criterio del centro de canje.",
      },
      {
        pregunta: "¿Participan las etiquetas del vaso de leche o programas sociales?",
        respuesta: "Etiquetas de leche del vaso de leche, no participan de la promoción",
      },
      {
        pregunta: "¿Un centro de canje me puede retener las etiquetas?",
        respuesta: "Etiquetas que tengan algún tipo de adulteración no participan de la promoción y el centro de canje podrá retenerlas para ser destruidas.",
      }
    ]
  },
  {
    categoria: "Vigencia y cobertura de la promoción",
    open: false,
    fap: [
      {
        pregunta: "¿Cuál es la vigencia de la promoción?",
        respuesta: "La promoción está vigente desde el 15 de setiembre al 31 de octubre o hasta agotar stock de 1,000,000 de tazas a nivel nacional",
      },
      {
        pregunta: "¿En qué ciudades estará activa la promoción?",
        respuesta: "La promo está en las siguientes ciudades: Lima, Callao, Trujillo, Arequipa, Cusco, Chiclayo, Huancayo, Piura, Tarapoto, Tacna, Ica, Iquitos y Juliaca.",
      
      }
    ]
  }
]);

// Guardamos cuál índice está abierto (-1 = ninguno abierto)
const openIndex = ref(0);

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
