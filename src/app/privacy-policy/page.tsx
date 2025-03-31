import { CommonSidebar } from '@/app/_components/common-sidebar';
import markdownStyles from '@/app/styles/markdown.module.css';

export default function Index() {
  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <div>
            <h1 className="mb-10 text-4xl font-bold tracking-tighter leading-tight">Privacy Policy</h1>
            <div className={markdownStyles['markdown']}>
              <p>
                <em>Last Updated: March 31, 2025</em>
              </p>
              <p>Welcome to HTMLCODING Blog! This privacy policy explains how we handle information when you visit blog.htmlcoding.net. Our goal is to keep things simple and transparent.</p>
              <h2>1. Information We Collect</h2>
              <p>We don’t collect personal information like your name or email address directly from you. However:</p>
              <ul>
                <li>
                  <em>Usage Data</em>: We use Google Analytics to gather anonymous data about how visitors use our site. This includes things like your IP address, browser type, device info, and pages visited. This helps us understand traffic patterns and improve the site.
                </li>
              </ul>
              <h2>2. How We Use This Information</h2>
              <ul>
                <li>The data from Google Analytics is used solely to analyze website traffic and enhance your experience.</li>
                <li>We don’t use this information to identify you personally.</li>
              </ul>
              <h2>3. Third Parties</h2>
              <ul>
                <li>
                  <em>Google Analytics</em>: This service collects and processes the usage data mentioned above. Google has its own privacy policy that governs how they handle this data. We don’t share any additional information with them or anyone else.
                </li>
              </ul>
              <h2>4. Cookies</h2>
              <ul>
                <li>Google Analytics uses cookies to track how you interact with our site. These are small files stored on your device.</li>
                <li>You can opt out of cookies by adjusting your browser settings, though this might affect how some sites work.</li>
              </ul>
              <h2>5. How We Protect Your Data</h2>
              <p>Since we don’t collect personal data ourselves, there’s no personal information stored on our end to protect. Any data handled by Google Analytics is managed according to their security practices.</p>
              <h2>6. Your Choices</h2>
              <ul>
                <li>You can disable cookies in your browser to stop Google Analytics tracking.</li>
                <li>
                  For more control, check out Google’s{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
                    opt-out tools.
                  </a>
                </li>
              </ul>
              <h2>7. Changes to This Policy</h2>
              <p>We might update this policy if something changes. The latest version will always be here.</p>
              <h2>8. Contact Us</h2>
              <p>
                Got questions? Reach out at <a href="mailto:hello@htmlcoding.net">hello@htmlcoding.net</a>.
              </p>
            </div>
          </div>
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}

export const dynamic = 'force-static';
