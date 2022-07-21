<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Pasteles
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Preparo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pastel in pasteles" v-bind:key="pastel.ID_pastel">
                            <td>{{pastel.ID_pastel}}</td>
                            <td>{{pastel.Nombre}}</td>
                            <td>{{pastel.Descripcion}}</td>
                            <td>{{pastel.Preparado_por}}</td>
                            <td>
                                <div>
                                    <div class="btn-group" role="group" aria-label="">
                                        <button type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" v-on:click="borrarPastel(pastel.ID_pastel)" class="btn btn-danger">Borrar</button>                                        
                                    </div>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>
           
        </div>

    </div>
</template>

<script>
export default {
        data(){
            return{
                pasteles:[]
            }
        },
        
        created:function(){
            this.consultaPasteles();

        },
        methods:{
            
            consultaPasteles(){
                fetch('http://localhost/datos/')
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta)
                    this.pasteles=[]
                    if(typeof datosRespuesta[0].success==='undefined')
                    {
                        this.pasteles=datosRespuesta;
                    }
                })
                .catch(console.log)
            },
            borrarPastel(ID_pastel){
                
                console.log(ID_pastel);

                fetch('http://localhost/datos/?borrar'+ID_pastel)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{

                    console.log(datosRespuesta)
                    window.location.href="listarpastel"

                })
                .catch(console.log)
            }

        }
}
</script>