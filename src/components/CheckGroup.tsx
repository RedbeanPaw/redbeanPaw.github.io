import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useCallback, useEffect, FC, useRef } from "react";

export const CheckGroup: FC<any> = ({ name, onChange }) => {
  const itemList = [
    { label: '네이버 블로그 / 플레이스', value: '네이버', checked: false },
    { label: '인스타그램', value: '인스타그램', checked: false },
    { label: '구글', value: '구글', checked: false },
    { label: '당근', value: '당근', checked: false },
  ]
  const [checkedItems, setCheckedItems] = useState(itemList);
  const allChecked = checkedItems.every((el) => el.checked) || false;


  useEffect(() => {
    onChange(checkedItems)
  }, [checkedItems])

  return (
    <>
      <Stack mt={1} spacing={1} gap={4}>
        <Checkbox
          isChecked={allChecked}
          colorScheme="main"
          onChange={(e) => {
            if (allChecked) {
              setCheckedItems(itemList)
            } else {
              setCheckedItems([...itemList].map((el) => ({
                ...el,
                checked: true
              })))
            }
          }}
        >
          <p className={allChecked ? 'text-main font-bold' : ''}>전체 선택</p>
        </Checkbox>
        {
          itemList.map((item, idx) => (
            <Checkbox
              key={`check-item-${idx}`}
              colorScheme="main"
              isChecked={checkedItems.find(el => el.value === item.value)?.checked}
              onChange={(e) => {
                setCheckedItems((prev: any) => {
                  const newList = prev.map((el: any, idx: number) => {
                    if (el.value === item.value) {
                      return {
                        ...el,
                        checked: e.target.checked
                      }
                    }
                    return {
                      ...el
                    }
                  })
                  return [...newList]
                })
              }}
            >
              <p className={checkedItems.find(el => el.value === item.value)?.checked ? 'text-main font-bold' : ''}>{item.label}</p>
            </Checkbox>
          ))
        }
      </Stack>
    </>
  );
};
