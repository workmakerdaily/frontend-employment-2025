"use client";

import { useState } from "react";
import usePokemon from "@/hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { GetPokemon } from "@/types";
import LoadingSpinner from "./LoadingSpinner";

// variable: 한 페이지에 보여줄 포켓몬 개수 //
const LIMIT = 20;

// component: PokemonList 컴포넌트 //
const PokemonList = () => {

    // state: 현재 페이지 상태 //
    const [page, setPage] = useState(0);

    // variable: 현재 페이지의 데이터 offset 계산 //
    const offset = page * LIMIT;

    // state: 포켓몬 데이터 요청 //
    const { pokemonList, isLoading, error } = usePokemon(LIMIT, offset);

    if (isLoading) return <LoadingSpinner />
    if (error) return <p className="text-red-500">{error.message}</p>;

    // render: PokemonList 컴포넌트 렌더링 //
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
