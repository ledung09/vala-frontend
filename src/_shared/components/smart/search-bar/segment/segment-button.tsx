import {
  Segment,
  type SegmentDisplayStatus,
  type SegmentIdType,
} from "@/_shared/components/smart/search-bar/types/segment.ts";
import { Button } from "@/_shared/components/ui/button.tsx";
import { cn } from "@/_shared/lib/utils.ts";
import * as React from "react";
import { forwardRef, type ReactNode } from "react";

interface SegmentButtonProps {
  readonly displayStatus: SegmentDisplayStatus;
  readonly segmentId: SegmentIdType;
  readonly children: ReactNode;
}

const separator1Id = "separator-1";
const separator2Id = "separator-2";

const segmentConfigMapper: {
  [key in SegmentIdType]: {
    hideSeparatorIds: string[];
    onOpenBorder: string;
  };
} = {
  [Segment.LOCATION]: {
    hideSeparatorIds: [separator1Id],
    onOpenBorder: "border-r",
  },
  [Segment.TIME]: {
    hideSeparatorIds: [separator1Id, separator2Id],
    onOpenBorder: "border-x",
  },
  [Segment.LEVEL]: {
    hideSeparatorIds: [separator2Id],
    onOpenBorder: "border-l",
  },
};

const SegmentButton = forwardRef<
  HTMLButtonElement,
  SegmentButtonProps & React.ComponentProps<typeof Button>
>(function SegmentButton(
  { displayStatus, segmentId, children, className, ...props }, // <-- add ...props
  ref,
) {
  const config = segmentConfigMapper[segmentId];

  return (
    <Button
      ref={ref}
      {...props}
      variant={displayStatus === "open" ? "outline" : "ghost"}
      className={cn(
        [
          "h-15 min-w-52 rounded-xl",
          config.hideSeparatorIds.map((id) => `hide-${id}`),
        ],
        displayStatus === "open" && [
          "border-0 shadow-md aria-expanded:bg-white",
          config.onOpenBorder,
        ],
        displayStatus === "other-open" && "hover:bg-muted-foreground/5",
        className,
      )}
    >
      <div className="flex w-full flex-col px-4 text-left text-xs font-normal">
        {children}
      </div>
    </Button>
  );
});

export default SegmentButton;
