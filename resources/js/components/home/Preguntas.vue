<template>
    <div class="preguntasFrecuentesSectionHome" id="seccion3">
        <div class="containerFluid">
            <h2>Preguntas Frecuentes</h2>
            <div class="accordionContainer">
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(1)"
                    >
                        <p>¿Qué es la leche Gloria con Quinua y leche Gloria con Quinua, Kiwicha y Cañihua y cuáles son sus principales beneficios?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 1"
                    >
                        <p>
                            La leche Gloria con Quinua y leche Gloria con Quinua, Kiwicha y Cañihua son nutritivos alimentos que une la calidad de la leche Gloria con la quinua, kiwicha y cañihua. Estos cereales ancestrales, destacan por su alto aporte de proteínas de calidad, que incluyen todos los aminoácidos esenciales, así como por su riqueza en vitaminas y minerales que contribuyen a la energía y el bienestar general. Una forma deliciosa y práctica de disfrutar lo mejor de los Andes en cada vaso.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(2)"
                    >
                        <p>¿Cuál es la diferencia entre la leche Gloria con Quinua y la leche Gloria con Quinua, Kiwicha y Cañihua?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 2"
                    >
                        <p>
                            La leche Gloria con Quinua, Kiwicha y Cañihua combina tres poderosos cereales andinos, ofreciendo una mayor diversidad de nutrientes, vitaminas y minerales para tu bienestar. En cambio, nuestra leche Gloria con Quinua concentra todos los beneficios de la quinua, superalimento reconocido por su alto contenido de proteínas y energía. Ambas opciones son deliciosas y nutritivas, pensadas para acompañarte en tu día a día.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(3)"
                    >
                        <p>¿Dónde estará disponible? </p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 3"
                    >
                        <p>
                            Está disponible en todos los supermercados, bodegas y mercados a nivel nacional.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(4)"
                    >
                        <p>¿Cómo se debe almacenar? </p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 4"
                    >
                        <p>
                            La leche Gloria con Quinua y leche Gloria con Quinua, Kiwicha y Cañihua se debe conservar en un lugar fresco y seco. Una vez que es abierto el envase, se deberá mantener el producto en refrigeración.
                        </p>
                        <p>
                            Este producto viene en nuestra icónica lata, su material de acero y su sellado aséptico hacen que sea altamente resistente a todos los tipos de climas de nuestro país y su interior se mantenga protegido, incluso ante golpes y caídas. 
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(5)"
                    >
                        <p>¿Quiénes pueden consumir el producto?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 5"
                    >
                        <p>
                            La nueva leche Gloria con Quinua y leche Gloria con Quinua, Kiwicha y Cañihua es apta para toda la familia.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(6)"
                    >
                        <p>¿Cómo se prepara?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 6"
                    >
                        <p>
                            Consumirlo es súper práctico, solo diluye leche Gloria con Quinua o leche Gloria con Quinua, Kiwicha y Cañihua con la misma cantidad de agua hervida y listo.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(7)"
                    >
                        <p>¿Se puede usar en preparaciones como postres o batidos?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 7"
                    >
                        <p>
                            Sí. La leche Gloria con Quinua y leche Gloria con Quinua, Kiwicha y Cañihua es versátil y puede disfrutarse sola, caliente o fría, también puede incorporarse a batidos, postres, avenas, cremas y otras recetas para darles un toque nutritivo y delicioso.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(8)"
                    >
                        <p>¿Qué beneficios aporta la LECHE?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 8"
                    >
                        <p>
                            La leche es un alimento fundamental en todas las etapas a lo largo de nuestra vida. Cada uno de sus nutrientes está asociado a efectos beneficiosos para nuestro organismo. Es fuente natural de proteínas de alta calidad, que contribuyen a la formación, mantenimiento y reparación de los tejidos, además de favorecer el desarrollo y recuperación de los músculos. Aporta calcio, mineral esencial para mantener huesos y dientes fuertes. También contiene vitamina A y D, importantes para mantener el sistema inmune.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(9)"
                    >
                        <p>¿Qué son los cereales andinos y por qué son importantes?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 9"
                    >
                        <p>
                            Los cereales andinos —como la quinua, la kiwicha y la cañihua— son granos ancestrales cultivados por las culturas preinca e inca en las alturas de los Andes. Se consideran super alimentos por su alto valor nutricional, ya que aportan proteínas completas, aminoácidos esenciales, fibra, vitaminas y minerales.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(10)"
                    >
                        <p>¿Cuáles son los principales beneficios nutricionales de la quinua?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 10"
                    >
                        <p>
                            Por siglos, la quinua ha sido un cultivo fundamental en la alimentación de los Andes. Sus granos, de alto valor nutritivo, destacan por su notable aporte de proteínas y compuestos bioactivos, superando en calidad biológica a muchos cereales tradicionales. 
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(11)"
                    >
                        <p>¿Cuáles son los principales beneficios nutricionales de la cañihua?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 11"
                    >
                        <p>
                            La cañihua es un cereal de gran valor nutritivo que contiene el doble de proteínas que alimentos comunes como el trigo, el arroz o la avena. Se caracteriza por su excelente calidad de proteínas y su riqueza en minerales, lo que la convierte en una alternativa ideal para la alimentación de niños y adultos mayores. 
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(12)"
                    >
                        <p>¿Cuáles son los principales beneficios nutricionales de la kiwicha?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 12"
                    >
                        <p>
                            La kiwicha contiene entre 15% y 18% de proteínas y aporta aminoácidos esenciales como la lisina. Es rica en calcio, fósforo, hierro, potasio, zinc, vitamina E y vitaminas del complejo B. Su fibra es fina y suave en comparación con la de otros cereales.
                        </p>
                    </div>
                </div>
                
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(14)"
                    >
                        <p>¿Cuánto vasos se deberían consumir al día?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 14"
                    >
                        <p>
                            No existe un límite establecido de consumo, por lo que puede disfrutarse tantas veces como se desee. Se sugiere disfrutarlo en diferentes momentos del día como parte de una alimentación equilibrada, adaptando la cantidad a las necesidades y hábitos de cada persona.
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(15)"
                    >
                        <p>¿Este producto tiene gluten?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 15"
                    >
                        <p>
                            No contiene gluten; sin embargo, se elabora en instalaciones donde también se procesan productos a base de cereales que lo contienen (como la avena).
                        </p>
                    </div>
                </div>
                <div class="accordionItem">
                    <button
                        class="accordionHeader"
                        @click="toggle(16)"
                    >
                        <p>¿Tiene conservantes?</p>
                        <img :src="flecha" alt=""/>
                    </button>
                    <div 
                        class="accordionBody"
                        v-show="activeIndex === 16"
                    >
                        <p>
                            La leche Gloria con Quinua y leche Gloria con Quinua, Kiwicha y Cañihua no contiene conservantes. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const flecha = '/images/arrow3.svg';
const activeIndex = ref(null);
function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>


