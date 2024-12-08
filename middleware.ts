import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
//public has access to these routes

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});
//all other routes are protected

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
