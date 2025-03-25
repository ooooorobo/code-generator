---
to: src/components/index.ts
append: true
skip_if: <%= !needInsertIndex %>
unless_exists: true
---
export * from './<%= h.changeCase.camel(componentName) %>/<%= componentName %>'