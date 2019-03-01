export const state = () => ({
  errors: [],
  showErrors: false
})
//
export const getters = {
  lastError: state => {
      return state.errors[0]
  },
  showError: state => {
      return state.showErrors
  }
}
//
export const mutations = {
  newError:(state, error) => {
    state.errors.push(error)
    state.showErrors = true
  },
  killErrors:(state) => {
  	state.errors = []
  	state.showErrors = false
  }

}
export const actions = {

}
