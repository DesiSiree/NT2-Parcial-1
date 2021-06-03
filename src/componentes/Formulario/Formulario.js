
export default {
    name: 'src-componentes-formulario',
    components: {},
    props: [],
    data () {
      return {
        formData : this.getInicialData(),
        formState: {},
        nombreLengthMin : 3,
        nombreLengthMax: 15,
        items: [],
        total: 0,
        presupuesto: ''
      }
    },
    computed: {
  
    },
    mounted () {
  
    },
    methods: {
  
      getInicialData() {
        return {
          nombre: '',
          descripcion: '',
          importe: '',
          fecha: '',
        }
      },
  
      enviar() {
        //... -> SPREAD Operator
        console.log({...this.formData})
        this.total += this.formData.importe;
        this.formData.fecha = this.getFecha();
        this.items.push(this.formData);
        this.formData = this.getInicialData()
        this.formState._reset()
      },

      getFecha() {
          let fecha = new Date();
          return fecha.toLocaleString();
      },

      getColor() {
        let clase = 'bg-secondary text-white tabla-footer ';
        if (this.presupuesto && this.total > this.presupuesto){
          clase += 'importe-mayorPresupuesto';
        } else if (this.total < 1000){
          clase += 'importe-inferior';
        } else if (this.total < 5000){
          clase += 'importe-entre';
        } else {
          clase += 'importe-superior';
        }
        return clase;
      }
    }
  }
  
  