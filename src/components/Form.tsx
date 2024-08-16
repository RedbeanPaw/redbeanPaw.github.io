"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { CheckGroup } from "./CheckGroup";
import { RadioGroup } from "./RadioGroup";
import { useState, useCallback, useEffect, FC, useRef } from "react";

export interface ContactFormType {
  name: string;
  budget: string;
  service: any;
  phone: string;
  email: string;
}

export const ContactForm: FC<any> = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    control,
    setFocus,
    watch,
    formState: { isSubmitting, isSubmitted, isDirty, isValid, errors },
  } = useForm<ContactFormType>({
    mode: 'all',
    defaultValues: {
      name: '',
      budget: '',
      service: [],
      phone: '',
      email: '',
    }
  });
  const [agree, setAgree] = useState(false);

  const scriptURL = "https://script.google.com/macros/s/AKfycbzwXDgiDFUxHdsd8-9xfBMKqSTqwgDTF-V7PiM-8fBvMaEw0T6ibL43dg4oobZu7aV_/exec"

  const onSubmit: SubmitHandler<any> = useCallback((data: any) => {
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return;
    }
    if (isValid && !isSubmitted) {
      const form = document.getElementById(
        'submit-to-google-sheet'
      ) as HTMLFormElement;

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          alert('제출이 성공하였습니다.')
          setAgree(false);
          reset(); // 보내는 값이 성공값이면, form data reset
        })
        .catch(error => console.error('Error!', error.message));
    }
  }, [agree, isValid]);

  console.log("errors -------------->", errors)

  const genErrorMsg = useCallback((name: keyof ContactFormType) => {
    return errors[name]?.message as string || ''
  }, [errors])

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        onSubmit(data)
      })}
    >
      <FormControl>
        <FormLabel htmlFor="service">
          <div className="text-xl font-bold text-gray-700 mb-4">
            <span className="mr-1">어떤</span>
            <span className="text-main border-b-2 border-main">서비스</span>
            <span>에 관심있으신가요?</span>
          </div>
          <CheckGroup name="service" onChange={(val: any) => {
            reset(
              {
                ...getValues(),
                service: val
              },
            )
          }} />
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="budget">
          <div className="text-xl font-bold text-gray-700 mb-4">
            <span className="mr-1">한 달 동안 가용 가능한 </span>
            <span className="text-main border-b-2 border-main mr-1">예산이</span>
            <span>어떻게 되시나요?</span>
          </div>
          <RadioGroup name="budget" onChange={(val: any) => {
            reset(
              {
                ...getValues(),
                budget: val
              },
            )
          }} />
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="name">
          <p className="font-bold text-gray-700 mb-2">대표님 성함</p>
          <Input isInvalid={!!errors?.name} errorBorderColor="red.400" width={'100%'} height={'50px'} colorScheme="main"  {...register('name', { required: '성함을 입력해주세요.' })} type="text" placeholder="성함" />
          {genErrorMsg('name') && <p className="mt-1 text-sm text-red-500">{genErrorMsg('name')}</p>}
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phone">
          <p className="font-bold text-gray-700 mb-2">휴대폰번호</p>
          <Input isInvalid={!!errors?.phone} errorBorderColor="red.400" width={'100%'} height={'50px'} colorScheme="main" {...register("phone", {
            required: '휴대폰번호를 입력해주세요.', pattern: {
              value: new RegExp("^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$"),
              message: "올바른 휴대폰번호 형식이 아닙니다.",
            },
          })} type="tel" inputMode="tel" maxLength={11} placeholder="자주 사용하시는 휴대폰번호" />
          {genErrorMsg('phone') && <p className="mt-1 text-sm text-red-500">{genErrorMsg('phone')}</p>}
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">
          <p className="font-bold text-gray-700 mb-2">이메일</p>
          <Input isInvalid={!!errors?.email} errorBorderColor="red.400" width={'100%'} height={'50px'} colorScheme="main" {...register('email', {
            required: '이메일을 입력해주세요.', pattern: {
              value: new RegExp("^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$"),
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })} placeholder="자주 사용하시는 이메일" />
          {genErrorMsg('email') && <p className="mt-1 text-sm text-red-500">{genErrorMsg('email')}</p>}
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="agree">
          <Checkbox
            isChecked={agree}
            colorScheme="main"
            onChange={(e) => {
              setAgree(!agree)
            }}
          >
            <p>개인정보수집 및 이용에 동의합니다</p>
          </Checkbox>
        </FormLabel>
      </FormControl>
      <Button disabled={!agree} type="submit" height={'60px'} colorScheme="main"><h3 className="text-xl font-bold tracking-tight	">
        제출하기
      </h3></Button>
    </form>
  );
};
