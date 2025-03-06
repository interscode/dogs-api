import { useState } from "react";

export function useDogs() {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getDogsByBreed(breed) {
        setLoading(true);
        setError(null);

    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/5`
      );
      const data = await response.json();
      if (response.status == 404) {
        setError("No se encontraron resultados");
      } else if (response.status !== 200) {
        setError("Hubo un error al obtener la información");
      } else if (response.status === 200) {
        setDogs(data.message);
      }
    } catch {
      setError("Hubo un error al obtener la información");
    } finally {
      setLoading(false);
    }
  }

  async function getDogsRandom() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/5`);
      const data = await response.json();
      setDogs(data.message);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { dogs, loading, error, getDogsByBreed, getDogsRandom };
}
