import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Download } from 'lucide-react';
import Modal from '@/components/Modal';
import { SCHOOLS } from '@/constants';
import { Course } from '@/types';

interface DownloadBrochureButtonProps {
  fileUrl: string;
  fileName: string;
  buttonText?: string;
  buttonClassName?: string;
  defaultCourseName?: string;
  children?: React.ReactNode;
}

const allCourses = SCHOOLS.flatMap((school) => school.courses);
const uniqueCourseNames = Array.from(new Set(allCourses.map((course) => course.name)));

const sanitizeKey = (value: string) => value.replace(/[^a-z0-9]/gi, '_').toLowerCase();

export default function DownloadBrochureButton({
  fileUrl,
  fileName,
  buttonText = 'Download Brochure',
  buttonClassName,
  defaultCourseName,
  children,
}: DownloadBrochureButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: defaultCourseName || '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const storageKey = useMemo(() => {
    const courseSlug = sanitizeKey(formState.course || defaultCourseName || 'general');
    return `fcit_download_${sanitizeKey(fileName)}_${courseSlug}`;
  }, [fileName, formState.course, defaultCourseName]);

  const canDownload = fileUrl && fileUrl !== '#';

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      phone: '',
      course: defaultCourseName || '',
    });
    setFormErrors({});
    setSuccessMessage('');
    setIsSubmitting(false);
  };

  const openModal = () => {
    if (!canDownload) return;
    resetForm();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const triggerPdfDownload = (url: string, fileNameToDownload: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileNameToDownload;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formState.name.trim()) errors.name = 'Full name is required.';
    if (!formState.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Enter a valid email address.';
    }
    if (!formState.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formState.phone)) {
      errors.phone = 'Enter a valid phone number.';
    }
    if (!formState.course.trim()) errors.course = 'Please select a course.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    localStorage.setItem(storageKey, JSON.stringify({
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      course: formState.course,
      timestamp: new Date().toISOString(),
    }));

    setIsSubmitting(false);
    setSuccessMessage('Great choice! Your brochure is downloading...');
    triggerPdfDownload(fileUrl, fileName);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={buttonClassName ?? 'inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-10 py-4 text-base font-semibold text-white shadow-xl transition duration-300 hover:bg-[#A3861D]'}
        disabled={!canDownload}
      >
        {children ?? (
          <>
            <Download className="h-5 w-5" />
            {buttonText}
          </>
        )}
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={defaultCourseName ? `Download ${defaultCourseName} Brochure` : 'Download Brochure'}
      >
        <div className="relative overflow-hidden rounded-[28px] bg-slate-50 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          {successMessage && (
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute left-8 top-10 h-3 w-3 rounded-full bg-amber-300 animate-ping" />
              <span className="absolute left-24 top-6 h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
              <span className="absolute right-16 top-20 h-2 w-2 rounded-full bg-amber-200 animate-pulse" />
              <span className="absolute right-10 bottom-16 h-3 w-3 rounded-full bg-amber-300 animate-ping" />
            </div>
          )}

          <div className="relative space-y-8">
            {successMessage ? (
              <div className="rounded-[28px] border border-amber-100 bg-amber-50 p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-200 text-amber-900 text-2xl shadow-inner">🎉</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">{successMessage}</h3>
                    <p className="mt-3 text-slate-600">Your brochure is on its way. Check your inbox for further details.</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-accent font-semibold">Lead Capture</p>
                  <p className="text-lg text-slate-700 leading-relaxed">Enter your details to receive the brochure and keep the download available for follow-up.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">Full Name</span>
                    <input
                      value={formState.name}
                      onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                      placeholder="Jane Doe"
                    />
                    {formErrors.name && <p className="text-sm text-red-600">{formErrors.name}</p>}
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">Email Address</span>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                      placeholder="jane@example.com"
                    />
                    {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">Phone Number</span>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                      placeholder="+91 98765 43210"
                    />
                    {formErrors.phone && <p className="text-sm text-red-600">{formErrors.phone}</p>}
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">Course Selection</span>
                    <select
                      value={formState.course}
                      onChange={(e) => setFormState((prev) => ({ ...prev, course: e.target.value }))}
                      className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                    >
                      <option value="">Select a course</option>
                      {uniqueCourseNames.map((name) => (
                        <option key={name} value={name}>{name}</option>
                      ))}
                    </select>
                    {formErrors.course && <p className="text-sm text-red-600">{formErrors.course}</p>}
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition duration-300 hover:bg-[#A3861D] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Send and Download'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
