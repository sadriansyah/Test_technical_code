import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const number = req.nextUrl.searchParams.get('number');
    let displayNumber = '';

    for (let i = 0; i < number.length; i++) {
        displayNumber+= `${number[i]}`;
        for (let j = 0; j <= i; j++) {
            displayNumber+= '0';
        }
        displayNumber+='</br>';
    }

    console.log(number.length);

    const response = {
        number: displayNumber,
    }

    return NextResponse.json(response);
}