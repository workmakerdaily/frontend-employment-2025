import '../globals.css';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Group 1 레이아웃입니다.</h1>
      {children}
    </div>
  );
}
