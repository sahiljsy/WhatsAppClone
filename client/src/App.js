//Component

import Messenger from "./Component/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";

function App() {
  const clientId =
    "1042243883955-onc20qas6llj6jsj4fb2k73566rbdfui.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
