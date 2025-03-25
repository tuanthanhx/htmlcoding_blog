import { CommonSidebar } from '@/app/_components/common-sidebar';

export default function Index() {
  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-10">
        <div className="w-full pb-12">
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tighter leading-tight">Contact</h2>
            <p>
              <a className="hover:underline" href="mailto:hello@htmlcoding.net">
                hello@htmlcoding.net
              </a>
            </p>
          </div>
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}
