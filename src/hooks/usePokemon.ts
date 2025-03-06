import useSWR from "swr";

// function: API 데이터를 가져오는 fetcher 함수 //
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// hook: 포켓몬 데이터를 가져오는 커스텀 훅 //
const usePokemon = (limit: number, offset: number) => {

    // state: SWR을 이용한 데이터 가져오기 //
    const { data, error, isLoading } = useSWR(
        `/api/pokemon?limit=${limit}&offset=${offset}`,
        fetcher
    );

    // return: 포켓몬 데이터 및 상태 반환 //
    return {
        pokemonList: data || [],
        isLoading,
        error,
    };
};

export default usePokemon;
