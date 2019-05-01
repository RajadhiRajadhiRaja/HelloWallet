import HomePage from "../pages/home.f7.html";
import WalletHome from "../pages/wallethome.f7.html";
import WalletSeed from "../pages/walletseed.f7.html";
import VerifySeed from "../pages/verifyseed.f7.html";
import GenerateWallet from "../pages/generatewallet.f7.html";

import NotFoundPage from "../pages/404.f7.html";

var routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/wallethome/",
    component: WalletHome
  },
  {
    path: "/walletseed/",
    component: WalletSeed
  },
  {
    path: "/verifyseed/",
    component: VerifySeed
  },
  {
    path: "/generatewallet/",
    component: GenerateWallet
  },
  {
    path: "(.*)",
    component: NotFoundPage
  }
];

export default routes;
