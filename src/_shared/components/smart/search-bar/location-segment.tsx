import SegmentButton from '@/_shared/components/smart/search-bar/segment/segment-button.tsx';
import { type BaseSegmentProps, Segment } from '@/_shared/components/smart/search-bar/types/segment.ts';
import { ButtonGroup } from '@/_shared/components/ui/button-group.tsx';
import { Button } from '@/_shared/components/ui/button.tsx';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/_shared/components/ui/input-group.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/_shared/components/ui/popover.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_shared/components/ui/tabs.tsx';
import { Locate, MapPinIcon, SearchIcon } from 'lucide-react';

interface LocationSegmentProps extends BaseSegmentProps {
}

export default function LocationSegment({ displayStatus, onOpenChange }: LocationSegmentProps) {
  return (
    <Popover onOpenChange={(open) => onOpenChange(open)}>
      <PopoverTrigger asChild>
        <SegmentButton
          segmentId={Segment.LOCATION}
          displayStatus={displayStatus}
        >
          <span className='font-semibold'>Where</span>
          <span className='text-sm'>47 Nguyen Thi Tan</span>
        </SegmentButton>
      </PopoverTrigger>
      <PopoverContent align='start' className='w-[400px]' sideOffset={12}>
        <ButtonGroup className='w-full'>
          <ButtonGroup className='flex-1'>
            <InputGroup>
              <InputGroupInput placeholder='Search...'/>
              <InputGroupAddon>
                <SearchIcon className='text-muted-foreground'/>
              </InputGroupAddon>
              <InputGroupAddon align='inline-end'>
              </InputGroupAddon>
            </InputGroup>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant='outline' size='icon'><Locate/></Button>
          </ButtonGroup>
        </ButtonGroup>


        <Tabs defaultValue='account' className='w-full'>
          <TabsList className='w-full'>
            <TabsTrigger value='account'>Search result</TabsTrigger>
            <TabsTrigger value='password'>Saved location</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <div className='flex flex-col'>
              <Button variant='ghost' size='lg' className='h-14'>
                <div className='flex text-left w-full gap-2 items-center'>
                  <MapPinIcon className='size-5'/>
                  <span className='text-md font-normal'>Quan 1</span>
                </div>
              </Button>
              <Button variant='ghost' size='lg' className='h-14'>
                <div className='flex text-left w-full gap-2 items-center'>
                  <MapPinIcon className='size-5'/>
                  <span className='text-md font-normal'>Quan 1</span>
                </div>
              </Button>
              <Button variant='ghost' size='lg' className='h-14'>
                <div className='flex text-left w-full gap-2 items-center'>
                  <MapPinIcon className='size-5'/>
                  <span className='text-md font-normal'>Quan 1</span>
                </div>
              </Button>

            </div>
          </TabsContent>
          <TabsContent value='password'>Change your password here.</TabsContent>
        </Tabs>


      </PopoverContent>
    </Popover>
  );
}