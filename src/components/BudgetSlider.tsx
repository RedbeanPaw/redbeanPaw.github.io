import { useForm } from "react-hook-form";
import {
  RangeSlider,
  RangeSliderMark,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState, useCallback, useEffect, FC, useRef } from "react";

export const BudgetSlider: FC<any> = (props) => {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(100);
  return (
    <RangeSlider defaultValue={[0, 100]} min={0} max={2000} step={100} onChange={(val) => {
      console.log("value ----------------->", val)
      setStartValue(val[0]);
      setEndValue(val[1]);
    }}>
      <RangeSliderMark textAlign='center'
        bg='main.500'
        color='white'
        mt='-10'
        ml='-5'
        w='20' value={startValue}>
        {startValue}만원
      </RangeSliderMark>
      <RangeSliderMark textAlign='center'
        bg='main.500'
        color='white'
        mt='-10'
        ml='-5'
        w='20' value={endValue}>
        {endValue}만원
      </RangeSliderMark>
      <RangeSliderTrack bg="main.100">
        <RangeSliderFilledTrack bg="main.500" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={4} index={0} />
      <RangeSliderThumb boxSize={4} index={1} />
    </RangeSlider>
  );
};
