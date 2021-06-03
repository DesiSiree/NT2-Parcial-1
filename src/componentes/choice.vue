<template>
  <section class="src-componentes-choice">
    <div class="jumbotron">
        <h2>Multiple Choice</h2>
        <hr>

        <div class="table-responsive">
            <table class="table">
                <tr class="bg-success text-white tabla-header">
                    <th>Numero</th>
                    <th>Respuestas</th>
                </tr>
                <tr class="bg-info text-white color-lineas" v-for="(pregunta, index) in preguntas" :key="index">
                    <td>{{ pregunta.numero }}</td>
                    <td>{{ pregunta.respuestas }}</td>
                </tr>
            </table>
        </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas : [
            { numero: 1, respuestas: ['D'] },
            { numero: 2, respuestas: ['C'] },
            { numero: 3, respuestas: ['B'] },
        ]
      }
    }
}


</script>

<style scoped lang="css">
  .src-componentes-choice {

  }

  .jumbotron {
    background-color: rgba(204, 204, 204, 0.877);
    color: white;
  }

  .tabla-header {
    background-color: rgb(0, 0, 0) !important;
  }

  .color-lineas{
      background-color: rgb(230, 162, 162) !important;
  }

  hr {
    background-color: #444;
  }

</style>
