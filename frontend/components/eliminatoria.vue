<template>
  <div class="eliminatori-diagram">
    <h3 class="text-2xl font-bold text-center mb-4">
      Fixture Eliminatorio
    </h3>

    <!-- Generar las rondas a partir de los partidos -->
    <div v-for="(ronda, index) in rondas" :key="index" class="ronda-container mb-8">
      <h4 class="ronda-title text-xl font-bold text-center mb-4">
        Ronda {{ index + 1 }}
      </h4>

      <div class="rondas-cruces flex justify-center">
        <!-- Mostrar los cruces de la ronda -->
        <div v-for="(cruce, idx) in ronda" :key="idx" class="cruce flex justify-between mb-4">
          <div class="cruce-partido flex flex-col justify-center items-center">
            <span class="jugador">{{ cruce.jugador1 || 'Esperando' }}</span>
          </div>
          <div class="cruce-partido flex flex-col justify-center items-center">
            <span class="jugador">{{ cruce.jugador2 || 'Esperando' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuadreEliminatories',
  props: {
    // Propiedad para recibir los datos de las partidas
    partides: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // Aquí se almacenarán las rondas organizadas
      rondas: []
    }
  },
  mounted () {
    // Organizar las rondas cuando el componente se monte
    this.organizarRondas()
  },
  methods: {
    // Organiza las partidas en rondas
    organizarRondas () {
      let partidosEnRonda = this.partides
      const rondasGeneradas = []

      // Añadimos rondas de eliminación
      while (partidosEnRonda.length > 1) {
        rondasGeneradas.push(partidosEnRonda)
        partidosEnRonda = this.generarPartidosSiguientes(partidosEnRonda)
      }

      // Agregar la última ronda (Final)
      rondasGeneradas.push(partidosEnRonda)

      this.rondas = rondasGeneradas
    },

    // Genera los siguientes partidos a partir de los partidos previos (cruces)
    generarPartidosSiguientes (partidos) {
      const siguientesPartidos = []
      for (let i = 0; i < partidos.length; i += 2) {
        siguientesPartidos.push({
          jugador1: partidos[i].jugador1,
          jugador2: partidos[i + 1] ? partidos[i + 1].jugador1 : null // El jugador 2 es nulo si no hay segundo jugador
        })
      }
      return siguientesPartidos
    }
  }
}
</script>

  <style scoped>
  .eliminatori-diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rondas-cruces {
    display: flex;
    justify-content: center;
    gap: 50px;
    position: relative;
  }

  .cruce-partido {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
  }

  .cruce-partido::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 20px;
    background-color: #000;
  }

  .ronda-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ronda-title {
    margin-bottom: 10px;
  }

  .jugador {
    font-weight: bold;
    font-size: 1rem;
  }
  </style>
