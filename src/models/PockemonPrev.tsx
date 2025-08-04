export interface PockemonPrevProps {
    pokemon: string;
    url: string;
    id: number;
    image: string;
}

export async function fetchPokemonPrev(): Promise<PockemonPrevProps[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=-1`);
    const data = await response.json();

    return data.results.map((item: any) => {
        const id = getIdFromUrl(item.url);
        return {
            pokemon: item.name,
            url: item.url,
            id: id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
    });
}

function getIdFromUrl(url: string): number {
    const parts = url.split("/").filter(Boolean);
    return parseInt(parts[parts.length - 1]);
}