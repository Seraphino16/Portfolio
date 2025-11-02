import path from "node:path";
import * as fs from "node:fs";
import {readFile} from "node:fs/promises";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'files', 'CV.pdf');

        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ success: false, message: 'File not found' }, { status: 404 });
        }

        const buffer = await readFile(filePath);

        const headers = new Headers();
        headers.append('Content-Disposition', 'attachment;');
        headers.append('Content-Type', 'application/pdf');

        return new Response(buffer, {headers: headers});
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}