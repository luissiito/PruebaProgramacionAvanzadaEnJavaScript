
export default (function ModuloApi() {
    const url = `${window.location.protocol}//${window.location.host}/PruebaProgramacionAvanzadaEnJavaScript/animales.json`;
    async function getAnimalsFromApi() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.animales;
          } catch (error) {
            console.error("Aquí hubo un error:", error);
          }
    }
    return { getAnimalsFromApi };
})();