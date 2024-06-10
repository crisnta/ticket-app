
export const getUsuarioStorage = () => {
  return {
    ejecutivo: localStorage.getItem('ejecutivo'),
    escritorio: localStorage.getItem('escritorio'),
  }
}
