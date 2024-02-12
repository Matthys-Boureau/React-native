async function fetchData() {
    const result = await fetch(`https://eldenring.fanapis.com/api/classes`);
    const json = await result.json();
    return json.data; // Retourne uniquement la partie "data" de l'objet JSON
}

export async function useEldenRingClass() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.error('Error fetching Elden Ring class data:', error);
        throw error;
    }
}
