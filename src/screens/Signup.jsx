import { useState, useEffect } from "react";
import { ArrowRight, Mail, Smartphone, CheckCircle, Clock, Info } from "lucide-react";
import { StatusBar, BackButton, Field, CTA, OTPInput } from "../components";
import { useTimer } from "../utils";
import { EMAIL_OTP, PHONE_OTP, USER } from "../data";

// 3-step customer signup:
//   step 0: name + email + mobile
//   step 1: verify email OTP (auto-reads after 2.5s, or type 482956)
//   step 2: verify phone OTP (auto-reads after 2.5s, or type 874216)
export default function Signup({ onNav, onToast }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState(USER.name);
  const [email, setEmail] = useState(USER.email);
  const [mobile, setMobile] = useState("+91 " + USER.mobile);
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const [phoneOtp, setPhoneOtp] = useState(["", "", "", "", "", ""]);
  const [emailStatus, setEmailStatus] = useState(null);
  const [phoneStatus, setPhoneStatus] = useState(null);

  const handleBack = () => {
    if (step === 0) onNav("userType");
    else setStep(step - 1);
  };

  const verifyEmail = () => {
    if (emailOtp.join("") === EMAIL_OTP) {
      setEmailStatus("ok");
      onToast?.("Email verified");
      setTimeout(() => setStep(2), 800);
    } else {
      setEmailStatus("err");
      onToast?.(`Wrong OTP. Try ${EMAIL_OTP}`);
    }
  };

  const verifyPhone = () => {
    if (phoneOtp.join("") === PHONE_OTP) {
      setPhoneStatus("ok");
      onToast?.("Account ready!");
      setTimeout(() => onNav("home"), 800);
    } else {
      setPhoneStatus("err");
      onToast?.(`Wrong OTP. Try ${PHONE_OTP}`);
    }
  };

  return (
    <div className="absolute inset-0 anim-fade flex flex-col" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-[18px] pt-3 pb-6 flex-1 flex flex-col overflow-y-auto no-scrollbar">
        {/* Progress bar */}
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={handleBack} />
          <div className="flex-1 flex gap-[6px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 h-[3px] rounded-full" style={{ background: i <= step ? "#D44A11" : "rgba(14,14,12,0.1)" }} />
            ))}
          </div>
        </div>

        {step === 0 && <Step0 name={name} setName={setName} email={email} setEmail={setEmail} mobile={mobile} setMobile={setMobile} onNext={() => setStep(1)} />}
        {step === 1 && <StepOTP type="email" target={email} value={emailOtp} onChange={setEmailOtp} setValue={setEmailOtp} status={emailStatus} setStatus={setEmailStatus} onVerify={verifyEmail} correctCode={EMAIL_OTP} onAutoFill={() => setStep(2)} onToast={onToast} />}
        {step === 2 && <StepOTP type="phone" target={`+91 ${USER.mobile}`} value={phoneOtp} onChange={setPhoneOtp} setValue={setPhoneOtp} status={phoneStatus} setStatus={setPhoneStatus} onVerify={verifyPhone} correctCode={PHONE_OTP} onAutoFill={() => onNav("home")} onToast={onToast} />}
      </div>
    </div>
  );
}

function Step0({ name, setName, email, setEmail, mobile, setMobile, onNext }) {
  return (
    <div className="mt-5">
      <h1 className="ff-d text-[24px] font-semibold">Create account</h1>
      <p className="text-[13px] text-muted mt-2">Step 1 of 3 — Your details</p>
      <div className="mt-5 space-y-3">
        <Field label="Full name" value={name} onChange={setName} />
        <Field label="Email" value={email} onChange={setEmail} />
        <Field label="Mobile" value={mobile} onChange={setMobile} />
      </div>
      <div className="mt-[22px]">
        <CTA onClick={onNext}>
          Continue <ArrowRight size={16} />
        </CTA>
      </div>
    </div>
  );
}

function StepOTP({ type, target, value, setValue, status, setStatus, onVerify, correctCode, onAutoFill, onToast }) {
  const { remaining, done, reset } = useTimer(30);
  const Icon = type === "email" ? Mail : Smartphone;
  const title = type === "email" ? "Verify email" : "Verify mobile";

  // Auto-read SMS simulation — fills OTP after 2.5s
  useEffect(() => {
    const t = setTimeout(() => {
      const digits = correctCode.split("");
      digits.forEach((d, i) => {
        setTimeout(() => {
          setValue((prev) => {
            const next = [...prev];
            next[i] = d;
            return next;
          });
          if (i === 5) {
            setStatus("ok");
            onToast?.("OTP auto-read from SMS");
            setTimeout(onAutoFill, 1000);
          }
        }, i * 100);
      });
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mt-5 flex-1 flex flex-col">
      <div className="w-[50px] h-[50px] rounded-[13px] flex items-center justify-center mb-[14px]" style={{ background: "rgba(212,74,17,0.1)" }}>
        <Icon size={24} className="text-copper" />
      </div>
      <h1 className="ff-d text-[24px] font-semibold">{title}</h1>
      <p className="text-[13px] text-muted mt-2">
        Code sent to <span className="text-ink font-medium">{target}</span>
      </p>

      <div className="mt-6">
        <OTPInput value={value} onChange={setValue} status={status} />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Clock size={13} className="text-muted" />
        <span className="text-[13px] text-muted">Auto-reading SMS...</span>
      </div>

      <p className="mt-[14px] text-[13px]">
        {!done ? (
          <span>Resend in <span className="text-copper ff-m font-medium">{remaining}</span></span>
        ) : (
          <button onClick={() => { reset(); onToast?.("OTP resent"); }} className="text-copper font-medium border-0 bg-transparent cursor-pointer">
            Resend code
          </button>
        )}
      </p>

      <div className="mt-auto">
        <div className="mt-[22px]">
          <CTA onClick={onVerify}>
            {type === "email" ? "Verify email" : "Finish & start"}{" "}
            {type === "email" ? <ArrowRight size={16} /> : <CheckCircle size={16} />}
          </CTA>
        </div>
        <div className="mt-[14px] p-[11px] rounded-[10px] border border-dashed border-ink/15 flex items-start gap-2">
          <Info size={12} className="text-muted mt-[2px]" />
          <p className="text-[11px] text-muted">Demo: Auto-fills in 3s, or type {correctCode} manually</p>
        </div>
      </div>
    </div>
  );
}
