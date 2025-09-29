<template>
  <meta charset="utf-8" />
  <div class="game-container">
    <div class="locale-switcher">
      <button @click="setLocale('fr-FR')" :aria-label="'Français'">
        <span class="flag-img">&#127467;&#127479;</span>
      </button>
      <button @click="setLocale('en-GB')" :aria-label="'English'">
        <span class="flag-img">&#127468;&#127463;</span>
      </button>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function setLocale(lang: string) {
  locale.value = lang
}
</script>

<style>
:root {
  --accent: #AC2F3E;
  --primary: #596D1E;
  --secondary: #CCD2BB;
  --grey: #CFD2C7;
  --white: #FAFAF8;
}

body {
  background-image: url('@/assets/background.png');
  background-color: #E6E9DD;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;   
  font-size: 18px;
}
html * {
  font-family: 'Quicksand', sans-serif !important;
}
.explanation {
  padding: 24px;
  align-items: center;
  border-radius: 4px;
  background: var(--secondary);
  margin: 24px;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
  max-width: 800px;      
  border-radius: 10px;
  text-align: center;
}
.locale-switcher {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.flag-img {
  display: block;
  font-size: 32px;
}
.responsive-img {
  width: 90%;
  max-width: 500px;
  padding-top: 24px;
  padding-bottom: 24px;
  height: auto;
  display: block;
  margin: 0 auto;
}
button {
  color: white;
  background-color: var(--accent);
  font-weight: bold;
  font-size: 16px;
  border-radius: 100px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 12px 20px;
  color: var(--white);
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}


.locale-switcher button {
  background: transparent;
  padding: 0;
  border: none;
  box-shadow: none;
}

h1 {
  font-family: 'Pacifico', sans-serif !important;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

lg {
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

p {
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.input-container {
  display: flex;
  flex-direction: column; 
  align-items: stretch;   
  gap: 0.75rem;           
  max-width: 400px;       
  margin: 0 auto;         
  padding: 1rem;
  box-sizing: border-box;
}

input {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  border-radius: 100px;
  border: 1px solid var(--grey);
  background: var(--white);
  width: 100%;  
  box-sizing: border-box;
}

.message {
  color: var(--accent);
  margin-top: 10px
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
  color: #999999ff;
  margin-top: 24px;
}

.tooltip {
  position: absolute;
  bottom: 100%; /* show above the element */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.875rem;
  z-index: 10;
  opacity: 0.9;
  pointer-events: none;
}

.pt-large {
  padding-top: 24px;
}

a {
  text-decoration: none;
}

@media (max-width: 480px) {
  body {
    font-size: 16px; /* phones */
  }
  h1 {
    font-size: 24px; /* phones */
  }
  lg {
    font-size: 18px; /* phones */
  }
  p {
    font-size: 16x; /* phones */
  }
}
</style>
