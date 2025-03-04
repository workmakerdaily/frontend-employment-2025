import { create } from 'zustand';

interface ThemeState {
    theme: 'light' | 'dark';
    toggleTheme: (count: number) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    theme: 'light', // 기본값 설정
    toggleTheme: (count) => set(() => {
        const newTheme = count >= 5 ? 'dark' : 'light';
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
        }
        return { theme: newTheme };
    }),
}));

// 클라이언트에서 localStorage에서 초기 값을 가져오기 위한 useEffect 활용
if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
        useThemeStore.setState({ theme: savedTheme });
    }
}

export default useThemeStore;