import { Prettify } from './../utils';
import type { TimeStamps } from "./Timestamps";

type _User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
} & TimeStamps

export type User = Prettify<_User>