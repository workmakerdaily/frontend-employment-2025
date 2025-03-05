import { GetPokemon } from "@/types";
import Image from "next/image";

const PokemonCard = ({ name, image }: GetPokemon) => {
    return (
        <div className="flex flex-col items-start">
            {/* 카드 영역 (배경, 다크모드 적용) */}
            <div className="bg-card text-card-foreground border-2 border-border p-4 rounded-lg flex items-center justify-center">
                <Image src={image} alt={name} width={150} height={150} className="rounded-lg" />
            </div>
            {/* 포켓몬 이름 (카드 아래, 왼쪽 정렬) */}
            <p className="mt-3 text-lg font-medium text-left">
                {name}
            </p>
        </div>
    );
};

export default PokemonCard;
