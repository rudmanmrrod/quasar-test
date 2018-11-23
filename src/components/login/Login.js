import qErrors from '../qErrors.vue'

export default {
  name: 'Login',
  components: {qErrors},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.$validator.validateAll()) {
      }
    }
  },
  mounted () {

  }
}
