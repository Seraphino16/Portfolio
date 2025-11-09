import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { formData, token } = await req.json();

        if (!formData || !token) {
            return NextResponse.json({ success: false, message: 'Missing data or token' }, { status: 400 });
        }

        const verifyHCaptcha = await fetch('https://hcaptcha.com/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: process.env.HCAPTCHA_SECRET_KEY!,
                response: token,
            }),
        });

        const hCaptchaRes = await verifyHCaptcha.json();

        if (!hCaptchaRes.success || hCaptchaRes.score < 0.5) {
            return NextResponse.json({ success: false, message: 'Invalid Captcha' }, { status: 403 });
        }

        const payload = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: formData,
        };

        const emailjsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
        });

        const response = await emailjsRes.text();
        return NextResponse.json({ success: true, result: response });

    } catch (err) {
        return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
    }
}