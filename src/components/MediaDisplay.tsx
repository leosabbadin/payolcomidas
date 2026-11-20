import React, { useState } from 'react';
import { Video as VideoIcon } from 'lucide-react';

interface MediaDisplayProps {
  videoUrl?: string;
  imageUrl?: string;
  altText: string;
  className?: string;
  showBadge?: boolean;
  priority?: boolean;
  controls?: boolean;
  muted?: boolean;
}

export const MediaDisplay: React.FC<MediaDisplayProps> = ({
  videoUrl,
  imageUrl,
  altText,
  className = 'w-full h-full object-cover object-center',
  showBadge = false,
  controls = false,
  muted = true
}) => {
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);

  // If videoUrl is provided and not errored, render video in autoplay, muted, loop, playsinline
  if (videoUrl && !videoError) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#120f0d]">
        <video
          src={videoUrl}
          poster={imageUrl}
          autoPlay
          muted={muted}
          loop
          playsInline
          controls={controls}
          disablePictureInPicture
          onError={() => setVideoError(true)}
          className={`${className} transition-opacity duration-500`}
        />
        {showBadge && (
          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4a34b]/40 text-[#d4a34b] text-[10px] font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a34b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a34b]"></span>
            </span>
            <span className="flex items-center gap-1">
              <VideoIcon className="w-3 h-3 text-[#d4a34b]" />
              Vídeo
            </span>
          </div>
        )}
      </div>
    );
  }

  // If imageUrl is provided and not errored, render image
  if (imageUrl && !imageError) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#120f0d]">
        <img
          src={imageUrl}
          alt={altText}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className={`${className} transition-transform duration-700 ease-out`}
        />
      </div>
    );
  }

  // No media or media error: return null (never show generic placeholder or empty space)
  return null;
};
