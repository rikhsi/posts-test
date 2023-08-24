import { FormControl } from "@angular/forms";

export type LoginForm = {
    username: FormControl<string | null>;
    password: FormControl<string | null>;
};

export type SigninForm = {
    name: FormControl<string | null>;
    username: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
};

