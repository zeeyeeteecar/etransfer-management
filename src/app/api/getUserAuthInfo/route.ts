import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    console.log("decodedToken----", decodedToken);

    if (decodedToken) {
      return NextResponse.json({
        message: "User found",
        data: decodedToken,
      });
    } else {
      return NextResponse.json({
        mesaaage: "User Not Login",
        data: {},
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
