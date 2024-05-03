import { SidebarDrawerProvider } from './hooks/SidebarDrawerContext';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarDrawerProvider>
        {children}
      </SidebarDrawerProvider>
    </div>
  )
}