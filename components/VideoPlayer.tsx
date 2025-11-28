import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    title?: string;
    aspectRatio?: string; // e.g., "16/9", "9/16"
    className?: string;
    poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, aspectRatio = "16/9", className = "", poster }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-firefly-yellow/20 transition-all duration-700 hover:scale-[1.02] group ${className}`}
            style={{ aspectRatio }}
        >
            {!isPlaying ? (
                /* Placeholder State */
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-firefly-dark/80"
                    onClick={handlePlay}
                >
                    {/* Poster Image */}
                    {poster && (
                        <img
                            src={poster}
                            alt={title || "Video thumbnail"}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                            loading="lazy"
                        />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-firefly-dark via-transparent to-firefly-green/10 opacity-60 z-10"></div>

                    {/* Play Button */}
                    <div className="relative z-20 w-16 h-16 rounded-full bg-firefly-yellow/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg shadow-firefly-yellow/20">
                        <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                    </div>


                </div>
            ) : (
                /* Video State */
                <video
                    ref={videoRef}
                    src={src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                    style={{ maxWidth: '100%', height: '100%' }}
                >
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoPlayer;
