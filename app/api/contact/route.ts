import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message, subject } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const projectTypeLabel = projectType
      ? {
          'installation-ga': 'Fence Installation (Georgia)',
          'residential-product': 'Residential Fence Product Order',
          'commercial-product': 'Commercial Grade Custom Quote',
          'custom-gate': 'Custom Gate Sizing',
          other: 'Other',
        }[projectType as string] ?? projectType
      : null

    const internalHtml = `
      <h2 style="margin-bottom:16px">New Quote Request — Fence Workshop</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;width:140px">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd">Email</td><td style="padding:8px;border:1px solid #ddd"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || '(not provided)'}</td></tr>
        ${projectTypeLabel ? `<tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd">Project Type</td><td style="padding:8px;border:1px solid #ddd">${projectTypeLabel}</td></tr>` : ''}
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;vertical-align:top">Project Details</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${message || '(none)'}</td></tr>
      </table>
    `

    const autoReplyHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#de903b;padding:24px 32px">
          <h1 style="color:#fff;margin:0;font-size:24px">Fence Workshop</h1>
        </div>
        <div style="padding:32px;background:#fff;border:1px solid #e5e5e5">
          <h2 style="margin-top:0;color:#111">Thanks for reaching out, ${name}!</h2>
          <p style="color:#444;line-height:1.6">We received your request and will get back to you within one business day.</p>
          <p style="color:#444;line-height:1.6">If you need a faster response, give us a call:</p>
          <p style="font-size:20px;font-weight:bold"><a href="tel:+14043144419" style="color:#de903b;text-decoration:none">(404) 314-4419</a></p>
          <p style="color:#444;line-height:1.6;margin-top:24px">Monday – Friday: 8:00 AM – 5:00 PM<br>Saturday &amp; Sunday: Closed</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:32px 0">
          <p style="color:#888;font-size:13px;margin:0">Fence Workshop &bull; 1522 Huber St NW, Atlanta, GA 30318</p>
        </div>
      </div>
    `

    // Send internal notification and auto-reply in parallel
    const [internalResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: 'Fence Workshop <noreply@fenceworkshop.com>',
        to: 'atlanta@fenceworkshop.com',
        replyTo: email,
        subject: subject || 'New Quote Request — fenceworkshop.com',
        html: internalHtml,
      }),
      resend.emails.send({
        from: 'Fence Workshop <noreply@fenceworkshop.com>',
        to: email,
        subject: 'We received your request — Fence Workshop',
        html: autoReplyHtml,
      }),
    ])

    if (internalResult.error || autoReplyResult.error) {
      console.error('Resend error:', internalResult.error ?? autoReplyResult.error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
