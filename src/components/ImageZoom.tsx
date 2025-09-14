import { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageZoom = ({ src, alt, className, style }: ImageZoomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openModal = () => {
    setIsOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Original Image with Magnifier Icon */}
      <div className="relative group inline-block">
        <img 
          src={src} 
          alt={alt} 
          className={className}
          style={style}
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 hover:bg-black text-white border-0 h-8 w-8"
          onClick={openModal}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 max-w-[90vw] max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-black text-white border-0"
              onClick={closeModal}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="bg-black/80 hover:bg-black text-white border-0"
                onClick={zoomIn}
                disabled={scale >= 3}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="bg-black/80 hover:bg-black text-white border-0"
                onClick={zoomOut}
                disabled={scale <= 0.5}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>

            {/* Image Container */}
            <div 
              className="overflow-hidden rounded-lg bg-white flex items-center justify-center"
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            >
              <img
                src={src}
                alt={alt}
                className={`max-w-full max-h-full object-contain transition-transform duration-200 ${
                  scale > 1 ? 'cursor-move' : 'cursor-default'
                }`}
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                }}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoom;