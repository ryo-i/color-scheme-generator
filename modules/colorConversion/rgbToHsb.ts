function rgbToHsb (r: number, g: number, b: number) {
    const max: number = Math.max(r, g, b);
    const min: number = Math.min(r, g, b);
    console.log('max->' + max);
    console.log('min->' + min);
}

export { rgbToHsb };