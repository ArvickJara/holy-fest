<template>
  <div class="container">
    <header>
      <h1>Holy Fest</h1>
      <nav>
        <router-link to="/">Organizaciones</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      &copy; 2025 Holy Fest - Todos los derechos reservados
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

header h1 {
  margin: 0;
  color: #333;
}

nav a {
  margin-left: 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-active {
  color: #4caf50;
}

footer {
  margin-top: 30px;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #ddd;
  color: #666;
}
</style>
