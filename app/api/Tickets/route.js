import Ticket from "../../{models}/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json(
      { message: "Ticket Created yay!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
}
