import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  BarChart3, 
  MessageSquare, 
  Zap,
  Shield,
  PenTool,
  FileText
} from 'lucide-react';
import { Button } from '../components/ui/button';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">BizPilot AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/auth/signup">
              <Button className="rounded-full px-6">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-100 dark:border-blue-800">
                <Sparkles className="w-4 h-4" />
                <span>Next Gen Business Assistant</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Fly your business to <span className="text-blue-600">new heights</span> with AI.
              </h1>
              <p className="text-xl text-gray-500 dark:text-zinc-400 max-w-lg leading-relaxed">
                The all-in-one AI platform to automate your content, replies, invoices, and marketing strategies. Built for modern entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/signup">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                    Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                  View Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 bg-gray-200" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-zinc-500">
                  <span className="font-bold text-gray-900 dark:text-white">1,200+</span> businesses already soaring
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
              <div className="relative border border-gray-100 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e647b5b0-de25-4114-9198-9e94a5a2e183/dashboard-preview-015d935f-1771966768641.webp" 
                  alt="Dashboard Preview" 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-50/50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Everything you need to scale</h2>
            <p className="text-lg text-gray-500 dark:text-zinc-400">BizPilot AI brings together all the essential tools for running a modern business in a single, intuitive interface.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: 'AI Reply Assistant', desc: 'Auto-generate professional replies for WhatsApp, Instagram, and Email.' },
              { icon: PenTool, title: 'Content Engine', desc: 'Create high-converting social media posts and blog content in seconds.' },
              { icon: FileText, title: 'Smart Invoicing', desc: 'Generate and track professional invoices with automated reminders.' },
              { icon: BarChart3, title: 'Growth Analytics', desc: 'Real-time dashboards showing your sales, reach, and conversion metrics.' },
              { icon: Zap, title: 'Automations', desc: 'Set up custom workflows that run your business while you sleep.' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Your data is encrypted and protected with industry-leading standards.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">Ready to put your business on autopilot?</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">Join over 1,000+ founders who are using BizPilot AI to grow their business faster and smarter.</p>
            <Link to="/auth/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 h-14 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">BizPilot AI</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 dark:text-zinc-400">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
          <p className="text-sm text-gray-400 dark:text-zinc-500">© 2024 BizPilot AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}