<template>
  <div class="data">
    <h1>{{ title }}</h1>

    <!-- v-if condicional para mostrar esta etiqueta en caso de que no haya datos guardados aún -->
    <h3 v-if="!data || data.length == 0">No hay datos guardados hasta el momento</h3>

    <!-- Se crea una tabla para la muestra de datos guardados -->
    <table class="table table-striped table-bordered border-primary mt-5" v-if="data">
      <thead class="tableHead table-dark">
        <tr>
          <th>Negocio</th>
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Tipo</th>
          <th>Gestión</th>
          <th>Comp. Monto</th>
          <th>Para cuando</th>
          <th>Comentario</th>
          <th>BV</th>
          <th>NC</th>
          <th>ROD</th>
        </tr>
      </thead>
      <!-- v-for para mostrar las diferentes filas con los datos obtenidos en formato JSON dando una key a cada elemeto con su propio id -->
      <tbody class="tableBody table-group-divider">
        <tr v-for="dato in data" :key="dato.id">
          <td>{{ dato.commerce }}</td>
          <td>{{ dato.user }}</td>
          <td>{{ dato.date }}</td>
          <td>{{ dato.phone }}</td>
          <td>{{ dato.adress }}</td>
          <td>{{ dato.type }}</td>
          <td>{{ dato.gestion }}</td>
          <td>{{ dato.compromise.amount }}</td>
          <td>{{ dato.compromise.date }}</td>
          <td>{{ dato.comment }}</td>
          <td>{{ dato.bv ? 'SI' : 'NO'  }}</td>
          <td>{{ dato.nc ? 'SI' : 'NO' }}</td>
          <td>{{ dato.rod ? 'SI' : 'NO' }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btnsData row gap-5 justify-content-center">
        <button @click="back()" class="btn btn-primary mt-5 col-3 align-self-center">Menú</button>
        <RouterLink to="/form" class="btn btn-primary mt-5 col-4 align-self-center">Ir al Formulario</RouterLink>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      title: "Datos guardados",
      data: null,
    };
  },
  methods: {
    // metodo que obtiene los datos desde localStorage, se puede modificar para cualquier tipo de DB
    getData() {
      this.data = Object.keys(localStorage)
        .filter((key) => key.startsWith("_id__:"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
    },
    // metodo vue-router para ir a una pagina especifica
    back(){
        this.$router.push('/')
    }
  },

  // se ejecuta la obtencion de los datos cuando se monta el componente
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
