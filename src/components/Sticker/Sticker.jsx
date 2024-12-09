import "./Sticker.scss";

export default function Sticker({ src, alt, x = 0, y = 0 }) {
  const downloadSticker = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt;
    link.click();
  };

  return (
    <img
      className="sticker-img"
      src={src}
      alt={alt}
      style={{ "--x": `${x}px`, "--y": `${y}px` }}
      onClick={downloadSticker}
    />
  );
}
