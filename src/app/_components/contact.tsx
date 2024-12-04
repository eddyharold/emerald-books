"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CircleUser, Mail, Phone, SendHorizonal } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0);

  return (
    <section id="contact" className="py-10 lg:py-20 bg-brand-100/20 lg:text-lg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-5xl font-bold font-recoleta text-primary">Contact Us</h2>
              <p className="text-muted-foreground lg:text-lg">
                Email, call, or complete the form to learn how Emerald Books can help with your educational publishing
                needs.
              </p>
            </div>

            <div className="space-y-2 flex flex-col">
              <a
                href="mailito:info@emeraldbooks.com"
                className="text-brand-950 underline underline-offset-4 decoration-dashed cursor-pointer"
              >
                info@emeraldbooks.com
              </a>
              <a
                href="tel:321-221-231"
                className="text-brand-950 underline underline-offset-4 decoration-dashed cursor-pointer"
              >
                321-221-231
              </a>
            </div>

            <div className="grid gap-6">
              <div>
                <h3 className="font-semibold text-xl lg:text-2xl text-brand-950">Customer Support</h3>
                <p className="text-muted-foreground lg:text-lg">
                  Our support team is available around the clock to address any concerns or queries you may have.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl lg:text-2xl text-brand-950">Feedback and Suggestions</h3>
                <p className="text-muted-foreground lg:text-lg">
                  We value your feedback and are continuously working to improve our services. Your input is crucial in
                  shaping the future of Emerald Books.
                </p>
              </div>

              {/* <div>
                <h3 className="font-semibold text-xl">Media Inquiries</h3>
                <p className="text-muted-foreground lg:text-lg">
                  For media-related questions or press inquiries, please contact us at media@emeraldbooks.com.
                </p>
              </div> */}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-brand-950/10 p-6 shadow-lg space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl lg:text-4xl font-semibold font-recoleta text-brand-950">Get in Touch</h3>
              <p className="text-muted-foreground lg:text-lg">You can reach us anytime</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Fullname <sup className="text-destructive">*</sup>
                  </Label>
                  <div className="relative">
                    <CircleUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="fullname"
                      type="text"
                      placeholder="Ex: Leslie Clyde"
                      className="pl-10 text-sm h-10 lg:h-11"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <sup className="text-destructive">*</sup>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ex: client@gmail.com"
                        className="pl-10 text-sm h-10 lg:h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input id="tel" type="tel" placeholder="Ex: 695402561" className="pl-10 text-sm h-10 lg:h-11" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    How can we help? <sup className="text-destructive">*</sup>
                  </Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Type your message here"
                      className="min-h-[120px] resize-none"
                      maxLength={120}
                      onChange={(e) => setMessageLength(e.target.value.length)}
                    />
                    <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">{messageLength}/120</span>
                  </div>
                </div>
              </div>

              <Button type="submit" className="rounded-full w-full h-10 lg:h-11 lg:text-base flex items-center">
                Submit message
                <SendHorizonal />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
