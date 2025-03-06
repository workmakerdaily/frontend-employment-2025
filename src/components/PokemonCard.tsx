import { GetPokemon } from "@/types";
import Image from "next/image";

// component: PokemonCard 컴포넌트 //
const PokemonCard = ({ name, image }: GetPokemon) => {

    // render: PokemonCard 컴포넌트 렌더링 //
    return (
        <div className="flex flex-col items-start">
            
            <div className="bg-card text-card-foreground border-2 border-border p-6 rounded-lg flex items-center justify-center">
                <Image src={image} alt={name} width={150} height={150} className="rounded-lg" />
            </div>

            <p className="text-lg font-medium text-left">
                {name}
            </p>
        </div>
    );
};

export default PokemonCard;
