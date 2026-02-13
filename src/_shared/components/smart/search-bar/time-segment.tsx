import SegmentButton from '@/_shared/components/smart/search-bar/segment/segment-button.tsx';
import { type BaseSegmentProps, Segment } from '@/_shared/components/smart/search-bar/types/segment.ts';
import { Button } from '@/_shared/components/ui/button.tsx';
import { Calendar } from '@/_shared/components/ui/calendar.tsx';
import { Input } from '@/_shared/components/ui/input.tsx';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/_shared/components/ui/popover.tsx';
import { format } from 'date-fns';
import { useState } from 'react';

interface TimeSegmentProps extends BaseSegmentProps {
}

export default function TimeSegment({ displayStatus, onOpenChange }: TimeSegmentProps) {
  const [ date, setDate ] = useState<Date>();

  return (
    <Popover onOpenChange={(open) => onOpenChange(open)}>
      <PopoverTrigger asChild>
        <SegmentButton
          segmentId={Segment.TIME}
          displayStatus={displayStatus}
        >
          <span className='font-semibold'>When</span>
          <span className='text-sm'>20/10 at 5pm</span>
        </SegmentButton>
      </PopoverTrigger>
      <PopoverContent align='center' sideOffset={12}>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description text here.</PopoverDescription>
        </PopoverHeader>

        <Popover modal={true}>
          <PopoverTrigger asChild>
            <Button variant='outline' id='date-picker-simple'
              className='justify-start font-normal'>{date ? format(date, 'PPP') : <span>Pick a date</span>}</Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
            />
          </PopoverContent>
        </Popover>


        <Input
          type='time'
          step='1800'
          defaultValue='10:30'
          className='bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
        />
      </PopoverContent>
    </Popover>
  );
}