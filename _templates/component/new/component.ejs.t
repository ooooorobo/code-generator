---
to: src/components/<%= h.changeCase.camel(componentName) %>/<%= componentName %>.tsx
---
import styles from './<%= componentName %>.module.css'

export const <%= componentName %> = () => {
    return <div></div>
}