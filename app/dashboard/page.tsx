'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const stats = [
  { name: 'Total Enrolled', value: '124', icon: Users, color: 'blue', trend: '+12%', positive: true },
  { name: 'Staff Members', value: '18', icon: Users, color: 'emerald', trend: '0%', positive: true },
  { name: 'Daily Attendance', value: '92%', icon: Calendar, color: 'amber', trend: '+2%', positive: true },
  { name: 'Pending Fees', value: 'R 4,250', icon: AlertCircle, color: 'rose', trend: '-5%', positive: false },
];

const attendanceData = [
  { name: 'Mon', attendance: 110 },
  { name: 'Tue', attendance: 115 },
  { name: 'Wed', attendance: 108 },
  { name: 'Thu', attendance: 112 },
  { name: 'Fri', attendance: 118 },
];

const enrollmentData = [
  { month: 'Jan', count: 80 },
  { month: 'Feb', count: 85 },
  { month: 'Mar', count: 95 },
  { month: 'Apr', count: 105 },
  { month: 'May', count: 115 },
  { month: 'Jun', count: 124 },
];

const childrenList = [
  { id: 1, name: 'Liam Smith', age: '4 years', status: 'Present', group: 'Preschool' },
  { id: 2, name: 'Emma Johnson', age: '2 years', status: 'Absent', group: 'Toddlers' },
  { id: 3, name: 'Noah Williams', age: '8 years', status: 'Present', group: 'Aftercare' },
  { id: 4, name: 'Olivia Brown', age: '5 years', status: 'Present', group: 'Grade R' },
  { id: 5, name: 'Ava Garcia', age: '6 months', status: 'Present', group: 'Infants' },
];

const notifications = [
  { id: 1, title: 'New Enrollment', message: 'Sarah Miller enrolled her son, Leo.', time: '2h ago', icon: CheckCircle2, color: 'emerald' },
  { id: 2, title: 'Payment Received', message: 'Fee payment received from Michael Chen.', time: '5h ago', icon: TrendingUp, color: 'blue' },
  { id: 3, title: 'Attendance Alert', message: '3 children marked absent without notice.', time: '1d ago', icon: AlertCircle, color: 'rose' },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="daycare-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-500`}>
                    <Icon size={24} />
                  </div>
                  <button className="p-1 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                    <MoreVertical size={18} />
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 font-medium">{stat.name}</p>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <div className={`flex items-center gap-1 text-xs font-bold ${stat.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stat.trend}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="daycare-card p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-lg">Weekly Attendance</h3>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium px-3 py-1.5 outline-none">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="attendance" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="daycare-card p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-lg">Enrollment Growth</h3>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium px-3 py-1.5 outline-none">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={enrollmentData}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="count" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Children List Table */}
          <div className="lg:col-span-2 daycare-card overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-lg">Children List</h3>
              <button className="text-blue-500 text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Age</th>
                    <th className="px-6 py-4">Group</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {childrenList.map((child) => (
                    <tr key={child.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">
                            {child.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-medium">{child.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{child.age}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{child.group}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          child.status === 'Present' 
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' 
                            : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20'
                        }`}>
                          {child.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="daycare-card overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg">Recent Notifications</h3>
            </div>
            <div className="p-6 space-y-6">
              {notifications.map((n) => {
                const Icon = n.icon;
                return (
                  <div key={n.id} className="flex gap-4">
                    <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-${n.color}-50 dark:bg-${n.color}-900/20 text-${n.color}-500`}>
                      <Icon size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold">{n.title}</h4>
                        <span className="text-[10px] text-slate-400 font-medium">{n.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{n.message}</p>
                    </div>
                  </div>
                );
              })}
              <button className="w-full py-3 text-sm font-bold text-slate-500 hover:text-blue-500 transition-colors border-t border-slate-100 dark:border-slate-800 mt-4">
                Clear All Notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
