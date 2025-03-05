import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePokemon = (limit: number, offset: number) => {
    const { data, error, isLoading } = useSWR(
        `http://localhost:3000/api/pokemon?limit=${limit}&offset=${offset}`,
        fetcher
    );

    return {
        pokemonList: data || [],
        isLoading,
        error,
    };
};

export default usePokemon;
