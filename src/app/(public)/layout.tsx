import '../globals.css';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="layout-title">포켓몬 세계에 오신 걸 환영합니다!</h1>
      {children}
    </div>
  );
}
