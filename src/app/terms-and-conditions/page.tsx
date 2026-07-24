import { Metadata } from "next";
import styles from "../privacy-policy/policy.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the Terms and Conditions of using the Code With Abhishek website.",
};

export default function TermsAndConditionsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms & Conditions</h1>
      <p className={styles.lastUpdated}>Last updated: {currentDate}</p>

      <div className={styles.section}>
        <p>Welcome to **Code With Abhishek**!</p>
        <p>
          These terms and conditions outline the rules and regulations for the use of
          Code With Abhishek's Website, located at **https://codewithabhishek.in**.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions.
          Do not continue to use Code With Abhishek if you do not agree to take all
          of the terms and conditions stated on this page.
        </p>
      </div>

      <div className={styles.section}>
        <h2>1. License & Intellectual Property</h2>
        <p>
          Unless otherwise stated, Code With Abhishek owns the intellectual property
          rights for all material on Code With Abhishek (including text, code blocks,
          graphics, and design templates). All intellectual property rights are reserved.
          You may access this from Code With Abhishek for your own personal use subjected
          to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className={styles.list}>
          <li>Republish material from Code With Abhishek without attribution</li>
          <li>Sell, rent or sub-license material from Code With Abhishek</li>
          <li>Reproduce, duplicate or copy material from Code With Abhishek</li>
          <li>Redistribute content from Code With Abhishek</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>2. User Comments</h2>
        <p>
          Parts of this website offer an opportunity for users to post and exchange
          opinions and information in certain areas of the website. Code With Abhishek
          does not filter, edit, publish or review Comments prior to their presence on
          the website. Comments do not reflect the views and opinions of Code With
          Abhishek, its agents and/or affiliates. Comments reflect the views and
          opinions of the person who posts their views and opinions.
        </p>
        <p>
          Code With Abhishek reserves the right to monitor all Comments and to remove
          any Comments which can be considered inappropriate, offensive or causes
          breach of these Terms and Conditions.
        </p>
      </div>

      <div className={styles.section}>
        <h2>3. Hyperlinking to our Content</h2>
        <p>
          The following organizations may link to our Website without prior written approval:
        </p>
        <ul className={styles.list}>
          <li>Search engines (Google, Bing, Yahoo etc.)</li>
          <li>News organizations</li>
          <li>Online directory distributors</li>
        </ul>
        <p>
          These organizations may link to our home page, to publications or to other
          Website information so long as the link: (a) is not in any way deceptive;
          (b) does not falsely imply sponsorship, endorsement or approval of the linking
          party and its products and/or services; and (c) fits within the context of the
          linking party's site.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Content Liability</h2>
        <p>
          We shall not be hold responsible for any content that appears on your Website.
          You agree to protect and defend us against all claims that is rising on your
          Website. No link(s) should appear on any Website that may be interpreted as
          libelous, obscene or criminal, or which infringes, otherwise violates, or
          advocates the infringement or other violation of, any third party rights.
        </p>
      </div>

      <div className={styles.section}>
        <h2>5. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and the use
          of this website.
        </p>
        <p>
          As long as the website and the information and services on the website are
          provided free of charge, we will not be liable for any loss or damage of any nature.
        </p>
      </div>
    </div>
  );
}
