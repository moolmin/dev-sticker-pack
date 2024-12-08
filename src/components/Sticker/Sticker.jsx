export default function Sticker({ src, alt, x = 0, y = 0 }) {
    return (
      <img 
        src={src} 
        alt={alt} 
        style={{ "--x": `${x}px`, "--y": `${y}px` }} 
      />
    );
  }