import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'ar';

const translations = {
  en: {
    portalName: 'UAE Government Portal',
    home: 'Home',
    services: 'Services',
    appointments: 'Appointments',
    notifications: 'Notifications',
    greeting: 'Welcome back',
    userName: 'Ahmed Al Mansoori',
    userRole: 'Senior Civil Servant',
    searchPlaceholder: 'Search services...',
    today: 'Today',
    gregorianLabel: 'Gregorian',
    hijriLabel: 'Hijri',
    activeServices: 'Active Services',
    pendingRequests: 'Pending Requests',
    upcomingAppointments: 'Upcoming Appointments',
    newNotifications: 'New Notifications',
    myServices: 'My Services',
    viewAll: 'View All',
    recentActivity: 'Recent Activity',
    visaRenewal: 'Visa Renewal',
    emiratesId: 'Emirates ID',
    businessLicense: 'Business License',
    healthInsurance: 'Health Insurance',
    educationPortal: 'Education Portal',
    trafficFines: 'Traffic Fines',
    statusActive: 'Active',
    statusPending: 'Pending',
    statusActionRequired: 'Action Required',
    activityVisaApproved: 'Visa renewal application approved',
    activityIdRenewal: 'Emirates ID renewal submitted',
    activityAppointment: 'Medical appointment confirmed',
    activityFineCleared: 'Traffic fine cleared',
    activityDocUploaded: 'Business license documents uploaded',
    hoursAgo: (n: number) => `${n} hour${n !== 1 ? 's' : ''} ago`,
    daysAgo: (n: number) => `${n} day${n !== 1 ? 's' : ''} ago`,
    minutesAgo: (n: number) => `${n} minute${n !== 1 ? 's' : ''} ago`,
    dashboard: 'Dashboard',
    collapse: 'Collapse sidebar',
    expand: 'Expand sidebar',
  },
  ar: {
    portalName: 'بوابة حكومة الإمارات',
    home: 'الرئيسية',
    services: 'الخدمات',
    appointments: 'المواعيد',
    notifications: 'الإشعارات',
    greeting: 'مرحباً بعودتك',
    userName: 'أحمد المنصوري',
    userRole: 'موظف مدني أول',
    searchPlaceholder: 'البحث عن الخدمات...',
    today: 'اليوم',
    gregorianLabel: 'ميلادي',
    hijriLabel: 'هجري',
    activeServices: 'الخدمات النشطة',
    pendingRequests: 'الطلبات المعلقة',
    upcomingAppointments: 'المواعيد القادمة',
    newNotifications: 'إشعارات جديدة',
    myServices: 'خدماتي',
    viewAll: 'عرض الكل',
    recentActivity: 'النشاط الأخير',
    visaRenewal: 'تجديد التأشيرة',
    emiratesId: 'الهوية الإماراتية',
    businessLicense: 'الرخصة التجارية',
    healthInsurance: 'التأمين الصحي',
    educationPortal: 'بوابة التعليم',
    trafficFines: 'مخالفات المرور',
    statusActive: 'نشط',
    statusPending: 'قيد الانتظار',
    statusActionRequired: 'يتطلب إجراء',
    activityVisaApproved: 'تمت الموافقة على طلب تجديد التأشيرة',
    activityIdRenewal: 'تم تقديم طلب تجديد الهوية الإماراتية',
    activityAppointment: 'تم تأكيد الموعد الطبي',
    activityFineCleared: 'تم سداد مخالفة المرور',
    activityDocUploaded: 'تم رفع مستندات الرخصة التجارية',
    hoursAgo: (n: number) => `منذ ${n} ساعة${n > 2 ? '' : ''}`,
    daysAgo: (n: number) => `منذ ${n} يوم${n > 2 ? '' : ''}`,
    minutesAgo: (n: number) => `منذ ${n} دقيقة`,
    dashboard: 'لوحة التحكم',
    collapse: 'طي الشريط الجانبي',
    expand: 'توسيع الشريط الجانبي',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = signal<Lang>('en');
  readonly lang = this._lang.asReadonly();
  readonly isRtl = computed(() => this._lang() === 'ar');

  toggle(): void {
    const next: Lang = this._lang() === 'en' ? 'ar' : 'en';
    this._lang.set(next);
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = next;
  }

  t(key: TranslationKey): string {
    const val = translations[this._lang()][key];
    return typeof val === 'string' ? val : key;
  }

  relativeTime(date: Date): string {
    const diffMs = Date.now() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);
    const fn = translations[this._lang()];
    if (diffDays > 0) return fn.daysAgo(diffDays);
    if (diffHrs > 0) return fn.hoursAgo(diffHrs);
    return fn.minutesAgo(Math.max(1, diffMin));
  }
}
