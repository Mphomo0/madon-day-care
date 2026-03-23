'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  Bell, 
  Search, 
  LogOut, 
  Menu, 
  X,
  Heart,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Children', href: '/dashboard/children', icon: Users },
  { name: 'Attendance', href: '/dashboard/attendance', icon: Calendar },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                <Heart size={18} fill="currentColor" />
              </div>
              <span className="font-display font-bold tracking-tight">MadonAdmin</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-1 py-4">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-blue-900/30 text-blue-400'
                      : 'text-slate-400 hover:bg-slate-800'
                  )}
                >
                  <Icon size={20} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-900/20 transition-all duration-200">
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
              <span>Dashboard</span>
              <ChevronRight size={14} />
              <span className="text-slate-100 font-medium">Overview</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-slate-800 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900" />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold text-xs">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
