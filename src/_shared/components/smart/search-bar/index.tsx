import useSearchBar from '@/_shared/components/smart/search-bar/hooks/use-search-bar.tsx';
import LevelSegment from '@/_shared/components/smart/search-bar/level-segment.tsx';
import LocationSegment from '@/_shared/components/smart/search-bar/location-segment.tsx';
import SegmentSeparator from '@/_shared/components/smart/search-bar/segment/segment-separator.tsx';
import TimeSegment from '@/_shared/components/smart/search-bar/time-segment.tsx';
import { Segment } from '@/_shared/components/smart/search-bar/types/segment.ts';
import { Button } from '@/_shared/components/ui/button.tsx';
import { Card } from '@/_shared/components/ui/card.tsx';
import { cn } from '@/_shared/lib/utils.ts';
import { SearchIcon } from 'lucide-react';

export default function SearchBar() {
  const {
    segmentOpenStatus,
    toggleSegmentSelection,
    getSegmentDisplayStatus,
    isAnySegmentOpen,
  } = useSearchBar();

  return (
    <Card className={cn('group flex-row items-center gap-0 p-1 max-w-6xl transition',
      isAnySegmentOpen && 'bg-muted',
    )}
    >
      <LocationSegment
        displayStatus={getSegmentDisplayStatus(Segment.LOCATION)}
        onOpenChange={(open) => toggleSegmentSelection(open, Segment.LOCATION)}
      />
      <SegmentSeparator
        className='group-has-[.hide-separator-1:hover]:opacity-0'
        hidden={segmentOpenStatus[Segment.LOCATION] || segmentOpenStatus[Segment.TIME]}
      />
      <TimeSegment
        displayStatus={getSegmentDisplayStatus(Segment.TIME)}
        onOpenChange={(open) => toggleSegmentSelection(open, Segment.TIME)}
      />
      <SegmentSeparator
        className='group-has-[.hide-separator-2:hover]:opacity-0'
        hidden={segmentOpenStatus[Segment.LEVEL] || segmentOpenStatus[Segment.TIME]}
      />
      <LevelSegment
        displayStatus={getSegmentDisplayStatus(Segment.LEVEL)}
        onOpenChange={(open) => toggleSegmentSelection(open, Segment.LEVEL)}/>
      <Button size='icon-lg' className='rounded-l-none! rounded-xl size-14 ml-1'><SearchIcon className='size-6'
        strokeWidth={2.5}/></Button>
    </Card>
  );
}