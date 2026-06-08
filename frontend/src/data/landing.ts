import type { Tenant, LandingCopy, LandingContent, Language } from "@/types/tenant";

export const mockTeacher: Tenant = {
  id: "t-1",
  name: "Mr. Ahmed",
  subject: "Chemistry",
  bio: "مدرس كيمياء — خبرة ١٥ سنة في تدريس الثانوية العامة",
  photoUrl:
    "https://api.dicebear.com/9.x/initials/svg?seed=Ahmed&backgroundColor=1A103D&textColor=ffffff&fontSize=40",
  brandName: "Fahimni",
  studentCount: 530,
  chapterPrice: 500,
  currency: "EGP",
  yearsExperience: 15,
  rating: 4.9,
  ratingCount: 480,
};

export const landingCopy: Record<Language, LandingCopy> = {
  ar: {
    headline: "كل حاجة محتاجها في الكيمياء في مكان واحد",
    features: ["فيديوهات شرح", "ملخصات PDF", "شيتات تدريب", "AI Tutor ذكي"],
    ctaButton: "اشترك دلوقتي",
    socialProof: (count) => `أكتر من ${count} طالب مسجلين`,
    priceLabel: (price, currency) => `${price} ${currency} / شهرياً`,
  },
  en: {
    headline: "Everything you need in Chemistry — in one place",
    features: ["Video Lessons", "PDF Summaries", "Practice Sheets", "Smart AI Tutor"],
    ctaButton: "Subscribe Now",
    socialProof: (count) => `More than ${count} students enrolled`,
    priceLabel: (price, currency) => `${price} ${currency} / month`,
  },
};

export const teacherNameLocalized: Record<Language, string> = {
  ar: "أ. أحمد طارق",
  en: "Mr. Ahmed Tarek",
};

export const bioLocalized: Record<Language, string> = {
  ar: "مدرس كيمياء — خبرة ١٥ سنة في تدريس الثانوية العامة",
  en: "Chemistry teacher — 15 years of experience teaching secondary school",
};

export const subjectLocalized: Record<Language, string> = {
  ar: "الكيمياء",
  en: "Chemistry",
};

