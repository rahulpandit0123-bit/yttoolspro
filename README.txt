YTToolsPro Dark Theme - Font Color Fix (All Tools)

What this zip contains:
1) Updated tool page wrappers (app/tools/*/page.tsx)
   - Removes old duplicate header blocks that were showing dark/invisible titles.
   - Keeps breadcrumb + the client UI only.

2) Updated client components (app/tools/*/*Client.tsx)
   - Slightly brighter helper text so everything is clear on dark background.

How to use:
- Copy each file into the same path in your project.
- Then run: npm run dev and refresh.

If you still see any dark/invisible text:
- In VS Code press Ctrl+Shift+F and search:
  text-slate-900
  text-slate-950
  text-black
- Replace them with:
  text-slate-100  (for headings)
  text-slate-200 or text-slate-300 (for normal text)
