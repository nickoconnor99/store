import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from 'next/server';


const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
//public has access to these routes

const isAdminRoute = createRouteMatcher(['/admin(.*)'])
//admin access only for these routes

export default clerkMiddleware((auth, req) => {
  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!isPublicRoute(req)) auth().protect();
});
//all other routes are protected

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
