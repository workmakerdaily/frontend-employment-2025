import { create } from 'zustand';

// interface: 테마 상태 및 액션 정의 //
interface ThemeState {
    theme: 'light' | 'dark';
    toggleTheme: (count: number) => void;
}

// store: 테마 상태 관리하는 zustand 스토어 //
const useThemeStore = create<ThemeState>((set) => ({
    
    // state: 기본 테마 설정 //
    theme: 'light',

    // function: 테마 변경 함수 //
    toggleTheme: (count) => set(() => {
        const newTheme = count >= 5 ? 'dark' : 'light';
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
        }
        return { theme: newTheme };
    }),
}));

// 클라이언트에서 localStorage의 테마 값을 불러와 초기화 //
if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
        useThemeStore.setState({ theme: savedTheme });
    }
}

export default useThemeStore;