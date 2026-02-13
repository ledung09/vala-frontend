export const Segment = {
  LOCATION: 0,
  TIME: 1,
  LEVEL: 2,
} as const;

export type SegmentIdType = number;

export type SegmentDisplayStatus = 'default' | 'open' | 'other-open'

export interface BaseSegmentProps {
  readonly displayStatus: SegmentDisplayStatus;
  readonly onOpenChange: (open: boolean) => void;
}