export const landingContent: Record<Language, LandingContent> = {
  ar: {
    nav: {
      benefits: "المميزات",
      how: "إزاي بيشتغل",
      testimonials: "آراء الطلاب",
      faq: "أسئلة شائعة",
      cta: "اشترك دلوقتي",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
    },
    hero: {
      badge: "منصة الكيمياء رقم ١ للثانوية العامة",
      headline: "قفل الكيمياء — من أول درس لآخر امتحان",
      subheadline:
        "شرح مبسّط، ملخصات، شيتات تدريب، ومساعد ذكي بيجاوبك في أي وقت — كل ده عشان تجيب الدرجة اللي تستاهلها.",
      primaryCta: "اشترك دلوقتي",
      secondaryCta: "شوف المنهج الأول",
      credibility: ["منهج الثانوية كامل", "متابعة أسبوعية"],
      ratingLabel: (rating, count) => `${rating} من ٥ • ${count} تقييم`,
      studentsLabel: (count) => `+${count} طالب`,
      yearsLabel: (years) => `${years} سنة خبرة`,
    },
    why: {
      eyebrow: "",
      title: "المنصة مبنية على المشاكل اللي بتقابل كل طالب كيمياء",
      subtitle:
        "عارفين المشاكل اللي بتقابلك في المذاكرة — وعملنا المنصة عشان نحلّها واحدة واحدة.",
      items: [
        {
          problem: "مشتت بين كذا مصدر ومجموعة واتساب؟",
          solution: "كل الدروس والملخصات والاختبارات منظّمة في مكان واحد.",
        },
        {
          problem: "بتذاكر ومفيش حد يجاوب على سؤالك بسرعة؟",
          solution: "المساعد الذكي بيجاوبك فورًا بمصادر من المنهج نفسه.",
        },
        {
          problem: "مش عارف مستواك الحقيقي قبل الامتحان؟",
          solution: "اختبارات بعد كل فصل بتوريك نقاط ضعفك قبل ما الامتحان ييجي.",
        },
      ],
    },
    benefits: {
      eyebrow: "",
      title: "دروس، اختبارات، ملخصات، ومدرّس ذكي — كلّه هنا",
      subtitle: "مش مجرد فيديوهات — منظومة تعليمية متكاملة اتبنت عشان تفهم وتتفوّق.",
      items: [
        {
          icon: "video",
          title: "فيديوهات شرح مبسّطة",
          desc: "شرح كل درس خطوة بخطوة بجودة عالية تقدر ترجعله أي وقت.",
        },
        {
          icon: "fileText",
          title: "ملخصات PDF",
          desc: "ملخص مركّز لكل فصل تذاكر منه قبل الامتحان بسهولة.",
        },
        {
          icon: "penTool",
          title: "شيتات تدريب",
          desc: "مسائل وتمارين متدرّجة الصعوبة على كل جزء في المنهج.",
        },
        {
          icon: "listChecks",
          title: "اختبارات ذكية",
          desc: "كويزات بعد كل فصل بتصحيح فوري ونتيجة تفصيلية.",
        },
        {
          icon: "bot",
          title: "مساعد AI ذكي",
          desc: "اسأل أي سؤال في المنهج وخد إجابة فورية بمصادرها.",
        },
        {
          icon: "lineChart",
          title: "متابعة تقدّمك",
          desc: "شوف نسبة إنجازك في كل فصل واعرف فين محتاج تركّز.",
        },
      ],
    },
    ai: {
      eyebrow: "المساعد الذكي",
      title: "مدرّس مساعد معاك ٢٤ ساعة",
      subtitle:
        "مش فاهم نقطة؟ اسأل المساعد الذكي وهيشرحلك بإجابة مبنية على دروسك أنت — مش كلام عام من النت.",
      points: [
        "إجابات فورية بمصادر من المنهج",
        "بيرجّعك للدرس أو الملخص اللي فيه الإجابة",
        "متاح في أي وقت، حتى نص الليل قبل الامتحان",
      ],
      chat: {
        question: "ليه الأحماض القوية بتتأين بالكامل في الماء؟",
        answer:
          "لأن قوة الحمض بتعتمد على سهولة انفصال أيون الهيدروجين. في الأحماض القوية زي HCl الرابطة ضعيفة فبتتأين ١٠٠٪ في الماء.",
        citation: "الفصل ٣: الأحماض والقواعد — درس ٢",
        placeholder: "اسأل أي سؤال في الكيمياء…",
        remaining: "٢٠ سؤال متبقي اليوم",
      },
    },
    how: {
      eyebrow: "",
      title: "ابدأ في ٤ خطوات بس",
      subtitle: "من التسجيل لحد أول درس في أقل من دقيقتين.",
      steps: [
        { icon: "userPlus", title: "اعمل حساب", desc: "سجّل برقم موبايلك في ثواني." },
        { icon: "creditCard", title: "اختار الفصل", desc: "اختار الفصل اللي محتاجه وادفع أونلاين أو بكود." },
        { icon: "playCircle", title: "ذاكر واتفرّج", desc: "ادخل على الفيديوهات والملخصات والشيتات." },
        { icon: "messageCircleQuestion", title: "اسأل واختبر", desc: "اسأل المساعد الذكي واختبر نفسك بعد كل فصل." },
      ],
    },
    metrics: {
      eyebrow: "",
      title:"ليه الطلاب بيثقوا فينا ؟",
      items: [
        { value: 530, prefix: "+", label: "طالب مسجّل" },
        { value: 1200, prefix: "+", label: "درس ومادة" },
        { value: 92, suffix: "٪", label: "نسبة رضا الطلاب" },
        { value: 15, label: "سنة خبرة" },
      ],
    },
    testimonials: {
      eyebrow: "",
      title: "من الحيرة للثقة — اللي الطلاب بيقولوه",
      subtitle: "مش إحنا اللي بنقول — دول طلابنا اللي شافوا الفرق بنفسهم.",
      items: [
        {
          name: "مريم خالد",
          stage: "الصف الثالث الثانوي",
          quote: "أول مرة أفهم الكيمياء كده! المساعد الذكي أنقذني ليلة الامتحان.",
          rating: 5,
          seed: "Mariam",
        },
        {
          name: "يوسف عماد",
          stage: "الصف الثاني الثانوي",
          quote: "الملخصات والشيتات وفّرت عليّ وقت كتير، وجبت ٩٥٪ في الترم.",
          rating: 5,
          seed: "Youssef",
        },
        {
          name: "حبيبة سامح",
          stage: "الصف الثالث الثانوي",
          quote: "كل حاجة منظّمة ومرتّبة، بقيت أذاكر من مكان واحد بدل التشتت.",
          rating: 5,
          seed: "Habiba",
        },
      ],
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title: "في بالك سؤال؟ إحنا جاوبناه",
      subtitle: "كل اللي محتاج تعرفه قبل ما تبدأ.",
      items: [
        {
          q: "إزاي بدفع؟",
          a: "تقدر تدفع أونلاين بالكارت أو فودافون كاش، أو تستخدم كود خصم لو معاك واحد.",
        },
        {
          q: "هل الاشتراك بيشمل المنهج كله؟",
          a: "تقدر تشترك في الفصل اللي محتاجه بس، أو تاخد المنهج كامل — أنت اللي تختار.",
        },
        {
          q: "أقدر أتفرّج على الدروس على الموبايل؟",
          a: "أكيد، المنصة شغّالة على الموبايل والتابلت والكمبيوتر من أي متصفح.",
        },
        {
          q: "الفيديوهات بتفضل متاحة قد إيه؟",
          a: "تقدر ترجع للدروس والملخصات طول مدة اشتراكك في الفصل بدون حدود.",
        },
        {
          q: "المساعد الذكي ده بيشتغل إزاي؟",
          a: "بتسأله أي سؤال في المنهج، وبيجاوبك فورًا بإجابة مبنية على دروسك مع مصدرها.",
        },
        {
          q: "لو واجهتني مشكلة هلاقي حد يساعدني؟",
          a: "فريق الدعم متاح يساعدك في أي وقت من خلال المنصة أو الواتساب.",
        },
      ],
    },
    finalCta: {
      eyebrow: "",
      title: "ابدأ رحلة تفوّقك في الكيمياء النهاردة",
      subtitle: "انضم لأكتر من ٥٣٠ طالب بيذاكروا أذكى، مش أصعب.",
      button: "اشترك دلوقتي",
      guarantee: "إلغاء في أي وقت • دعم فني سريع • بدون التزامات",
      priceNote: "اشتراك شهري مرن",
    },
    footer: {
      tagline: "منصة تعليمية متكاملة للكيمياء — اتبنت عشان تنجح.",
      columns: [
        { title: "المنصة", links: ["المميزات", "إزاي بيشتغل", "الأسعار", "أسئلة شائعة"] },
        { title: "المواد", links: ["كيمياء ٢ ثانوي", "كيمياء ٣ ثانوي", "مراجعات نهائية", "بنك الأسئلة"] },
        { title: "تواصل معنا", links: ["الدعم الفني", "واتساب", "فيسبوك", "يوتيوب"] },
      ],
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    nav: {
      benefits: "Features",
      how: "How it works",
      testimonials: "Reviews",
      faq: "FAQ",
      cta: "Subscribe Now",
      login: "Login",
      register: "Register",
    },
    hero: {
      badge: "The #1 Chemistry platform for secondary students",
      headline: "Pass Chemistry — from the first lesson to final exam",
      subheadline:
        "Clear lessons, summaries, practice sheets, and a smart assistant that answers you anytime — so you score the grade you deserve.",
      primaryCta: "Subscribe Now",
      secondaryCta: "See the curriculum",
      credibility: ["Full secondary syllabus", "Weekly follow-up"],
      ratingLabel: (rating, count) => `${rating} of 5 • ${count} reviews`,
      studentsLabel: (count) => `${count}+ students`,
      yearsLabel: (years) => `${years} yrs experience`,
    },
    why: {
      eyebrow: "",
      title: "Built around the problems every chemistry student knows",
      subtitle:
        "We know the problems you face while studying — and built the platform to solve them one by one.",
      items: [
        {
          problem: "Scattered across sources and WhatsApp groups?",
          solution: "Every lesson, summary, and quiz organized in one place.",
        },
        {
          problem: "Studying with no one to answer your question fast?",
          solution: "The AI assistant answers instantly, sourced from your own curriculum.",
        },
        {
          problem: "Not sure of your real level before the exam?",
          solution: "Quizzes after each chapter reveal your weak spots before exam day.",
        },
      ],
    },
    benefits: {
      eyebrow: "",
      title: "Lessons, quizzes, summaries, and an AI tutor — all here",
      subtitle: "Not just videos — a complete learning system built to help you understand and excel.",
      items: [
        { icon: "video", title: "Clear video lessons", desc: "Every lesson explained step by step in high quality, anytime." },
        { icon: "fileText", title: "PDF summaries", desc: "A focused summary per chapter to revise from before exams." },
        { icon: "penTool", title: "Practice sheets", desc: "Graded problems and exercises on every part of the syllabus." },
        { icon: "listChecks", title: "Smart quizzes", desc: "Quizzes after each chapter with instant, detailed results." },
        { icon: "bot", title: "Smart AI assistant", desc: "Ask any curriculum question and get an instant, sourced answer." },
        { icon: "lineChart", title: "Progress tracking", desc: "See your completion per chapter and know where to focus." },
      ],
    },
    ai: {
      eyebrow: "AI Assistant",
      title: "A teaching assistant with you 24/7",
      subtitle:
        "Stuck on a concept? Ask the AI assistant and it explains using YOUR lessons — not generic answers from the web.",
      points: [
        "Instant answers sourced from the curriculum",
        "Links you to the exact lesson or summary with the answer",
        "Available anytime, even at midnight before the exam",
      ],
      chat: {
        question: "Why do strong acids fully ionize in water?",
        answer:
          "Acid strength depends on how easily the hydrogen ion detaches. In strong acids like HCl the bond is weak, so it ionizes 100% in water.",
        citation: "Chapter 3: Acids & Bases — Lesson 2",
        placeholder: "Ask any chemistry question…",
        remaining: "20 questions left today",
      },
    },
    how: {
      eyebrow: "",
      title: "Get started in just 4 steps",
      subtitle: "From sign-up to your first lesson in under two minutes.",
      steps: [
        { icon: "userPlus", title: "Create an account", desc: "Sign up with your phone number in seconds." },
        { icon: "creditCard", title: "Choose a chapter", desc: "Pick the chapter you need and pay online or with a code." },
        { icon: "playCircle", title: "Study & watch", desc: "Access the videos, summaries, and practice sheets." },
        { icon: "messageCircleQuestion", title: "Ask & test", desc: "Ask the AI assistant and quiz yourself after each chapter." },
      ],
    },
    metrics: {
      eyebrow: "",
      title: "Why students trust us ?",
      items: [
        { value: 530, prefix: "+", label: "Enrolled students" },
        { value: 1200, prefix: "+", label: "Lessons & materials" },
        { value: 92, suffix: "%", label: "Student satisfaction" },
        { value: 15, label: "Years of experience" },
      ],
    },
    testimonials: {
      eyebrow: "",
      title: "From confusion to confidence — what students say",
      subtitle: "Don't take our word for it — these are students who saw the difference.",
      items: [
        {
          name: "Mariam Khaled",
          stage: "3rd Secondary",
          quote: "First time chemistry actually made sense! The AI assistant saved me the night before the exam.",
          rating: 5,
          seed: "Mariam",
        },
        {
          name: "Youssef Emad",
          stage: "2nd Secondary",
          quote: "The summaries and sheets saved me so much time — I scored 95% this term.",
          rating: 5,
          seed: "Youssef",
        },
        {
          name: "Habiba Sameh",
          stage: "3rd Secondary",
          quote: "Everything is organized in one place. I finally study without the chaos.",
          rating: 5,
          seed: "Habiba",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Got a question? We answered it",
      subtitle: "Everything you need to know before you start.",
      items: [
        {
          q: "How do I pay?",
          a: "Pay online by card or Vodafone Cash, or use a discount code if you have one.",
        },
        {
          q: "Does the subscription cover the whole syllabus?",
          a: "Subscribe to just the chapter you need, or take the full curriculum — your choice.",
        },
        {
          q: "Can I watch lessons on mobile?",
          a: "Absolutely. The platform works on mobile, tablet, and desktop from any browser.",
        },
        {
          q: "How long do lessons stay available?",
          a: "You can revisit lessons and summaries for the full duration of your chapter subscription.",
        },
        {
          q: "How does the AI assistant work?",
          a: "Ask it any curriculum question and it answers instantly, based on your lessons, with the source.",
        },
        {
          q: "Is there support if I run into a problem?",
          a: "Our support team is available anytime via the platform or WhatsApp.",
        },
      ],
    },
    finalCta: {
      eyebrow: "",
      title: "Start your chemistry success journey today",
      subtitle: "Join 530+ students studying smarter, not harder.",
      button: "Subscribe Now",
      guarantee: "Cancel anytime • Fast support • No commitments",
      priceNote: "Flexible monthly subscription",
    },
    footer: {
      tagline: "A complete chemistry learning platform — built for you to succeed.",
      columns: [
        { title: "Platform", links: ["Features", "How it works", "Pricing", "FAQ"] },
        { title: "Subjects", links: ["Chemistry G11", "Chemistry G12", "Final revisions", "Question bank"] },
        { title: "Contact", links: ["Support", "WhatsApp", "Facebook", "YouTube"] },
      ],
      rights: "All rights reserved"
    },
  },
};
