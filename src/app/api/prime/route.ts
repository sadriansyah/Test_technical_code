import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const number = req.nextUrl.searchParams.get('number');
    let displayNumber = '';

    for (let i = 2; i < number; i++){
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            displayNumber+= ` ${i}`;
        }
    }

    const response = {
        number: displayNumber,
    }

    return NextResponse.json(response);
}