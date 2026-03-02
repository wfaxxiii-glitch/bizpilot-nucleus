import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Mail, Lock, User, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { cn } from '../lib/utils';

export function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center p-6 transition-colors">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Welcome back</h1>
          <p className="text-gray-500 dark:text-zinc-400 mt-2">Log in to your BizPilot account</p>
        </div>

        <Card>
          <CardContent className="pt-8 space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-zinc-300">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input type="email" placeholder="alex@company.com" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium dark:text-zinc-300">Password</label>
                  <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input type="password" placeholder="••••••••" className="pl-10" required />
                </div>
              </div>
              <Button className="w-full h-11 text-base" type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100 dark:border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-zinc-900 px-2 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-11">Google</Button>
              <Button variant="outline" className="h-11">Github</Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 dark:text-zinc-400">
          Don't have an account? <Link to="/auth/signup" className="text-blue-600 font-semibold hover:underline">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
}

export function SignupPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
    else navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center p-6 transition-colors">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Create your account</h1>
          <p className="text-gray-500 dark:text-zinc-400 mt-2">Start your 14-day free trial today</p>
        </div>

        <div className="flex justify-between items-center px-4 relative">
          <div className="absolute left-0 right-0 top-4 h-[2px] bg-gray-100 dark:bg-zinc-800 -z-0" />
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2 relative z-10 bg-gray-50 dark:bg-zinc-950 px-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all",
                step === i ? "bg-blue-600 border-blue-600 text-white" : "border-gray-200 dark:border-zinc-800 text-gray-400 bg-white dark:bg-zinc-900"
              )}>
                {i}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Step {i}</span>
            </div>
          ))}
        </div>

        <Card>
          <CardContent className="pt-8">
            <form onSubmit={handleNext} className="space-y-6">
              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-zinc-300">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input placeholder="John Doe" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-zinc-300">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input type="email" placeholder="john@company.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-zinc-300">Create Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-zinc-300">Business Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input placeholder="Acme Inc." className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-zinc-300">Business Type</label>
                    <select className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-zinc-100">
                      <option>E-commerce</option>
                      <option>SaaS</option>
                      <option>Service Agency</option>
                      <option>Retail</option>
                      <option>Other</option>
                    </select>
                  </div>
                </>
              )}
              <Button className="w-full h-11 text-base group" type="submit">
                {step === 1 ? 'Next Step' : 'Launch Dashboard'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 dark:text-zinc-400">
          Already have an account? <Link to="/auth/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}