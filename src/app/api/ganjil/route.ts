import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const number = req.nextUrl.searchParams.get('number');
    let displayNumber = '';

    for (let i = 0; i < number; i++) {
        if (i % 2 != 0) {
            displayNumber += ` ${i}`;
        }
    }

    const response = {
        number: displayNumber,
    };

    return NextResponse.json(response);
}