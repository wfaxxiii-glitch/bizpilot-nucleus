import React from 'react';
import { 
  Plus, 
  Download, 
  Send, 
  Trash2, 
  FileText,
  CreditCard,
  Building,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { cn } from '../lib/utils';

export function InvoiceGenerator() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Invoice Generator</h1>
          <p className="text-gray-500 dark:text-zinc-400 mt-1">Professional invoices for your professional business.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2"><Download className="w-4 h-4" /> Preview PDF</Button>
          <Button className="gap-2"><Send className="w-4 h-4" /> Send Invoice</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-bold dark:text-white">Business Details</h3>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">From (Your Company)</label>
                <Input placeholder="BizPilot AI Inc." />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">To (Client Name)</label>
                <Input placeholder="Client Co." />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Invoice Number</label>
                <Input defaultValue="INV-2024-001" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Due Date</label>
                <Input type="date" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="font-bold dark:text-white">Line Items</h3>
              <Button size="sm" variant="outline" className="gap-2"><Plus className="w-4 h-4" /> Add Item</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 items-end">
                    <div className="flex-1 space-y-2">
                      <label className="text-[10px] font-bold uppercase text-gray-400">Description</label>
                      <Input placeholder="Service or product name" />
                    </div>
                    <div className="w-24 space-y-2">
                      <label className="text-[10px] font-bold uppercase text-gray-400">Qty</label>
                      <Input type="number" defaultValue="1" />
                    </div>
                    <div className="w-32 space-y-2">
                      <label className="text-[10px] font-bold uppercase text-gray-400">Price</label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 mb-0.5">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-blue-600 text-white border-none">
            <CardContent className="p-8 space-y-6">
              <h3 className="font-bold text-xl">Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-blue-100">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Tax (10%)</span>
                  <span>$0.00</span>
                </div>
                <div className="h-px bg-blue-500" />
                <div className="flex justify-between font-bold text-2xl">
                  <span>Total Due</span>
                  <span>$0.00</span>
                </div>
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 h-12 text-lg font-bold">
                Download Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-bold dark:text-white">Payment Options</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold dark:text-zinc-200">Stripe</p>
                  <p className="text-[10px] text-gray-500">Connected</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-zinc-800 flex items-center justify-center text-gray-400">
                  <Building className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold dark:text-zinc-200">Bank Transfer</p>
                  <p className="text-[10px] text-gray-500">Not configured</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function MarketingIdeas() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs font-bold border border-blue-100 dark:border-blue-800 uppercase tracking-widest">
          AI Brainstorming
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Marketing Idea Generator</h1>
        <p className="text-lg text-gray-500 dark:text-zinc-400">Stuck for inspiration? Let BizPilot AI generate high-growth marketing strategies.</p>
      </div>

      <div className="relative">
        <Input placeholder="Describe your business goal (e.g. increase sales by 20% this month)" className="h-16 pl-6 pr-48 text-lg rounded-2xl shadow-xl border-none ring-1 ring-gray-200 dark:ring-zinc-800" />
        <Button className="absolute right-2 top-2 h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700">Generate Ideas</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Viral Giveaway', tag: 'Social Media', desc: 'Host a collaborative giveaway with 3 complementary brands to triple your reach.', impact: 'High' },
          { title: 'UGC Campaign', tag: 'Community', desc: 'Incentivize customers to share videos of your product for a chance to be featured.', impact: 'Medium' },
          { title: 'Email Sequence', tag: 'Retention', desc: 'A 5-part automated series focused on educational value before a hard sell.', impact: 'High' },
          { title: 'Podcast Guesting', tag: 'PR', desc: 'Identify 10 niche podcasts and pitch yourself as an expert on sustainable business.', impact: 'Medium' },
          { title: 'Flash Sale Blitz', tag: 'Sales', desc: 'A 24-hour only event with real-time countdown timers on your website.', impact: 'High' },
          { title: 'Partner Webinar', tag: 'Content', desc: 'Host a live Q&A with an industry leader to establish authority and capture leads.', impact: 'Medium' },
        ].map((idea, i) => (
          <Card key={i} className="hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer group">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded text-[10px] font-bold text-gray-500 uppercase">{idea.tag}</span>
                <span className={cn(
                  "text-[10px] font-bold px-2 py-1 rounded",
                  idea.impact === 'High' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                )}>Impact: {idea.impact}</span>
              </div>
              <h4 className="text-xl font-bold dark:text-white group-hover:text-blue-600 transition-colors">{idea.title}</h4>
              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">{idea.desc}</p>
              <Button variant="ghost" className="w-full justify-between p-0 font-bold text-blue-600 dark:text-blue-400 hover:bg-transparent">
                See execution plan <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}