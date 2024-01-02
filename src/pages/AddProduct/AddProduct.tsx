import { ErrorMessage, Field, Form, Formik } from 'formik'

import { number, object, string } from 'yup';
import FormikInput from '../../components/FormikInput/FormikInput';

type Props = {};


const AddProduct = (props: Props) => {
    //initialValues => Formumuzun başlangıç değeri

    const initialValues = {
        title: "",
        description: "",
        price: 0,
        stock: 0,
    }

    const validationSchema = object({
        title: string().required("Başlık alanı zorunludur").min(3,"Başlık alanı en az 3 karakter olmalıdır!").max(50),
        description: string().required("ürün açıklaması zorunludur").min(5,"ürün açıklaması en az 5 karakter olmalıdır").max(300),
        price: number().required().min(0),
        stock: number().required().min(0).integer(),

    });


    return (
        <div className="container mt-5">
            <Formik initialValues={initialValues} onSubmit={values => {
                console.log(values);
            }}
                validationSchema={validationSchema}
            >
                <Form>
                    <FormikInput name="title" label="Ürün Adı" placeHolder="Ürün Adı"/>
                    <FormikInput name="description" label="Ürün açıklaması"/>
                    <FormikInput type="number" name="price" label="Ürün Fiyatı"/>
                    <FormikInput type="number" name="stock" label="Ürün stok"/>
                    <button type="submit" className="btn btn-primary">
                        kaydet
                    </button>
                </Form>
            </Formik>
        </div>
    )
}


export default AddProduct