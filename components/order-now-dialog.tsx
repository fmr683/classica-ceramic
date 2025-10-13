"use client"

import { useEffect, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitOrder } from "@/app/products/actions"

const initialState = { ok: false, message: "" }

function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit & WhatsApp"}
    </Button>
  )
}

export function OrderNowDialog({
  productName,
  productSlug,
  quantity,
}: { productName: string; productSlug: string; quantity: number }) {
  const [startedAt, setStartedAt] = useState<string>("")
  const [state, formAction] = useFormState(submitOrder, initialState)

  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) setStartedAt(String(Date.now()))
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="flex-1 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Order Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Now</DialogTitle>
          <DialogDescription>
            Share your details—we’ll open a WhatsApp chat to confirm your order.
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          {/* Honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />
          {/* Time-trap */}
          <input type="hidden" name="startedAt" value={startedAt} />
          {/* Product context */}
          <input type="hidden" name="productName" value={productName} />
          <input type="hidden" name="productSlug" value={productSlug} />
          {/* Quantity */}
          <input type="hidden" name="qty" value={String(quantity)} />

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required minLength={2} maxLength={80} placeholder="e.g., Nimal Perera" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Sri Lanka)</Label>
            <Input id="phone" name="phone" required inputMode="tel" placeholder="e.g., 0771234567 or +94771234567" />
            <p className="text-xs text-muted-foreground">We’ll message you on WhatsApp to confirm.</p>
          </div>

          {state?.message && (
            <p className="text-sm text-destructive" role="alert">{state.message}</p>
          )}

          <DialogFooter>
            <SubmitBtn />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
