import { NextResponse, type NextRequest } from "next/server";

const isLoggedIn: boolean = false;

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;


    const isPublicPath =  path === "/eTransferList" ;

  const token = request.cookies.get("token")?.value || undefined;

  console.log("token==" , token)

  //if (token===undefined &&  !isPublicPath && path !== "/login") {
  if (!token &&  path !== "/login") {
       return NextResponse.redirect(new URL("/login", request.url));
     }

     return NextResponse.next();
}

export const config = {
  matcher:['/login','/eTransferList']
};


