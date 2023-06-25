import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <p>
          At Gurufa Games ("Platform", "we", "us", or "our"), we take your
          privacy seriously and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our Platform,
          which hosts competitions for skills like football, badminton, skating,
          and other activities in India. By using the Platform, you agree to the
          collection and use of your personal information in accordance with
          this Privacy Policy.
        </p>
        <h3>1. INFORMATION WE COLLECT</h3>
        <h5>1.1 Personal Information</h5>
        <br />
        <p>
          When you register for an account on the Platform, we may collect
          personal information, such as:
          <ol>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth</li>
            <li>Gender</li>
            <li>Mailing address</li>
            <li>Photographs</li>
            <li>Team or individual affiliation</li>
          </ol>
        </p>
        <h5>1.2 Usage Information</h5>
        <br />
        <p>
          We may automatically collect information about your use of the
          Platform, such as:
          <ol>
            <li>IP address</li>
            <li>
              Device information, including device type, operating system, and
              browser type
            </li>
            <li>
              Log information, such as your search queries, page views, and
              access times
            </li>
            <li>
              Location information, derived from your IP address or GPS (if
              enabled)
            </li>
          </ol>
        </p>
        <h5>1.3 Cookies and Other Tracking Technologies </h5>
        <br />
        <p>
          We use cookies and similar technologies to collect information about
          your use of the Platform and to provide personalized experiences. You
          can control the use of cookies through your browser settings.
        </p>
      </div>

      <div className={styles.section}>
        <h3>2. HOW WE USE YOUR INFORMATION</h3>

        <p>
          We may use your information for various purposes, including to:
          <ol>
            <li>Provide and maintain the Platform and its services</li>
            <li>Register and manage your account</li>
            <li>Administer and organize competitions</li>
            <li>Send you updates, promotions, and marketing materials</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>
              Analyze and improve the Platform's performance and user experience
            </li>
            <li>
              Comply with legal requirements and prevent fraud or other
              malicious activity
            </li>
          </ol>
        </p>
      </div>

      <div className={styles.section}>
        <h3>3. HOW WE SHARE YOUR INFORMATION</h3>
        <p>
          We may share your information with third parties in the following
          situations:
          <ol>
            <li>With your consent or at your direction</li>
            <li>
              With competition organizers, sponsors, or other participants, as
              necessary for the administration and promotion of competitions
            </li>
            <li>
              With our service providers, who process your information on our
              behalf and are contractually obligated to protect your information
            </li>
            <li>
              In response to a legal request, such as a subpoena or court order
            </li>
            <li>
              In connection with a merger, acquisition, or sale of assets,
              subject to the receiving party's adherence to a comparable privacy
              policy
            </li>
            <li>
              To protect the rights, property, or safety of the Platform, its
              users, or the public
            </li>
          </ol>
        </p>
      </div>
      <div className={styles.section}>
        <h3>4. YOUR RIGHTS AND CHOICES</h3>
        <h5>4.1 Access, Correction, and Deletion</h5>
        <br />
        <p>
          You have the right to access, correct, or delete your personal
          information held by the Platform. To exercise these rights, please
          contact us at contact@gurufa.com.
        </p>
        <h5>4.2 Communications Preferences</h5>
        <br />
        <p>
          You may opt out of receiving promotional emails from the Platform by
          following the unsubscribe instructions in those emails. Please note
          that you may still receive service-related communications, such as
          account updates or competition notifications.
        </p>
      </div>
      <div className={styles.section}>
        <h3>5. SECURITY</h3>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction. However,
          no method of transmission or storage is 100% secure, and we cannot
          guarantee the absolute security of your information.
        </p>
      </div>
      <div className={styles.section}>
        <h3>6. CHILDREN'S PRIVACY</h3>
        <p>
          The Platform is not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under
          the age of 13. If we become aware that we have collected personal
          information from a child under the age of 13, we will take steps to
          delete such information.
        </p>
      </div>
      <div className={styles.section}>
        <h3>7. THIRD-PARTY LINKS</h3>
        <p>
          The Platform may contain links to third-party websites, services, or
          applications that are not affiliated with or controlled by us. We are
          not responsible for the privacy practices or the content of these
          third-party websites, services, or applications. We encourage you to
          review the privacy policies of any third-party websites, services, or
          applications that you access through the Platform.
        </p>
      </div>
      <div className={styles.section}>
        <h3>8. INTERNATIONAL DATA TRANSFERS</h3>
        <p>
          Although the Platform primarily operates in India, we may transfer
          your personal information to countries outside of India for
          processing, storage, or other purposes. By using the Platform, you
          consent to the transfer of your personal information to countries that
          may have different data protection laws than those in your country of
          residence.
        </p>
      </div>
      <div className={styles.section}>
        <h3>9. CHANGES TO THIS PRIVACY POLICY</h3>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time, in our sole discretion. Any changes to this Privacy Policy will
          be posted on the Platform, and the "Last Updated" date at the top of
          this Privacy Policy will be revised. Your continued use of the
          Platform following the posting of any changes constitutes acceptance
          of those changes. It is your responsibility to review this Privacy
          Policy regularly to stay informed about any updates or modifications.
        </p>
      </div>
      <div className={styles.section}>
        <h3>10. CONTACT US</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at:
          <br />
          <br />
          Gurufa Games <br />
          Block CG, No.34, Sector 2, Salt Lake City, Kolkata - 700091, West
          Bengal <br />
          Email: contact@gurufa.com
          <br />
          <br />
          By using the Platform, you represent and warrant that you have read
          and understood, and agree to be bound by, this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Policy;
