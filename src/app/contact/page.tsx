import { CommonSidebar } from '@/app/_components/common-sidebar';
import { ContactForm } from '@/app/_components/contact-form';

export default function Index() {
  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <div>
            <h1 className="mb-10 text-4xl font-bold tracking-tighter leading-tight">Contact</h1>
            <p className="mt-2">Fill out the form below to get in touch!</p>
            <ContactForm />
          </div>
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}

export const dynamic = 'force-static';
