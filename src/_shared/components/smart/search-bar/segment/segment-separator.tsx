import { Separator } from '@/_shared/components/ui/separator.tsx';
import { cn } from '@/_shared/lib/utils.ts';

interface SegmentSeparatorProps {
  readonly className?: string;
  readonly hidden?: boolean;
}

export default function SegmentSeparator({
  className,
  hidden,
}: SegmentSeparatorProps) {
  return (
    <Separator
      orientation='vertical'
      className={cn(
        'transition-opacity h-10 my-auto opacity-100',
        'data-[hidden=true]:opacity-0',
        className,
      )}
      data-hidden={hidden}
    />
  );
}