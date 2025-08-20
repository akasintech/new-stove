import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="px-5 pt-30 pb-10 max-w-3xl mx-auto">
      <Helmet>
        <title>Privacy Policy - Stove</title>
        <meta name="description" content="Stove Privacy Policy explaining what data we collect, how we use it, and your choices." />
        <link rel="canonical" href="https://stove.com.ng/privacy-policy" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-stone-500 mb-8">Effective date: 20 Aug 2025</p>

      <div className="space-y-6 leading-7">
        <p>
          Stove ("we", "our", or "us") is committed to protecting your privacy. This Privacy
          Policy explains what information we collect when you use our website and mobile products, how we use
          and share that information, and the choices you have.
        </p>

        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Account and Contact Information: such as name, email address, phone number when you create an
            account or contact support.
          </li>
          <li>
            Usage Information: interactions with our website/app including pages viewed, features used, and
            timestamps. We may use analytics tools for this purpose.
          </li>
          <li>
            Device and Technical Information: IP address, browser type, device identifiers, operating system,
            and app version to help us keep the service secure and performant.
          </li>
          <li>
            Location Information: with your permission, we may collect approximate or precise location to
            enable services like delivery and nearby availability.
          </li>
          <li>
            Transaction Information: orders, payments, and related records where applicable.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">How We Use Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, maintain, and improve our services and customer support</li>
          <li>Process requests, orders, and payments</li>
          <li>Personalize your experience and provide relevant content</li>
          <li>Communicate with you about updates, security, and marketing (you can opt out of marketing)</li>
          <li>Protect against fraud, abuse, and security risks</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold">Legal Bases</h2>
        <p>
          Where required (e.g., in the EEA/UK), we process personal data based on consent, contract performance,
          legitimate interests, legal obligations, or vital interests.
        </p>

        <h2 className="text-xl font-semibold">Sharing of Information</h2>
        <p>
          We may share information with service providers who help us operate our services (for example,
          hosting, analytics, customer support, and payment processing). We require them to protect your
          information and use it only for our purposes. We may also share information if required by law or to
          protect rights, safety, and security. In the event of a business transfer, your information may be
          transferred to a successor entity.
        </p>

        <h2 className="text-xl font-semibold">Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to provide our services, fulfill the purposes
          outlined here, and comply with legal obligations. When no longer needed, we securely delete or
          anonymize the data.
        </p>

        <h2 className="text-xl font-semibold">Your Choices</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>You can access, update, or delete certain account information from your profile/settings.</li>
          <li>You can opt out of marketing emails by using the unsubscribe link in those emails.</li>
          <li>You can control location services via your device settings.</li>
          <li>You may have additional rights depending on your location (e.g., access, rectification, deletion, portability, objection).</li>
        </ul>

        <h2 className="text-xl font-semibold">Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13, and we do not knowingly collect personal
          information from children. If we learn that a child has provided us with personal information, we will
          delete it.
        </p>

        <h2 className="text-xl font-semibold">International Transfers</h2>
        <p>
          We may process and store information in countries other than your own. Where applicable, we take steps
          to ensure appropriate safeguards are in place.
        </p>

        <h2 className="text-xl font-semibold">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy with a new
          effective date. Your continued use of the services means you accept the updated policy.
        </p>

        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, contact us at
          <a className="text-primary underline ml-1" href="mailto:privacy@stove.com.ng">privacy@stove.com.ng</a>.
        </p>
      </div>
    </div>
  );
}


