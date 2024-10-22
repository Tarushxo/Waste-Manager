'use client'

import { useState, useEffect } from "react";
import {Inter} from 'next/font/google';
import './globals.css';
import {Toaster} from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import {ThemeToggle} from '@/components/themeToogle';
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) 
{
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
        <div className={`${inter.className} min-h-screen bg-gray-100 dark:bg-[#121212]`}>
        <Toaster />
          <div className="flex justify-between items-center">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} totalEarnings={totalEarnings}/>
            <ThemeToggle />
          </div>
          <div className="flex flex-1">
            Sidebar
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-al duration-300">
              Children
            </main>
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  ) 
};