"use client";

import { GetPokemon } from "@/types";
import { useState, useEffect } from "react";

interface Props {
    limit?: number;
    offset?: number;
}

const usePokemon = ({ limit = 20, offset = 0 }: Props) => {
    const [pokemonList, setPokemonList] = useState<GetPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `http://localhost:3000/api/pokemon?limit=${limit}&offset=${offset}`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch Pokemon data");
                }
                const data: GetPokemon[] = await res.json();
                setPokemonList(data ?? []);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [limit, offset]);

    return { pokemonList, loading, error };
};

export default usePokemon;