import { ChangeEvent } from "react";
import { useState } from "react";
import { INews } from "../constants/interface";

export interface INew {
  id?: string;
  title: string;
  content: string;
}

type FormTypes = (
  value: INews
) => [
  ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  INew,
  () => void
];

export const useForm: FormTypes = (initial: INew) => {
  const [value, setValue] = useState<INew>(initial);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue({ ...value, [target.name]: target.value });
  };

  const reset = () => {
    setValue({ title: "", content: "" });
  };

  return [handleChange, value, reset];
};
