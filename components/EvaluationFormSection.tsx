"use client";

import { useState } from "react";
import { landingContent } from "@/lib/landing-content";
import { SubmittedModal } from "./SubmittedModal";

type FormData = {
  fullName: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  netsuiteUsage: string;
  operationType: string;
  processes: string[];
  excelUsage: string;
  mainProblem: string;
  participants: string[];
  startDate: string;
};

const initialState: FormData = {
  fullName: "",
  role: "",
  company: "",
  email: "",
  phone: "",
  netsuiteUsage: "",
  operationType: "",
  processes: [],
  excelUsage: "",
  mainProblem: "",
  participants: [],
  startDate: "",
};

export function EvaluationFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>(initialState);
  const c = landingContent;

  const toggleMulti = (field: "processes" | "participants", value: string) => {
    setForm((prev) => {
      const has = prev[field].includes(value);
      return {
        ...prev,
        [field]: has ? prev[field].filter((v) => v !== value) : [...prev[field], value],
      };
    });
  };

  return (
    <section className="section" id="evaluacion" data-reveal>
      <p className="eyebrow">{c.form.eyebrow}</p>
      <h2>{c.form.title}</h2>
      <p className="section-copy">{c.form.intro1}</p>
      <p className="section-copy">{c.form.intro2}</p>
      <div className="form-layout">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            setForm(initialState);
          }}
        >
          <label>Nombre y apellido<input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} /></label>
          <label>Cargo<input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></label>
          <label>Empresa<input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></label>
          <label>Correo corporativo<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Teléfono / WhatsApp<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>

          <label>Uso actual de NetSuite<select required value={form.netsuiteUsage} onChange={(e) => setForm({ ...form, netsuiteUsage: e.target.value })}><option value="">Selecciona una opción</option>{c.options.netsuiteUsage.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>Tipo de operación<select required value={form.operationType} onChange={(e) => setForm({ ...form, operationType: e.target.value })}><option value="">Selecciona una opción</option>{c.options.operationType.map((option) => <option key={option}>{option}</option>)}</select></label>

          <fieldset><legend>Procesos a optimizar</legend><div className="chip-group">{c.options.processToOptimize.map((option) => <label key={option} className="check chip-check"><input type="checkbox" checked={form.processes.includes(option)} onChange={() => toggleMulti("processes", option)} />{option}</label>)}</div></fieldset>
          <label>Uso actual de Excel para complementar NetSuite<select value={form.excelUsage} onChange={(e) => setForm({ ...form, excelUsage: e.target.value })}><option value="">Selecciona una opción</option>{c.options.excelUsage.map((option) => <option key={option}>{option}</option>)}</select></label>

          <label>Principal problema que espera resolver<textarea required value={form.mainProblem} onChange={(e) => setForm({ ...form, mainProblem: e.target.value })} /></label>

          <fieldset><legend>Participantes sugeridos para reunión</legend><div className="chip-group">{c.options.meetingParticipants.map((option) => <label key={option} className="check chip-check"><input type="checkbox" checked={form.participants.includes(option)} onChange={() => toggleMulti("participants", option)} />{option}</label>)}</div></fieldset>
          <label>Fecha estimada de inicio<select required value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })}><option value="">Selecciona una opción</option>{c.options.startDate.map((option) => <option key={option}>{option}</option>)}</select></label>

          <button className="btn btn-primary" type="submit">{c.form.submit}</button>
          <p className="small">{c.form.privacy}</p>
        </form>
        <aside className="card">
          <h3>Beneficios</h3>
          <ul className="list">
            {c.form.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </aside>
      </div>

      <SubmittedModal open={submitted} onClose={() => setSubmitted(false)} />
    </section>
  );
}

