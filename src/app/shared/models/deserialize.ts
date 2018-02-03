import { Deserializable } from './index';

export class Deserialize implements Deserializable<any> {
    deserialize(input: any) {
        Object.assign(this, input);

        return this;
    }
}
