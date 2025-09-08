<template>
    <div class="videoContainer">
        <video class="videoPlayBanner"
            autoplay
            muted
            loop
            playsinline
        >
            <!-- <source :src="videoPC2" type="video/webm" /> -->
            <source :src="videoPC" type="video/mp4" />
            Tu navegador no soporta video HTML5.
        </video>
    </div>
</template>
<script setup>
    const videoPC = '/images/demo.mp4'; 
    const videoPC2 = '/images/demo.webm'; 
</script>