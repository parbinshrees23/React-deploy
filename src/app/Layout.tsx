import { Outlet } from 'react-router';
import { WebHeader } from './components/WebHeader';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Toaster } from './components/ui/sonner';

export function Layout() {
  return (
    <>
      <WebHeader />
      <main>
        <Outlet />
      </main>
      <MobileBottomNav />
      <Toaster position="top-center" />
    </>
  );
}
