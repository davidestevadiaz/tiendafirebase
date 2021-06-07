<template>
        <div id="nav">
          <ul class="nav--links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Hire Me</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
              <input type="text" placeholder="Escriba aquí su busqueda">
          </ul>
        </div>
  
</template>

<style scoped>
/*.nav{
}*/

.nav--links{
    background-color: rgb(69, 22, 107);
  list-style: none;
  display: flex;
}

.nav--links li{
padding:1.2rem;
text-decoration: none;
}

a:link, a:visited, a:active {
    text-decoration:none;
    color: white;
}
</style>