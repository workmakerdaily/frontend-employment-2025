import '../globals.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="layout-title">사용자 관리</h1>
      {children}
    </div>
  );
}
