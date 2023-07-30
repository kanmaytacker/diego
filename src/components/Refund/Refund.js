import React from 'react';
import * as styles from './Refund.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <h1>Cancellation Policy for Non-Refundable Transactions</h1>
      <div className={styles.section}>
        <p>
          Thank you for choosing our services/products. We value your interests
          and would like to inform you that all transactions made on our website
          are non-refundable. By completing a purchase, you acknowledge and
          accept that the transaction is non-refundable. Therefore, we kindly
          request that you carefully review your order before making a purchase.
        </p>
        <ol>
          <li>
            Non-Refundable Nature of Transactions: All transactions made on our
            website are considered non-refundable. This policy applies to all
            products, services, subscriptions, or any other offerings available
            for purchase on our platform.
          </li>
          <li>
            Cancellation and Refund Exclusions: Due to the non-refundable nature
            of our transactions, we do not provide refunds or accept
            cancellations for any reason, including but not limited to the
            following:
            <ol>
              <li>
                Change of Mind: Once a transaction is completed, we cannot
                accommodate cancellations or refunds based on a change of mind
                or personal preferences.
              </li>
              <li>
                Technical Issues: We strive to provide a seamless online
                experience, but in the event of any technical difficulties or
                errors on our website, we will make every effort to resolve the
                issue promptly. However, this does not entitle customers to
                cancel or request a refund for non-refundable transactions.
              </li>
              <li>
                Dissatisfaction with Product or Service: If you are dissatisfied
                with a product or service, we encourage you to reach out to our
                customer support team to address any concerns or issues.
                However, this dissatisfaction alone does not warrant a
                cancellation or refund for non-refundable transactions.
              </li>
            </ol>
          </li>
          <li>
            Exceptional Circumstances: In exceptional circumstances, we may
            consider cancellations or refunds on a case-by-case basis. These
            circumstances include:
            <ol>
              <li>
                Legally Mandated Refunds: If a refund is required by law or
                regulatory obligations, we will comply accordingly.
              </li>
              <li>
                Failure to Deliver: In the unlikely event that we are unable to
                deliver the purchased product or service as described, we may
                consider issuing a refund or an alternative solution.
              </li>
            </ol>
          </li>
          <li>
            you have any questions or concerns regarding a non-refundable
            transaction, we encourage you to contact our customer support team.
            Although refunds and cancellations are generally not permitted, our
            team will be available to assist you and address any issues you may
            have. Please note that this cancellation policy is applicable to all
            transactions made on our website, and by completing a purchase, you
            agree to abide by the terms outlined above. We reserve the right to
            modify or update this cancellation policy at any time without prior
            notice. It is your responsibility to review the policy periodically
            for any changes.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Policy;
