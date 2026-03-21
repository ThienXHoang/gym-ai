import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import Profile from "./pages/Profile.tsx";
import Auth from "./pages/Auth.tsx";
import Account from "./pages/Account.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth/:pathname" element={<Auth />} />
          <Route path="/account/:pathname" element={<Account />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
