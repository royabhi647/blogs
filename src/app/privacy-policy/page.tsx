import { Metadata } from "next";
import styles from "./policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Code With Abhishek, explaining how we collect, protect, and use user information.",
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: {currentDate}</p>

      <div className={styles.section}>
        <p>
          At **Code With Abhishek**, accessible from **https://codewithabhishek.in**,
          one of our main priorities is the privacy of our visitors. This Privacy
          Policy document contains types of information that is collected and recorded
          by Code With Abhishek and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy
          Policy, do not hesitate to contact us.
        </p>
      </div>

      <div className={styles.section}>
        <h2>1. Information We Collect</h2>
        <p>
          We only collect personal information that you voluntarily provide to us when
          you subscribe to our newsletter, submit a message via our contact form, or
          comment on our blog posts. This information may include:
        </p>
        <ul className={styles.list}>
          <li>Your Name</li>
          <li>Your Email Address</li>
          <li>Any content or text you provide in your message or comment</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className={styles.list}>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our partners,
            to send you newsletter updates and other information relating to the website
          </li>
          <li>Send you emails if you fill out the contact form</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>3. Log Files</h2>
        <p>
          Code With Abhishek follows a standard procedure of using log files. These files
          log visitors when they visit websites. The information collected by log files
          includes internet protocol (IP) addresses, browser type, Internet Service
          Provider (ISP), date and time stamp, referring/exit pages, and possibly the
          number of clicks. These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and gathering
          demographic information.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known
          as DART cookies, to serve ads to our site visitors based upon their visit to
          www.website.com and other sites on the internet. However, visitors may choose
          to decline the use of DART cookies by visiting the Google ad and content
          network Privacy Policy at the following URL:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/ads
          </a>
        </p>
      </div>

      <div className={styles.section}>
        <h2>5. Advertising Partners Privacy Policies</h2>
        <p>
          Third-party ad servers or ad networks use technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective advertisements
          and links that appear on Code With Abhishek, which are sent directly to
          users' browsers. They automatically receive your IP address when this occurs.
          These technologies are used to measure the effectiveness of their advertising
          campaigns and/or to personalize the advertising content that you see on
          websites that you visit.
        </p>
        <p>
          Note that Code With Abhishek has no access to or control over these cookies
          that are used by third-party advertisers.
        </p>
      </div>

      <div className={styles.section}>
        <h2>6. Third Party Privacy Policies</h2>
        <p>
          Code With Abhishek's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed information.
          It may include their practices and instructions about how to opt-out of
          certain options.
        </p>
      </div>

      <div className={styles.section}>
        <h2>7. Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to
          its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
