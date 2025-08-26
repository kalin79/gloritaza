import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLightboxStore = defineStore('lightbox', () => {
    const visible = ref(false);
    const color = ref('#000');
    const opacity = ref(0.5);
    const receta = ref({});

    function openLightbox(data) {
        console.log(data);
        visible.value = true;
        color.value = data.color || '#000';
        opacity.value = data.opacity || 0.5;
        receta.value = data.receta || {};
    }

    function closeLightbox() {
        visible.value = false;
    }

    return {
        visible,
        color,
        opacity,
        receta,
        openLightbox,
        closeLightbox
    };
});
