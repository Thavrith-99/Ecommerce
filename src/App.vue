<template>
  <div id="app" class="container">
    <header class="header">
      <nav>
        <p>Header</p>
        <router-link to="/">Page 1</router-link>
        <router-link to="/page2">Page 2</router-link>
        <router-link to="/page3">Page 3</router-link>
      </nav>
      
    </header>
    <aside class="menu">
      <nav>
        <a href="#section1">Menu</a><br />
        <a href="#section1">Section 1</a><br />
        <a href="#section2">Section 2</a><br />
        <a href="#section3">Section 3</a><br />
        <a href="#section4">Section 4</a>
      </nav>
    </aside>
    <main class="content">
      <router-view />
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<style>
/* Grid layout styles */
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "menu content"
    "menu content"
    "menu content"
    "menu content"
    "menu content"
    "menu content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 8fr;
  height: 100vh;
  width: 100vh;
  gap: 5px;
}

.container > header {
  grid-area: header;
  background-color: #222;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
}

.container > .menu {
  grid-area: menu;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
}

.container > main {
  grid-area: content;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.container > footer {
  grid-area: footer;
  background-color: #222;
  color: white;
  text-align: center;
  padding: 10px;
}



nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
