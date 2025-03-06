import { User } from "@/types";

// variable: 유저 정보 리스트 //
const Users: User[] = [
    { name: "지우", email: "지우@pokemon.com", age: 10, region: "태초마을" },
    { name: "이슬이", email: "이슬이@pokemon.com", age: 12, region: "한지마을" },
    { name: "웅이", email: "웅이@pokemon.com", age: 15, region: "회색시티" },
];

// component: 유저 목록 페이지 //
export default function UsersPage() {

    // render: 유저 목록 페이지 렌더링 //
    return (
        <div className="flex flex-col items-center min-h-screen bg-background text-foreground p-4">
            <h1 className="text-3xl font-bold mb-6">유저 목록 관리</h1>

            <ul className="w-full max-w-md space-y-4">
                {Users.map((user) => (
                    <li key={user.email} className="border p-4 rounded-lg bg-card text-card-foreground hover:bg-secondary transition">
                            <p className="text-xl font-semibold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
