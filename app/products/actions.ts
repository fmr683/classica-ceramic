"use server"

import { redirect } from "next/navigation"

const PHONE_TARGET = "94777565471"

function normalizeSriLankaPhone(input: string) {
  let v = (input || "").replace(/[^\d+]/g, "")
  if (v.startsWith("+")) v = v.slice(1)
  if (v.startsWith("0")) v = "94" + v.slice(1)
  if (v.length === 9 && v.startsWith("7")) v = "94" + v
  return v
}

function isLikelyHuman(startedAt: string | null) {
  const started = Number(startedAt || 0)
  if (!started) return false
  return Date.now() - started >= 2500
}

export async function submitOrder(prevState: any, formData: FormData) {
  // Honeypot
  const company = (formData.get("company") as string) || ""
  if (company.trim() !== "") return { ok: false, message: "Blocked by spam filter." }

  // Time trap
  const startedAt = (formData.get("startedAt") as string) || null
  if (!isLikelyHuman(startedAt)) return { ok: false, message: "Submission too fast. Please try again." }

  // Fields
  const name = ((formData.get("name") as string) || "").trim()
  const rawPhone = ((formData.get("phone") as string) || "").trim()
  const productName = ((formData.get("productName") as string) || "").trim()
  const productSlug = ((formData.get("productSlug") as string) || "").trim()
  const qtyRaw = (formData.get("qty") as string) || "1"

  // Validate
  if (name.length < 2 || name.length > 80) return { ok: false, message: "Please enter a valid name." }

  const phone = normalizeSriLankaPhone(rawPhone)
  if (!/^94\d{9}$/.test(phone)) return { ok: false, message: "Please enter a valid Sri Lankan phone number." }

  let qty = Number(qtyRaw)
  if (!Number.isFinite(qty)) qty = 1
  qty = Math.max(1, Math.min(99, qty)) // clamp 1–99

  // Message to WhatsApp
  const msg = `New order request from Classica Ceramic:
- Name: ${name}
- Phone: ${rawPhone}
- Product: ${productName}
- Quantity: ${qty}
- Link: https://classicaceramic.lk/products/${productSlug}`

  redirect(`https://wa.me/${PHONE_TARGET}?text=${encodeURIComponent(msg)}`)
}
