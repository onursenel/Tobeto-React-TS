import { legacy_createStore as createStore } from "redux"// legacy_createStore bu durumun önüne geçtik
import { rootReducer } from "./rootReducer"

export const configureStore = () => {
    return createStore(rootReducer);//Redux artık core Redux kullanımını önermediğinden dolayı createStore üstü çizili gösterir
    //(toolkit ile redux kullanmamızı önerir)
}