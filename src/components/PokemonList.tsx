"use client";

import { useState } from "react";
import usePokemon from "@/hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const LIMIT = 20; // 한 페이지에 보여줄 포켓몬 개수

const PokemonList = () => {
    const [page, setPage] = useState(0); // 페이지 번호 관리
    const offset = page * LIMIT;
    const { pokemonList, loading, error } = usePokemon({ limit: LIMIT, offset });

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="flex flex-col items-center">
            {/* 포켓몬 카드 리스트 */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
                ))}
            </div>

            {/* 페이지네이션 컴포넌트 */}
            <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default PokemonList;
