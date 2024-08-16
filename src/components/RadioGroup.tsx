import { useForm } from "react-hook-form";
import { Radio, RadioGroup as ChakraRadioGroup, Stack } from '@chakra-ui/react'
import { useState, useCallback, useEffect, FC, useRef } from "react";

export const RadioGroup: FC<any> = ({ onChange }) => {
  const itemList = [
    '100만원 이하',
    '100만원 ~ 200만원',
    '200만원 ~ 500만원',
    '500만원 ~ 1000만원',
    '1000만원 ~ 2000만원 ',
    '2000만원 이상 ',
  ]
  const [checkedItem, setCheckedItem] = useState('100만원 이하');

  useEffect(() => {
    onChange(checkedItem)
  }, [checkedItem])

  return (
    <ChakraRadioGroup colorScheme="main" onChange={setCheckedItem} value={checkedItem}>
      <Stack direction='column' gap={4}>
        {
          itemList.map((el, idx) => (<Radio name="budget" key={`radio-item-${idx}`} value={el}>
            <p className={checkedItem === el ? 'text-main font-bold' : ''}>{el}</p>
          </Radio>))
        }
      </Stack>
    </ChakraRadioGroup>
  );
};
