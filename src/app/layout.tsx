import SideBar from "@/components/SideBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="flex">
                <SideBar />
                <main className="flex-1 p-4">{children}</main>
            </body>
        </html>
    );
}
