import { ContactBlock, PolicyPage } from "@/components/layout/PolicyPage";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Cancellation & Refund Policy" };

export default function CancellationRefundPolicyPage() {
  const c = siteConfig;
  return (
    <PolicyPage title="Cancellation & Refund Policy">
      <section>
        <p>
          Please read this policy carefully before placing an order. By completing a purchase on this website, you agree
          to the terms below.
        </p>
      </section>

      <section>
        <h2>No cancellations after confirmation</h2>
        <ul>
          <li>An order is confirmed as soon as your payment is successful and you receive an order confirmation.</li>
          <li>Once an order is confirmed, it cannot be cancelled or modified (including changes to size, quantity or delivery address).</li>
          <li>Please check your size, product details and shipping address carefully before making payment.</li>
        </ul>
      </section>

      <section>
        <h2>No returns</h2>
        <ul>
          <li>We do not accept returns, and we do not offer refunds on confirmed or delivered orders.</li>
          <li>We do not accept returns or exchanges for dislike, change of mind, incorrect size selection or personal preference.</li>
          <li>Our team makes sure that only premium quality products are shipped, and the product delivered will be exactly as ordered.</li>
          <li>We try to show accurate product images and videos on our website. However, slight variations in colour may occur due to screen lighting and display settings. These are not considered defects.</li>
        </ul>
      </section>

      <section>
        <h2>Exchange policy</h2>
        <p>We offer exchanges only in the following cases:</p>
        <ul>
          <li>the product delivered is different from the order placed, or</li>
          <li>the product has a genuine manufacturing defect.</li>
        </ul>
        <p>
          Claims must be reported to us within {c.damageReportHours} hours of delivery, together with a complete unboxing
          video as proof. Only then can we process your exchange request.
        </p>
      </section>

      <section>
        <h2>Unboxing video guidelines</h2>
        <ol>
          <li>Start recording before opening the package.</li>
          <li>Clearly capture the shipping label and tracking details on the parcel.</li>
          <li>Show the package from all sides (360°), so that it is clearly sealed and untampered.</li>
          <li>Begin unboxing on camera in one continuous video, with no cuts, edits or pauses.</li>
          <li>Inspect the product thoroughly in the video. Any defect must be clearly visible in the recording.</li>
        </ol>
        <p>
          If the parcel is damaged or tampered with, please do not accept it. Record a video and share it with us
          immediately.
        </p>
      </section>

      <section>
        <h2>Orders we cannot fulfil</h2>
        <p>
          In the rare case that we are unable to ship your order (for example, if an item goes out of stock after payment),
          we will cancel the order and issue a full refund, including any shipping charges. This is the only case in which an order is refunded.
        </p>
      </section>

      <section>
        <h2>Failed or duplicate payments</h2>
        <p>
          If money was debited from your account but your order was not confirmed, or you were charged more than once for
          the same order, the extra amount is refunded automatically to your original payment method.
        </p>
      </section>

      <section>
        <h2>Refund method and timeline</h2>
        <p>
          Refunds (for orders we cannot fulfil, and failed or duplicate payments) are issued to the original payment method used at checkout and usually reflect in your account
          within {c.refundProcessingDays}, depending on your bank or payment provider.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <ContactBlock />
      </section>
    </PolicyPage>
  );
}
