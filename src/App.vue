<template>
  <meta charset="utf-8" />
  <div class="game-container">
    <RouterView />
  </div>
</template>

<style>
body {
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
html * {
  font-family: 'Proxima Nova' !important;
}
.explanation {
  padding: 24px;
  align-items: center;
  border-radius: 4px;
  background: #ccd2bb;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.responsive-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
button {
  padding: 8px 12px;
  color: white;
  background-color: #ac2f3e;
  font-weight: bold;
  border-radius: 8px;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
}

h2 {
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

p {
  text-align: center;
  font-size: 16px;
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
  padding: 16px;
  align-items: center;
  gap: 10px;
}
</style>
