import React from "react";

// interface AuthContextType {
//   user: any;
//   signin: (user: String, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

let AuthContext = React.createContext(null);
console.log(AuthContext);
export default AuthContext;
