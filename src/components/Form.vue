<template>
  <main>
    <h1 class="mb-5">{{ title }}</h1>
    <!-- Creamos un Formulario HTML con los respectivos campos y usando clases de BOOTSTRAP para darle estilo responsive-->
    <form class="form" @submit.prevent="saveData()">
      <section class="left">
        <div class="formGroup row">
          <label for="commerce" class="col-4">Negocio:</label>
          <input
            v-model="info.commerce"
            name="commerce"
            type="text"
            id="commerce"
            class="col"
            required
          />
          <span class="col"
            ><b>{{ info.commerce }}</b></span
          >
        </div>
        <div class="formGroup row">
          <label for="user" class="col-4">Usuario:</label>
          <input
            v-model="info.user"
            name="user"
            type="text"
            id="user"
            class="col"
            required
          />
          <span class="col"
            ><b>{{ info.user }}</b></span
          >
        </div>
        <div class="formGroup row">
          <label for="date" class="col-4">Fecha:</label>
          <input
            v-model="info.date"
            e="date"
            type="datetime-local"
            id="date"
            class="col"
            required
          />
        </div>
        <div class="formGroup row">
          <label for="phone" class="col-4">Telefono:</label>
          <input
            v-model="info.phone"
            name="phone"
            type="number"
            id="phone"
            class="col"
            required
          />
        </div>
        <div class="formGroup row">
          <label for="adress" class="col-4">Dirección:</label>
          <input
            v-model="info.adress"
            name="adress"
            type="text"
            id="adress"
            class="col"
            required
          />
        </div>
        <div class="formGroup select row">
          <label for="type" class="col-4">Tipo:</label>
          <select
            v-model="info.type"
            name="type"
            id="type"
            class="col"
            required
          >
            <option value="option1">OPCIÓN 1</option>
            <option value="option2">OPCIÓN 2</option>
            <option value="option3">OPCIÓN 3</option>
            <option value="option4">OPCIÓN 4</option>
            <option value="option5">OPCIÓN 5</option>
          </select>
        </div>
        <div class="formGroup select row">
          <label for="gestion" class="col-4">Gestión:</label>
          <select
            v-model="info.gestion"
            name="gestion"
            id="gestion"
            class="col"
            required
          >
            <option value="option1">OPCIÓN 1</option>
            <option value="option2">OPCIÓN 2</option>
            <option value="option3">OPCIÓN 3</option>
            <option value="option4">OPCIÓN 4</option>
            <option value="option5">OPCIÓN 5</option>
          </select>
        </div>
        <div class="formGroup row">
          <div class="col-7 gap-1">
            <label for="amount" class="col-7">Compromiso de monto:</label>
            <input
              v-model="info.compromise.amount"
              name="amount"
              type="number"
              id="amount"
              class="col-5"
              required
            />
          </div>
          <div class="col row">
            <label for="when" class="col-6">Para Cuando:</label>
            <input
              v-model="info.compromise.date"
              name="when"
              type="date"
              id="when"
              class="col-6"
              required
            />
          </div>
        </div>
        <div class="formGroup row">
          <label for="comment" class="col-4">Comentario:</label>
          <input
            v-model="info.comment"
            name="comment"
            type="text"
            id="comment"
            class="col"
          />
        </div>
      </section>

      <section class="right">
        <button
          type="button"
          class="btn btn-outline-secondary bv"
          :class="{ btnActive: bvActive, '': !bvActive }"
          @click="toggleBvActive()"
        >
          BV
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary nc"
          :class="{ btnActive: ncActive, '': !ncActive }"
          @click="toggleNcActive()"
        >
          NC
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary rod"
          :class="{ btnActive: rodActive, '': !rodActive }"
          @click="toggleRodActive()"
        >
          ROD
        </button>
      </section>

      <section class="buttonsForm">
        <input type="submit" value="Aceptar" class="btn btn-primary" />
        <input type="reset" class="btn btn-primary" />
        <input
          type="button"
          value="Salir"
          class="btn btn-danger"
          @click="quitToHome()"
        />
        <RouterLink to="/data" type="button" class="btn btn-success">Datos</RouterLink>
      </section>
    </form>
  </main>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Form",
  data() {
    return {

      //creamos el objeto que almacenara todas las variables obtenidas del form

      title: "Datos de la gestión",
      info: {
        id: "",
        commerce: "",
        user: "",
        date: null,
        phone: null,
        adress: "",
        type: "",
        gestion: "",
        compromise: {
          amount: null,
          date: "",
        },
        comment: "",
        bv:false,
        nc:false,
        rod:false
      },

      //variables para activar o desactivar los botones grises
      bvActive: false,
      ncActive: false,
      rodActive: false,
    };
  },
  methods: {
    saveData() {
      //creamos un ID para los datos actualmente generados
      let id = crypto.randomUUID();
      //asignamos el id
      this.info.id = id;

      //Guardamos la informacion en localStorage
      localStorage.setItem(`_id__:${this.info.id}`, JSON.stringify(this.info));

      //resetear el formulario
      this.info = {
        id: "",
        commerce: "",
        user: "",
        date: null,
        phone: null,
        adress: "",
        type: "",
        gestion: "",
        compromise: {
          amount: null,
          date: "",
        },
        comment: "",
        bv:false,
        nc:false,
        rod:false
      }
      this.bvActive= false
      this.ncActive= false
      this.rodActive= false

      //Alerta de exito
      Swal.fire({
        title:'GUARDADO!',
        text:'Datos guardados con éxtio',
        icon:'success',
        confirmButtonText:'OK',
        confirmButtonColor:'#0d6efd',
      })
    },
    quitToHome() {
      this.$router.push("/");
    },

    toggleBvActive() {
      this.bvActive = !this.bvActive;
      this.info.bv =!this.info.bv
    },
    toggleNcActive() {
      this.ncActive = !this.ncActive;
      this.info.nc =!this.info.nc
    },
    toggleRodActive() {
      this.rodActive = !this.rodActive;
      this.info.rod =!this.info.rod
    },
  },
};
</script>

<style></style>
