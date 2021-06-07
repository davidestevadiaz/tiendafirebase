/*cambiar variables*/
<template>
    <div class="card">
          <h3>{{ juego.Nombre }}</h3>
          <img v-bind:src="juego.Imagen">
                    <p class="">{{juego.Descripcion}}</p>
                    <p class="">El precio es {{juego.Precio}}</p>
                    <p class="">Hay {{juego.Stock}} unidades</p>
                    <button >Comprar</button>
    </div>

</template>

<script>

export default {
    name: 'contenido',
    props: ['juego'],
    methods:{
/*        comprobarStock(){
            if(juego.Stock==0)
                nostock=true;
        }*/
    },
    /*data:{
        displayModal:false,   
        descripcion:'',
        precio:'',
        stock:''
    }*/

}
</script>

<style scoped>
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 33.33%;
    background-color: rgba(0, 0, 0, 0.685);
    color: blanchedalmond;
    padding: 1.2rem;
    margin: 0.2rem;
}

</style>