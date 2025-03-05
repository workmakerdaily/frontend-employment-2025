import '../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="layout-title">인증 페이지</h1>
      {children}
    </div>
  );
}
