import 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    brand?: string
    theme?: string
    mode?: string
  }
}
