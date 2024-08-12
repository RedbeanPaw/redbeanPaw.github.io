import { useForm } from "react-hook-form";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState, useCallback, useEffect, FC, useRef } from "react";

export const BudgetSlider: FC<any> = (props) => {
  return (
    <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={10}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0} />
      <RangeSliderThumb boxSize={6} index={1} />
    </RangeSlider>
  );
};
