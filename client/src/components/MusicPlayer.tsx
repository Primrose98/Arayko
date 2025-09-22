import { useState } from 'react';
import { Music, Pause } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    // TODO: Implement actual music playback when audio file is available
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="music-control rounded-full p-3 shadow-lg border border-border">
        <button
          onClick={toggleMusic}
          className="w-8 h-8 flex items-center justify-center text-primary hover:text-primary-foreground transition-colors"
          data-testid="button-music-toggle"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Music className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
