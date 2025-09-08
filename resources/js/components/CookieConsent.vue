<!-- components/CookieBanner.vue -->
<template>
    <div v-if="showBanner" class="cookie-banner">
        <p>Este sitio usa cookies para mejorar tu experiencia.</p>
        <button @click="acceptCookies">Aceptar</button>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import Cookies from 'js-cookie';

    export default {
        setup() {
            const showBanner = ref(!Cookies.get('cookies_accepted'));

            const loadGTM = () => {
                if (!window.dataLayer) {
                    const gtmId = 'GTM-XXXXXX'; // reemplaza con tu ID
                    const script = document.createElement('script');
                    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
                    script.async = true;
                    document.head.appendChild(script);

                    window.dataLayer = window.dataLayer || [];
                }
            };

            const loadGAScript = () => {
                const gtmId = 'GTM-xxxxxxx'; // reemplaza con tu ID
                if (!window.gtag) {
                    const script = document.createElement('script');
                    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`; // reemplaza con tu ID
                    script.async = true;
                    document.head.appendChild(script);

                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    window.gtag = gtag;

                    gtag('js', new Date());
                    gtag('config',gtmId ); // reemplaza con tu ID
                }
            };

            const acceptCookies = () => {
                Cookies.set('cookies_accepted', 'true', { expires: 365 });
                showBanner.value = false;
                loadGTM();
                loadGAScript();
                if (window.gtag) {
                    window.gtag('event', 'cookies_accepted', {
                    event_category: 'Cookies',
                    event_label: 'User accepted cookies',
                    });
                }
            };

            // Cargar GTM y GA si ya aceptaron cookies
            if (!showBanner.value) {
                loadGTM();
                loadGAScript();
            }

            return {
                showBanner,
                acceptCookies,
            };
        },
    };
</script>
