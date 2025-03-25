---
to: src/components/index.ts
skip_if: <%= !needInsertIndex %>
---
export * from './<%= h.changeCase.camel(componentName) %>/<%= componentName %>'