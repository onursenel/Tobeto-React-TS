import { AnyObject, TestContext } from "yup";

export const passwordValidator = (
    value:string,
    context: TestContext<AnyObject>,
) =>{
    return (
        /[a-zçğıöşü]/.test(value) && /[A-ZÇĞIÖŞÜ]/.test(value) && /[0-9]/.test(value)
    );

}