'use client';

import LikedButton from '@/components/liked-button';
import MediaItem from '@/components/media-item';
import useOnPlay from '@/hooks/use-on-play';
import { Song } from '@/types/commons';

type SearchContentProps = {
  songs: Song[];
};

const SearchContent = ({ songs }: SearchContentProps) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">No songs found</div>;
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map(song => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={id => onPlay(id)} />
          </div>
          <LikedButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
