import { SidebarDrawerProvider } from './hooks/SidebarDrawerContext';
import { ChakraProvider } from '@chakra-ui/react'


export const metadata = {
  title: 'Controle de Pontos',
  description: 'Generated by Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <SidebarDrawerProvider>
            {children}
          </SidebarDrawerProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
