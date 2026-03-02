import * as React from "react"
import { Command } from "cmdk"
import { Search, Sparkles, LayoutDashboard, Settings, User, Bell, Plus, Terminal } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function AICommandPalette() {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      try {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      } catch (err) {
        console.error("Keyboard event error:", err)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border rounded-md hover:bg-accent/50 transition-colors w-64 bg-background"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left text-xs">Search or ask AI...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-0 -z-10" onClick={() => setOpen(false)} />
          <Command className="w-full max-w-xl overflow-hidden rounded-xl border bg-popover shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Command.Input
                placeholder="Type a command or ask BizPilot..."
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
              <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
              <Command.Group heading="AI Actions" className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                <Command.Item className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent cursor-pointer text-sm text-foreground hover:outline-none data-[selected='true']:bg-accent">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Generate Monthly Report</span>
                </Command.Item>
                <Command.Item className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent cursor-pointer text-sm text-foreground hover:outline-none data-[selected='true']:bg-accent">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span>Analyze Market Trends</span>
                </Command.Item>
              </Command.Group>
              <Command.Separator className="h-px bg-border my-2 mx-2" />
              <Command.Group heading="Navigation" className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                <Command.Item onSelect={() => { navigate("/dashboard"); setOpen(false) }} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent cursor-pointer text-sm text-foreground hover:outline-none data-[selected='true']:bg-accent">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Go to Dashboard</span>
                </Command.Item>
                <Command.Item onSelect={() => { navigate("/settings"); setOpen(false) }} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent cursor-pointer text-sm text-foreground hover:outline-none data-[selected='true']:bg-accent">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Command.Item>
                <Command.Item className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent cursor-pointer text-sm text-foreground hover:outline-none data-[selected='true']:bg-accent">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Command.Item>
              </Command.Group>
            </Command.List>
            <div className="flex items-center justify-between border-t bg-muted/50 px-4 py-2">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">BizPilot AI v1.0</span>
              <div className="flex gap-2">
                <span className="text-[10px] text-muted-foreground">Esc to close</span>
              </div>
            </div>
          </Command>
        </div>
      )}
    </>
  )
}