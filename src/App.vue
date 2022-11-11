<template>
  <div id="app">
    <div class="sidebar">
      <div class="logo"><h1>Тут Лого</h1></div>
      <ul class="navigation">
        <li class="navigation-item">Главная</li>
        <li class="navigation-item">Профиль</li>
        <li class="navigation-item">Календарь</li>
        <li class="navigation-item">Работники</li>
        <li class="navigation-item">Склады</li>
        <li class="navigation-item">Найти работу</li>
        <li class="navigation-item">Чат</li>
        <li class="navigation-item">Настройки</li>
        <li class="navigation-item">Платежи</li>
      </ul>
      <div class="exit">
        <button class="exitButton">Выйти</button>
      </div>
    </div>
    <div class="main">
      <header class="header"></header>
      <div class="info">
        <div class="info-stats">
          <div class="block1"></div>
          <div class="block1"></div>
          <div class="block2"></div>
          <div class="block2"></div>
        </div>
        <div class="info-important">
          <div class="nextblock1"></div>
          <div class="nextblock2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
</style>

<style scoped>
#app {
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;

  color: #7c7c7c;

  background-color: #000000;
}

.sidebar {
  position: static;

  display: flex;
  flex-basis: 15%;
  flex-direction: column;

  height: 100vh;

  border-right: 1px solid #232323;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 96px;

  text-align: center;
}

.logo h1 {
  margin: 0;
}

.navigation {
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  margin: 0;
  padding: 20px 10px;

  list-style-type: none;
}

.navigation-item {
  height: 40px;
  margin-bottom: 20px;
}

.navigation-item:hover {
  border: 1px solid #7c7c7c;
}

.exit {
  height: 96px;

  border-top: 1px solid #232323;
}

.main {
  overflow-y: scroll;
  flex-grow: 1;
}

.header{
  height: 96px;

  border-bottom: 1px solid #232323;
}

.info {
  display: flex;

  padding: 20px;

  background-color: #0f0e0e;
}

.info-stats {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  width: 75%;
  padding: 10px;
}

.info-important{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  width: 25%;
  padding: 10px;
}

.block1 {
  width: calc((100% - 20px) / 2);
  height: auto;

  border-radius: 12px;

  background-color: #232323;
}

.block2 {
  width: 100%;

  height: auto;

  border-radius: 12px;

  background-color: #232323;
}

.nextblock1 {
  width: 100%;
  height: 400px;

  border-radius: 12px;

  background-color: #232323;
}

.nextblock2 {
  width: 100%;
  height: 600px;

  border-radius: 12px;

  background-color: #232323;
}
</style>
