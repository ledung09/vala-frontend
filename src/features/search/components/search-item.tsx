import { Badge } from '@/_shared/components/ui/badge.tsx';
import { Button } from '@/_shared/components/ui/button.tsx';
import { Card } from '@/_shared/components/ui/card.tsx';
import { Separator } from '@/_shared/components/ui/separator.tsx';
import { ClockIcon, MapPinIcon } from 'lucide-react';

export default function SearchItem() {
  return (
    <Card className="w-full flex-row gap-0 p-0 shadow-md">
      <div className="w-40 p-3">
        <img
          className="aspect-square h-full w-full rounded-md object-cover transition-transform hover:scale-105"
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        />
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col p-4 pl-6 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">Hoi cau long anh Dung</span>
            <Badge variant="secondary" className="py-3 text-xs shadow-md">
              TB- / TB / TB+
            </Badge>
          </div>
          <span className="text-muted-foreground mt-0.5 flex items-center gap-1 text-sm">
            <MapPinIcon className="size-4" />
            San cau long Hong Chau
          </span>

          <Card className="mt-6 w-fit flex-row gap-0 p-0 text-xs">
            <div className="bg-accent flex flex-col items-center p-2 px-3">
              <span className="text-muted-foreground font-semibold">
                Hom nay
              </span>
              <span className="font-semibold">14/2</span>
            </div>
            <Separator orientation="vertical" className="h-full" />
            <div className="flex items-center gap-2 p-2 px-3 text-sm">
              <ClockIcon className="size-4" />
              <span>10:00 AM - 11:00 AM</span>
            </div>
          </Card>
        </div>
        <Separator orientation="vertical" />
        <div className="flex w-44 flex-col items-end justify-center p-4">
          <div className="flex items-center gap-0.5">
            <span className="text-xl font-bold">60,000₫</span>/
            <span className="text-muted-foreground">slot</span>
          </div>
          <Badge variant="secondary" className="mt-2 text-sm">
            2 slot left
          </Badge>
          <Button className="mt-auto w-full">Book now</Button>
        </div>
      </div>
    </Card>
  );
}
