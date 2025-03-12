"use client";

import { useEffect, useState } from "react";
import usePokemon from "@/hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { GetPokemon } from "@/types";
import LoadingSpinner from "./LoadingSpinner";
import InfiniteScroll from "./InfiniteScroll";

// variable: 한 페이지에 보여줄 포켓몬 개수 //
const LIMIT = 20;

// component: PokemonList 컴포넌트 //
const PokemonList = () => {

    // state: 현재 페이지 상태 //
    const [page, setPage] = useState(0);
    const [pokemonList, setPokemonList] = useState<GetPokemon[]>([]);

    // variable: 현재 페이지의 데이터 offset 계산 //
    const offset = page * LIMIT;

    // state: 포켓몬 데이터 요청 //
    const { pokemonList: newPokemon, isLoading, error } = usePokemon(LIMIT, offset);
    
    // 기존 데이터에 새 데이터 추가
    useEffect(() => {
        if (newPokemon.length > 0) {
            setPokemonList((prevList) => [...prevList, ...newPokemon]);
        }
    }, [newPokemon]);

    if (error) return <p className="text-red-500">{error.message}</p>;

    // render: PokemonList 컴포넌트 렌더링 //
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {pokemonList.map((pokemon: GetPokemon) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
                ))}
            </div>

            {isLoading && <LoadingSpinner />}
            
            <InfiniteScroll page={page} setPage={setPage} isLoading={isLoading} />
        </div>
    );
};

export default PokemonList;
