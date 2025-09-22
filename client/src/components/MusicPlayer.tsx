import { useState, useEffect, useRef } from 'react';
import { Music, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;
    
    // Handle audio end (shouldn't happen with loop, but good fallback)
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [volume]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // User gesture is required for audio playback
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    audio.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="music-control rounded-full p-3 shadow-lg border border-border">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMusic}
            className="w-8 h-8 flex items-center justify-center text-primary hover:text-primary-foreground transition-colors"
            data-testid="button-music-toggle"
            title={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Music className="w-4 h-4" />
            )}
          </button>

          <div 
            className="relative"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <button
              onClick={toggleMute}
              className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-foreground transition-colors"
              data-testid="button-volume-toggle"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3 h-3" />
              ) : (
                <Volume2 className="w-3 h-3" />
              )}
            </button>

            {showVolumeSlider && (
              <div className="absolute top-full right-0 mt-2 bg-card/90 backdrop-blur-sm rounded-lg p-2 border border-border shadow-lg">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
                  data-testid="volume-slider"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Audio element - for when we have an audio file */}
      <audio
        ref={audioRef}
        preload="metadata"
        data-testid="background-audio"
      >
        {/* TODO: Add actual audio source when available */}
        {/* <source src="/path/to/piano-music.mp3" type="audio/mpeg" /> */}
        <source src="data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ4AAAAAAAAAAAAAAAAAAA==" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}