const Reducer = (state, action) => {
  switch (action.type) {
    case 'ENABLE_ADDMODEL':
      return {
        model: action.payload,
      }
    case 'DISABLE_ADDMODEL':
      return {
        model: action.payload,
      }
    case 'ENABLE_DELETEMODEL':
      return {
        model: action.payload,
      }
    case 'DISABLE_DELETEMODEL':
      return {
        model: action.payload,
      }
    case 'ENABLE_UPDATEMODEL':
      return {
        model: action.payload,
      }
    case 'DISABLE_UPDATEMODEL':
      return {
        model: action.payload,
      }
    default:
      return { ...state }
  }
}

export default Reducer
