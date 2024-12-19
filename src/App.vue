<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Page 1</router-link>
        <router-link to="/page2">Page 2</router-link>
        <router-link to="/page3">Page 3</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background: #222;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

nav a {
  text-decoration: none;
  color: white;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: red;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  color: white;
}

footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
