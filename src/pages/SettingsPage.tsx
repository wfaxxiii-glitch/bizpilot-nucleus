import React from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  CreditCard, 
  Globe, 
  Shield, 
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { cn } from '../lib/utils';

export function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Account Settings</h1>
        <p className="text-gray-500 dark:text-zinc-400 mt-1">Manage your profile, billing, and system preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 flex flex-col gap-2">
          {[
            { label: 'General', icon: User, active: true },
            { label: 'Security', icon: Lock, active: false },
            { label: 'Notifications', icon: Bell, active: false },
            { label: 'Billing', icon: CreditCard, active: false },
            { label: 'Integrations', icon: Globe, active: false },
          ].map((item) => (
            <button key={item.label} className={cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all text-left",
              item.active 
                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" 
                : "text-gray-500 hover:bg-gray-50 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
            )}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="md:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <h3 className="font-bold dark:text-white text-lg">Personal Information</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-gray-100 dark:border-zinc-800">
                <div className="w-20 h-20 rounded-2xl bg-gray-200 dark:bg-zinc-800 flex items-center justify-center relative group">
                  <User className="w-8 h-8 text-gray-400" />
                  <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <span className="text-[10px] text-white font-bold uppercase">Change</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Profile Photo</h4>
                  <p className="text-xs text-gray-500 mt-1">Min 400x400px, PNG or JPEG.</p>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">Upload</Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">Remove</Button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold dark:text-zinc-300">First Name</label>
                  <Input defaultValue="Alex" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold dark:text-zinc-300">Last Name</label>
                  <Input defaultValue="Rivera" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold dark:text-zinc-300">Email Address</label>
                  <Input defaultValue="alex@company.com" disabled />
                  <p className="text-[10px] text-gray-400 mt-1">Email cannot be changed on the basic plan.</p>
                </div>
              </div>
              <Button className="px-8">Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-bold dark:text-white text-lg">Subscription Plan</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">Pro Plan <span className="text-xs font-normal text-blue-600 bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded-full ml-2">Active</span></h4>
                    <p className="text-xs text-gray-500 dark:text-zinc-400">Renewal Date: Oct 24, 2024</p>
                  </div>
                </div>
                <Button variant="outline" className="bg-white dark:bg-zinc-950 font-bold border-gray-200 dark:border-zinc-800">Manage Subscription</Button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold dark:text-zinc-200">Plan Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Unlimited AI Content', '2,000 Messages/Mo', 'Custom Domain', 'Team Accounts', 'API Access', 'Priority Support'].map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-gray-600 dark:text-zinc-400 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-100 dark:border-red-900/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <h3 className="font-bold text-red-600 text-lg">Danger Zone</h3>
                <p className="text-xs text-gray-500">Permanently delete your account and all data.</p>
              </div>
              <Button variant="destructive" className="gap-2"><Trash2 className="w-4 h-4" /> Delete Account</Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}