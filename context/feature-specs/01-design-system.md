Read `AGENT.md` before starting.

Were adding this design system and UI primitive components.

Install and configer 'shadcn/ui'.

Add these shadcn components:
- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

Do not modify the generated `components/ui/*` files after installation.

Also Install `lucide-react'.

Create `lib/utils.ts` with a reusable `cn` helper for merging Tailwind CSS classes.

Ensure all components match the existing dark theme in `globals.css`.

### Check when done
- All components import without errors
- `cn()` works properly
- No default light styling appears