# Final Project API

REST API مبني بـ **Express** و **TypeScript** و **PostgreSQL** و **Prisma**.

---

## المتطلبات

- Node.js 20+
- npm
- Docker (اختياري — لتشغيل PostgreSQL)

---

## التثبيت والتشغيل

### 1. تثبيت الحزم

```bash
npm install
```

### 2. إعداد متغيرات البيئة

انسخ ملف البيئة وعدّل القيم حسب إعداداتك:

```bash
cp .env.example .env
```

أهم المتغيرات:

| المتغير | الوصف |
|---------|-------|
| `DATABASE_URL` | رابط اتصال PostgreSQL |
| `JWT_SECRET` | مفتاح توقيع Access Token |
| `JWT_REFRESH_SECRET` | مفتاح توقيع Refresh Token |
| `ADMIN_EMAIL` | إيميل حساب الأدمن |
| `ADMIN_PASSWORD` | باسورد حساب الأدمن |
| `ADMIN_FULL_NAME` | اسم الأدمن |
| `ADMIN_MOBILE` | موبايل الأدمن |

مثال `DATABASE_URL`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/final_project
```

### 3. تشغيل قاعدة البيانات

```bash
docker compose up -d postgres
```

### 4. إعداد Prisma

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

- `db:generate` — توليد Prisma Client
- `db:migrate` — تطبيق الـ migrations على قاعدة البيانات
- `db:seed` — إنشاء حساب الأدمن الافتراضي

### 5. تشغيل السيرفر

**وضع التطوير:**

```bash
npm run dev
```

**وضع الإنتاج:**

```bash
npm run build
npm start
```

السيرفر يعمل افتراضياً على: `http://localhost:3000`

---

## أوامر npm المتاحة

| الأمر | الوظيفة |
|-------|---------|
| `npm run dev` | تشغيل السيرفر في وضع التطوير |
| `npm run build` | بناء المشروع (TypeScript → JavaScript) |
| `npm start` | تشغيل النسخة المبنية |
| `npm run db:generate` | توليد Prisma Client |
| `npm run db:migrate` | تشغيل migrations |
| `npm run db:seed` | إنشاء حساب الأدمن |

---

## API Endpoints

| Method | Path | الوصف |
|--------|------|-------|
| `GET` | `/health` | فحص حالة السيرفر |
| `POST` | `/api/auth/register` | تسجيل مستخدم جديد (دور `STUDENT`) |
| `POST` | `/api/auth/login` | تسجيل الدخول |
| `GET` | `/api/users` | جلب قائمة المستخدمين |
| `POST` | `/api/users` | إنشاء مستخدم (مع تحديد الدور) |

---

## أمثلة على الطلبات

### تسجيل مستخدم جديد

```bash
POST /api/auth/register
Content-Type: application/json

{
  "fullName": "أحمد محمد",
  "email": "ahmed@example.com",
  "password": "Password123",
  "mobile": "01012345678"
}
```

### تسجيل الدخول

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "Admin@123456"
}
```

### إنشاء مستخدم بدور محدد

```bash
POST /api/users
Content-Type: application/json

{
  "fullName": "محمد علي",
  "email": "mohamed@example.com",
  "password": "Password123",
  "mobile": "01098765432",
  "role": "OPERATION"
}
```

**الأدوار المتاحة:** `ADMIN` · `STUDENT` · `OPERATION`

---

## حساب الأدمن الافتراضي

بعد تشغيل `npm run db:seed`:

| الحقل | القيمة الافتراضية |
|-------|-------------------|
| Email | `admin@example.com` |
| Password | `Admin@123456` |
| Mobile | `01000000000` |

يمكن تغييرها من ملف `.env`.

---

## قواعد التحقق (Validation)

| الحقل | القاعدة |
|-------|---------|
| `fullName` | من 2 إلى 100 حرف |
| `email` | بريد إلكتروني صالح |
| `password` | 8 أحرف على الأقل |
| `mobile` | رقم مصري بصيغة `01xxxxxxxxx` |
| `role` | `ADMIN` أو `STUDENT` أو `OPERATION` |

---

## هيكل المشروع

```
src/
├── app.ts                  # إعداد Express والـ middleware
├── server.ts               # نقطة تشغيل السيرفر
├── config/                 # إعدادات البيئة وقاعدة البيانات
├── modules/
│   ├── auth/               # تسجيل الدخول والتسجيل
│   └── users/              # إدارة المستخدمين
└── shared/
    ├── middlewares/        # Error handler, Rate limit, Validation
    └── utils/
prisma/
├── schema.prisma           # نموذج المستخدم
└── seed.ts                 # بيانات الأدمن الافتراضية
```

---

## ملاحظات مهمة

- **Rate Limiting:** 100 طلب لكل IP خلال 15 دقيقة.
- **Prisma v7:** إعداد الاتصال في `prisma.config.ts`، والـ Client يُولَّد في `src/generated/prisma`.
- **توثيق المعمارية:** راجع ملف [`ARCHITECTURE.md`](./ARCHITECTURE.md) لتفاصيل التصميم والمتطلبات المنفّذة.

---

## استكشاف الأخطاء

| المشكلة | الحل |
|---------|------|
| `Cannot resolve environment variable: DATABASE_URL` | تأكد من وجود ملف `.env` وقيمة `DATABASE_URL` صحيحة |
| فشل الاتصال بـ PostgreSQL | تأكد أن Docker container شغّال: `docker compose ps` |
| `Prisma Client not generated` | شغّل `npm run db:generate` |
| أخطاء Validation | راجع قواعد التحقق أعلاه وتأكد من صيغة البيانات |
