import {
  Segment,
  type SegmentDisplayStatus,
  type SegmentIdType,
} from "@/_shared/components/smart/search-bar/types/segment.ts";
import { useState } from "react";

export default function useSearchBar() {
  const [segmentOpenStatus, setSegmentOpenStatus] = useState<{
    [id: SegmentIdType]: boolean;
  }>({
    [Segment.LOCATION]: false,
    [Segment.TIME]: false,
    [Segment.LEVEL]: false,
  });

  const isAnySegmentOpen =
    segmentOpenStatus[Segment.LOCATION] ||
    segmentOpenStatus[Segment.TIME] ||
    segmentOpenStatus[Segment.LEVEL];

  function toggleSegmentSelection(status: boolean, segmentId: SegmentIdType) {
    setSegmentOpenStatus({ ...segmentOpenStatus, [segmentId]: status });
  }

  function getSegmentDisplayStatus(
    segmentId: SegmentIdType,
  ): SegmentDisplayStatus {
    if (segmentOpenStatus[segmentId]) return "open";
    if (isAnySegmentOpen) return "other-open";
    return "default";
  }

  return {
    segmentOpenStatus,
    toggleSegmentSelection,
    getSegmentDisplayStatus,
    // utils
    isAnySegmentOpen,
  };
}
