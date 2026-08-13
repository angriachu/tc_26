import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { submitDemoRequest } from "@/services/forms";
import type { DemoRequest } from "@/types/forms";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  businessName: z.string().min(2, "Enter your business name"),
  phone: z.string().regex(/^[+\d][\d\s-]{7,14}$/, "Enter a valid phone number"),
  email: z.email("Enter a valid email address"),
  businessType: z.string().min(1, "Choose a business type"),
  counters: z.number().int().min(1, "Enter at least 1 counter"),
  stores: z.number().int().min(1, "Enter at least 1 store"),
  product: z.string().min(1, "Choose a product"),
  message: z.string().max(1000, "Keep your message under 1,000 characters").optional(),
});

export default function DemoRequestForm() {
  const [status, setStatus] = useState<{type:"success"|"error";message:string}|null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DemoRequest>({ resolver: zodResolver(schema), defaultValues: { counters: 1, stores: 1 } });
  const submit = async (data: DemoRequest) => { try { setStatus(null); const result = await submitDemoRequest(data); setStatus({type:"success",message:result.message}); if(result.whatsappUrl) window.location.assign(result.whatsappUrl); } catch (e) { setStatus({type:"error",message:e instanceof Error ? e.message : "Unable to send the request."}); } };
  return <form onSubmit={handleSubmit(submit)} noValidate className="grid gap-5 sm:grid-cols-2">
    <Input label="Full name" name="fullName" autoComplete="name" register={register} error={errors.fullName?.message}/>
    <Input label="Business name" name="businessName" autoComplete="organization" register={register} error={errors.businessName?.message}/>
    <Input label="Phone number" name="phone" type="tel" autoComplete="tel" register={register} error={errors.phone?.message}/>
    <Input label="Email address" name="email" type="email" autoComplete="email" register={register} error={errors.email?.message}/>
    <Select label="Business type" name="businessType" register={register} error={errors.businessType?.message} options={["Hypermarket","Supermarket","Grocery store","Electrical store","Electronics store","Computer / IT store","Automobile parts / inventory","Department store","Retail chain","Wholesale business","Other"]}/>
    <Select label="Interested product" name="product" register={register} error={errors.product?.message} options={["TurboCart Elite — standalone Windows","TurboCart Pro — Windows server + client","TurboCart Platinum — cloud SaaS + e-commerce app","Complete TurboCart Solution","Customized TurboCart Solution"]}/>
    <Input label="Number of billing counters" name="counters" type="number" autoComplete="off" register={register} error={errors.counters?.message}/>
    <Input label="Number of stores" name="stores" type="number" autoComplete="off" register={register} error={errors.stores?.message}/>
    <label className="sm:col-span-2" htmlFor="message"><span className="text-sm font-bold">Message <span className="font-normal text-slate-500">(optional)</span></span><textarea id="message" rows={4} {...register("message")} aria-invalid={!!errors.message} aria-describedby={errors.message?"message-error":undefined} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.035] p-3 text-white outline-none transition focus:border-cyan-300/50"/>{errors.message&&<p id="message-error" className="mt-1 text-xs text-rose-300">{errors.message.message}</p>}</label>
    {status&&<div role="status" className={`sm:col-span-2 rounded-xl border p-4 text-sm ${status.type==="success"?"border-emerald-400/20 bg-emerald-400/[.06] text-emerald-200":"border-rose-400/20 bg-rose-400/[.06] text-rose-200"}`}><span className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0"/>{status.message}</span></div>}
    <button disabled={isSubmitting} className="group flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-extrabold text-slate-950 transition hover:bg-cyan-100 disabled:opacity-60 sm:col-span-2">{isSubmitting?<><LoaderCircle className="h-4 w-4 animate-spin"/> Sending request</>:"Request my demo on WhatsApp"}</button>
    <p className="text-xs text-slate-500 sm:col-span-2">Submitting opens WhatsApp with your details. Tap Send there to deliver the request.</p>
  </form>;
}

type Register = ReturnType<typeof useForm<DemoRequest>>["register"];
function Input({label,name,type="text",autoComplete,register,error}:{label:string;name:keyof DemoRequest;type?:string;autoComplete:string;register:Register;error?:string}) { const id=String(name); return <label htmlFor={id}><span className="text-sm font-bold">{label}</span><input id={id} type={type} min={type==="number"?1:undefined} autoComplete={autoComplete} {...register(name, type==="number" ? { valueAsNumber: true } : undefined)} aria-invalid={!!error} aria-describedby={error?`${id}-error`:undefined} className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[.035] px-3 text-white outline-none transition focus:border-cyan-300/50"/>{error&&<p id={`${id}-error`} className="mt-1 text-xs text-rose-300">{error}</p>}</label>; }
function Select({label,name,register,error,options}:{label:string;name:keyof DemoRequest;register:Register;error?:string;options:string[]}) { const id=String(name); return <label htmlFor={id}><span className="text-sm font-bold">{label}</span><select id={id} defaultValue="" {...register(name)} aria-invalid={!!error} aria-describedby={error?`${id}-error`:undefined} className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#090d19] px-3 text-white outline-none transition focus:border-cyan-300/50"><option value="" disabled>Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select>{error&&<p id={`${id}-error`} className="mt-1 text-xs text-rose-300">{error}</p>}</label>; }
