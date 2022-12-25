import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import AddProduct from "../pages/admin/AddProduct";
const authRoutes = [
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/forgot-password", component: ForgotPassword },
];

const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/products", component: Products },
  { path: "/admin/add-products", component: AddProduct },
];
export { authRoutes, adminRoutes };
