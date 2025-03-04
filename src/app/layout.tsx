import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="flex">
                <ThemeProvider>
                    {/* 화면이 md 이상일 때만 보이는 사이드바 */}
                    <aside className="hidden md:block">
                        <SideBar />
                    </aside>
                    <div className="flex-1 flex flex-col">
                        <Header />
                        <main className="flex-1 p-4">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
