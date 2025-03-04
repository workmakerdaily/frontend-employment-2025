import '../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Group 2 레이아웃입니다.</h1>
      {children}
    </div>
  );
}
