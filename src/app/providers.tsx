'use client';
import {NextUIProvider} from "@nextui-org/react";
import { SessionProvider } from 'next-auth/react';
interface ProviderProps {
    children: React.ReactNode
}

function Providers({children}:ProviderProps) {
  return (
    <SessionProvider>
    <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  )
}

export default Providers