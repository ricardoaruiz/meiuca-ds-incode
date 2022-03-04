export type DSTypographProps = {
    component: TypographComponent
    size: TypographSize
    variant: TypographVariant
}
export type TypographComponent = 'caption' | 'heading' | 'paragraph'
export type TypographSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'display'
export type TypographVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'