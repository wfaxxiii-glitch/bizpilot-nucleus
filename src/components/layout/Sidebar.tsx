import React from "react"
import { NavLink } from "react-router-dom"
import { 
  LayoutDashboard, 
  Sparkles, 
  MessageSquare, 
  FileText, 
  Lightbulb, 
  Settings, 
  X,
  Zap,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Sparkles, label: "Content Gen", href: "/features/content" },
  { icon: MessageSquare, label: "Smart Reply", href: "/features/reply" },
  { icon: FileText, label: "Invoices", href: "/features/invoice" },
  { icon: Lightbulb, label: "Marketing", href: "/features/marketing" },
]

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r bg-background/50 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">BizPilot AI</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">Main Menu</div>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => onClose()}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )
              }
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 border border-primary/20 relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 h-12 w-12 bg-primary/20 blur-xl group-hover:scale-150 transition-transform" />
            <h4 className="text-xs font-semibold flex items-center gap-2">
              <Zap className="h-3 w-3 text-primary" />
              Pro Plan
            </h4>
            <p className="text-[10px] text-muted-foreground mt-1">Unlock all AI features and priority support.</p>
            <Button size="sm" className="w-full mt-3 h-8 text-[10px] bg-primary/20 text-primary hover:bg-primary/30 border-none">
              Upgrade Now
            </Button>
          </div>

          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 mt-4 text-sm font-medium rounded-lg transition-colors",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <Settings className="h-4 w-4" />
            Settings
          </NavLink>
        </div>
      </aside>
    </>
  )
}