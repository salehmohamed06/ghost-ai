"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal, Send, CheckCircle2, Moon, Sliders, Layers } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-bg-base text-text-primary font-sans antialiased">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,87,249,0.03)_0%,rgba(8,8,9,1)_100%)] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex h-16 items-center justify-between border-b border-border-default bg-bg-surface/50 px-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-ai/10 border border-accent-ai/20">
            <span className="text-sm font-extrabold tracking-widest text-accent-ai-text">G</span>
          </div>
          <span className="font-semibold tracking-wider text-text-primary">ghost AI</span>
          <span className="rounded-full bg-accent-primary-dim px-2.5 py-0.5 text-[10px] font-medium text-accent-primary uppercase tracking-wider">
            Design System
          </span>
        </div>
        <div className="flex items-center gap-4 text-text-secondary text-sm">
          <span className="flex items-center gap-1.5 font-light">
            <Moon className="h-4 w-4 text-accent-primary" /> Dark Only
          </span>
        </div>
      </header>

      {/* Main content grid */}
      <main className="relative z-10 flex flex-1 flex-col gap-6 p-6 lg:flex-row max-w-7xl mx-auto w-full">
        {/* Left column - Prompt Card */}
        <div className="flex flex-col gap-6 lg:w-2/5">
          <Card className="border-border-default bg-bg-surface">
            <CardHeader>
              <CardTitle className="text-xl font-bold tracking-tight text-text-primary flex items-center gap-2">
                <Terminal className="h-5 w-5 text-accent-ai-text" /> AI Workspace
              </CardTitle>
              <CardDescription className="text-text-muted">
                Describe the architecture you want to generate.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                  System Description
                </label>
                <Textarea
                  placeholder="e.g. A serverless event-driven architecture with event streaming and data persistence..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[140px] border-border-default bg-bg-elevated text-text-primary placeholder:text-text-faint focus-visible:ring-accent-primary rounded-xl focus:border-border-subtle"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                  Project Title
                </label>
                <Input
                  type="text"
                  placeholder="Enter project name..."
                  className="border-border-default bg-bg-elevated text-text-primary placeholder:text-text-faint focus-visible:ring-accent-primary rounded-xl focus:border-border-subtle"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-border-default/50 pt-4">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger
                  render={
                    <Button variant="outline" className="border-border-default text-text-secondary hover:bg-bg-subtle hover:text-text-primary rounded-xl">
                      Configure Canvas
                    </Button>
                  }
                />
                <DialogContent className="border-border-default bg-bg-surface text-text-primary sm:max-w-md rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-text-primary">Canvas Options</DialogTitle>
                    <DialogDescription className="text-text-muted">
                      Adjust parameters before compiling standard layouts.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p className="text-sm text-text-secondary">
                      Configure constraints like maximum depth, node shapes, auto-layout algorithms, and live sync boundaries.
                    </p>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="secondary" onClick={() => setIsOpen(false)} className="rounded-xl bg-bg-subtle text-text-secondary hover:bg-bg-subtle/80 hover:text-text-primary border border-border-default">
                      Cancel
                    </Button>
                    <Button onClick={() => setIsOpen(false)} className="bg-accent-primary text-bg-base hover:bg-accent-primary/90 rounded-xl font-semibold">
                      Save Settings
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button className="bg-accent-primary text-bg-base hover:bg-accent-primary/95 rounded-xl font-semibold flex items-center gap-1.5">
                Generate <Send className="h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right column - Showcase Tabs */}
        <div className="flex flex-1 flex-col gap-6">
          <Card className="flex flex-1 flex-col border-border-default bg-bg-surface overflow-hidden">
            <Tabs defaultValue="visuals" className="flex flex-1 flex-col">
              <div className="flex items-center justify-between border-b border-border-default px-6 py-2 bg-bg-surface/50">
                <TabsList className="bg-bg-elevated border border-border-default rounded-xl p-0.5">
                  <TabsTrigger value="visuals" className="data-[state=active]:bg-bg-subtle data-[state=active]:text-text-primary text-text-muted rounded-lg text-xs py-1.5 px-3">
                    <Layers className="mr-1.5 h-3.5 w-3.5" /> UI Preview
                  </TabsTrigger>
                  <TabsTrigger value="diagnostics" className="data-[state=active]:bg-bg-subtle data-[state=active]:text-text-primary text-text-muted rounded-lg text-xs py-1.5 px-3">
                    <Sliders className="mr-1.5 h-3.5 w-3.5" /> Diagnostics
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="visuals" className="flex-1 p-6 outline-none m-0">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                    ScrollArea Component Demo
                  </h3>
                  <ScrollArea className="h-[250px] w-full rounded-2xl border border-border-default bg-bg-elevated p-4">
                    <div className="space-y-4">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 border-b border-border-default/30 pb-3 last:border-b-0 last:pb-0"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-primary-dim text-accent-primary border border-accent-primary-dim/30">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text-primary">System Node #{i + 1}</p>
                            <p className="text-xs text-text-muted">
                              Service container running microservice routines and message polling queues.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="diagnostics" className="flex-1 p-6 outline-none m-0">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                    Color Tokens Mapping Check
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="flex flex-col gap-1 rounded-xl bg-bg-base border border-border-default p-3">
                      <span className="text-[10px] uppercase text-text-muted">bg-base</span>
                      <div className="h-4 w-full rounded bg-bg-base border border-border-subtle" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-bg-base border border-border-default p-3">
                      <span className="text-[10px] uppercase text-text-muted">bg-surface</span>
                      <div className="h-4 w-full rounded bg-bg-surface border border-border-subtle" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-bg-base border border-border-default p-3">
                      <span className="text-[10px] uppercase text-text-muted">bg-elevated</span>
                      <div className="h-4 w-full rounded bg-bg-elevated border border-border-subtle" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-bg-base border border-border-default p-3">
                      <span className="text-[10px] uppercase text-text-muted">accent-primary</span>
                      <div className="h-4 w-full rounded bg-accent-primary" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-bg-base border border-border-default p-3">
                      <span className="text-[10px] uppercase text-text-muted">accent-ai</span>
                      <div className="h-4 w-full rounded bg-accent-ai" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-bg-base border border-border-default p-3">
                      <span className="text-[10px] uppercase text-text-muted">state-error</span>
                      <div className="h-4 w-full rounded bg-state-error" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
}
