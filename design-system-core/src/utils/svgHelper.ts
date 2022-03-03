const createSvgElement = (svgStr: string) => {
    return document.createRange().createContextualFragment(svgStr);
}

export { createSvgElement };