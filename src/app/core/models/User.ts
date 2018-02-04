import { Deserialize } from 'shared/models';

export class User extends Deserialize {
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string;
}
