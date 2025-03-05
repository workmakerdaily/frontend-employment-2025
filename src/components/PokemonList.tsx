"use client";

import { useState } from "react";
import usePokemon from "@/hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { GetPokemon } from "@/types";

const LIMIT = 20; // 한 페이지에 보여줄 포켓몬 개수

const PokemonList = () => {
    const [page, setPage] = useState(0);
    const offset = page * LIMIT;
    const { pokemonList, isLoading, error } = usePokemon(LIMIT, offset);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error.message}</p>;

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {pokemonList.map((pokemon: GetPokemon) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default PokemonList;
