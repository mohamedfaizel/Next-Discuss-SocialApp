'use client';
import {HeroUIProvider} from "@heroui/react";
import { SessionProvider } from 'next-auth/react';
interface ProviderProps {
    children: React.ReactNode
}

function Providers({children}:ProviderProps) {
  return (
    <SessionProvider>
    <HeroUIProvider>{children}</HeroUIProvider>
    </SessionProvider>
  )
}

export default Providers