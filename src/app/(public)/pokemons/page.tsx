import PokemonList from "@/components/PokemonList";

export default function PokemonPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">포켓몬 리스트</h1>
            <PokemonList />
        </div>
    );
}