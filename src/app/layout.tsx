import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="flex">
                <ThemeProvider>
                    <SideBar />
                    <div className="flex flex-col w-full">
                        <Header />
                        <main className="flex-1 p-6 pt-[100px] pl-0 pr-0 md:pr-4 md:pl-[260px]">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
