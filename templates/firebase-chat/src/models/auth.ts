import { User } from 'firebase/auth';
import { z } from 'zod';

export const emailLoginModel = z.string().email({ message: 'Email is required' });

export type EmailLoginModel = z.infer<typeof emailLoginModel>;
export interface AuthCustomUser extends User {
  roles?: [string],
}
export default { };
