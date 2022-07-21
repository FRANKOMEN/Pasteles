<template>
  <div id="app">
    <nav>
      <router-link to="/crearpastel">Crear Pastel</router-link>
      |
      <router-link to="/listarpastel">Listar Pasteles</router-link>
      |
      <router-link to="/editarpastel">Editar Pastel</router-link>
    </nav>
    <router-view/>
  </div>
</template>

