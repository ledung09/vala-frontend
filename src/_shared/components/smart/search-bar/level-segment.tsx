import SegmentButton from '@/_shared/components/smart/search-bar/segment/segment-button.tsx';
import { type BaseSegmentProps, Segment } from '@/_shared/components/smart/search-bar/types/segment.ts';
import { ButtonGroup } from '@/_shared/components/ui/button-group';
import { Button } from '@/_shared/components/ui/button.tsx';
import { Input } from '@/_shared/components/ui/input.tsx';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/_shared/components/ui/popover.tsx';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/_shared/components/ui/select.tsx';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface LevelSegmentProps extends BaseSegmentProps {
}

export default function LevelSegment({
  displayStatus,
  onOpenChange,
}: LevelSegmentProps) {
  return (
    <Popover onOpenChange={(open) => onOpenChange(open)}>
      <PopoverTrigger asChild>
        <SegmentButton
          segmentId={Segment.LEVEL}
          displayStatus={displayStatus}
        >
          <span className='font-semibold'>Level</span>
          <span className='text-sm'>20/10 at 5pm</span>
        </SegmentButton>
      </PopoverTrigger>
      <PopoverContent align='end' sideOffset={12}>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description text here.</PopoverDescription>
        </PopoverHeader>

        <ButtonGroup>
          <Button variant='outline'>
            <MinusIcon/>
          </Button>
          <Input placeholder='Search...' defaultValue='1' className='text-center'/>
          <Button variant='outline'>
            <PlusIcon/>
          </Button>
        </ButtonGroup>


        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Theme'/>
          </SelectTrigger>
          <SelectContent position='popper' side='right'>
            <SelectGroup>
              <SelectItem value='yeu'>Yeu</SelectItem>
            </SelectGroup>
            <SelectSeparator/>
            <SelectGroup>
              <SelectItem value='tb-'>Tb-</SelectItem>
              <SelectItem value='tb'>Tb</SelectItem>
              <SelectItem value='tb+'>Tb+</SelectItem>
            </SelectGroup>
            <SelectSeparator/>
            <SelectGroup>
              <SelectItem value='kha'>Kha</SelectItem>
              <SelectItem value='gioi'>Gioi</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
}