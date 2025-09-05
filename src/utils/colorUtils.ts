// utils/colorUtils.ts

export function invertColor(color: string): string {
  // Check if the color is a hex color
  if (color.startsWith('#')) {
    let hex = color.slice(1); // Remove '#' from the start
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join(''); // e.g., 'abc' -> 'aabbcc'
    }
    // Convert hex to RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Invert RGB values
    const invertedColor = `#${(255 - r).toString(16).padStart(2, '0')}${(255 - g).toString(16).padStart(2, '0')}${(255 - b).toString(16).padStart(2, '0')}`;
    return invertedColor;
  }

  // If not a hex, handle other formats (like rgb)
  if (color.startsWith('rgb')) {
    const rgbValues = color.match(/\d+/g); // Extract numbers from rgb(r, g, b)
    if (rgbValues && rgbValues.length === 3) {
      const r = 255 - parseInt(rgbValues[0], 10);
      const g = 255 - parseInt(rgbValues[1], 10);
      const b = 255 - parseInt(rgbValues[2], 10);

      return `rgb(${r}, ${g}, ${b})`;
    }
  }

  return color; // Return as is if no valid color format found
}
