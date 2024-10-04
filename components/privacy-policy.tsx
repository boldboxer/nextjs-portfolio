import ReactMarkdown from 'react-markdown'

export default function PrivacyPolicyPage() {  
    const markdownContent = `
    
## Introduction

This Privacy Policy outlines how [Your Company Name] collects, uses, and protects your personal information. By using our website or services, you consent to the practices described in this policy.

## Information We Collect   

We may collect the following information from you:

* **Email address:** This is required if you choose to contact us or subscribe to our newsletter.

## How We Use Your Information

We use your email address to:

* Respond to your inquiries or requests
* Send you information or updates related to our products or services
* Provide customer support

**We will not:**

* Sell or rent your email address to third parties
* Use your email address for spam or unsolicited advertising purposes

## Your Rights

You have the right to:

* Access the personal information we hold about you
* Request that your personal information be corrected, updated, or deleted
* Object to the processing of your personal information

## Data Security

We implement reasonable security measures to protect your personal information from unauthorized   
 access, disclosure, alteration, or destruction. However, no method of transmission   
 over the internet or electronic storage is completely secure.

## Changes to This Policy

We may update this Privacy Policy from time to   
 time. Any changes will be posted on this page.

## Contact Us

If you have any questions about this Privacy Policy or our   
 practices, please contact us at [info@madmane.online](mailto:info@madmane.online) .
 
    `
    return (
      <section className="pb-24 pt-40">
        <div className="container max-w-3xl">
          <h1 className="title">Privacy Policy</h1>
          <div className="prose">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      </section>
    )
}







// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

// const privacypolicypath = path.join(process.cwd(), 'content', 'privacy-policy');

// export async function getPrivacyPolicyContent() {
//     const fileContent = fs.readFileSync(privacypolicypath, 'utf8');
//     const { content } = matter(fileContent);
//   return content;
// }