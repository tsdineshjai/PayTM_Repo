import prisma from "@repo/db/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const user = await prisma.user.create({
			data: {
				email: "tsri@gmail.com",
				password: "123456",
			},
		});

		return NextResponse.json({
			message: `a user has been created  ${user.id}`,
		});
	} catch (e) {
		console.log(e);
	}
};
