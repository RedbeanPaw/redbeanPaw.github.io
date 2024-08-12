import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import { useState, useCallback, useEffect, FC, useRef } from "react";

export const ContactForm: FC<any> = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setFocus,
    watch,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <Flex direction="column" pt={8}>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormControl>
          <FormLabel htmlFor="name">
            <Input name="name" type="text" placeholder="name" />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">
            <Input name="phone" type="tel" placeholder="phone" />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">
            <Input name="phone" type="tel" placeholder="phone" />
          </FormLabel>
        </FormControl>
        <p>개인정보제공동의</p>
        <Button type="submit">제출하기</Button>
      </form>
    </Flex>
  );
};
