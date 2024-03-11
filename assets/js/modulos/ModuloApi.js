
export default (function ModuloApi() {
    const url = `${window.location.protocol}//${window.location.host}/animales.json`;
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

// USAR ESTE MÓDULO SOLAMENTE CUANDO SE REQUIERA OBTENER LA INFORMACIÓN DE MANERA ASÍNCRONA