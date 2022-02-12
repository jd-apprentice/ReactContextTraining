import { Address } from "./address";
import { CreditCard } from "./cc";
import { Employment } from "./employment";
import { Subscription } from "./subs";

export interface Users {
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
    employment: Employment;
    address: Address;
    credit_card: CreditCard;
    subscription: Subscription;
}