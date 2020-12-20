import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import {useAuthListener} from './hooks';

function App() {
  const { user } = useAuthListener();


  return (
    <Router>
      {/* sign in */}
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
          <SignIn />
      </IsUserRedirect>
      {/* sign up */}
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
          <SignUp />
        </IsUserRedirect>
      {/* browse */}
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;
