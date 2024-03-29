import { createContext, useState } from "react";

//her state bir initial state'e sahip olmalıdır.
export const AuthContext = createContext({}); // depo create işlemi

//props.children => react tarafından otomatik bir şekilde bu component tagleri arasına yazılan yapıyı taşır.
export const AuthProvider = (props:any) => {
	const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") != null)


	return (
	<AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>{props.children}</AuthContext.Provider>
	);
};//depoyu uygulamaya sağlayacak component

//KALICI HAFIZA DEĞİLDİR!
