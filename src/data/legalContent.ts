export type LegalPageType = "privacy" | "terms" | "licence";

export interface LegalSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

interface LegalDocument {
  title: string;
  badge: string;
  description: string;
  seoDescription: string;
  path: string;
  sections: LegalSection[];
}

export const legalDocuments: Record<LegalPageType, LegalDocument> = {
  privacy: {
    title: "Privacy Policy",
    badge: "Privacy & data protection",
    description: "How TurboCart handles personal information in connection with this website, sales enquiries, demonstrations and product support in India.",
    seoDescription: "Read the TurboCart Privacy Policy for website enquiries, demonstrations, WhatsApp communications, support, data security and privacy rights in India.",
    path: "/privacy-policy",
    sections: [
      {
        title: "Who we are and the scope of this policy",
        paragraphs: [
          "This Privacy Policy applies when you visit myturbocart.in, request a demonstration, submit an enquiry, contact us through WhatsApp, email or telephone, or otherwise communicate with the TurboCart sales and support teams through a channel linked from this website.",
          "TurboCart website and sales enquiries are managed by FixLab, 2nd Floor, Federal Bank Building, Clappana P.O., Kollam, Kerala, India. Product development and technical support are provided by SYSGO LLP, Opposite Technopark Phase 1 Rear Gate, Karyavattom, Trivandrum, Kerala, India. The entity identified in your quotation, order form or agreement is responsible for the processing connected with that customer relationship, subject to the roles stated in the applicable document.",
        ],
      },
      {
        title: "Applicable Indian privacy framework",
        paragraphs: [
          "We process personal information in accordance with laws applicable to our operations in India, including the Information Technology Act, 2000 and applicable rules, and the Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025 as their respective provisions come into force and apply to the relevant processing.",
          "Where a contract, sector-specific rule or other Indian law imposes an additional requirement, that requirement will apply to the extent relevant. This policy is intended to explain our practices and does not limit any non-waivable right available under applicable law.",
        ],
      },
      {
        title: "Personal information we collect",
        paragraphs: ["We collect information that you provide and limited technical information reasonably required to operate and secure the website and related communications."],
        items: [
          "Identity and contact details, such as your name, business name, telephone number, email address and job role.",
          "Business requirements, such as business type, preferred TurboCart edition, store and billing-counter count, deployment needs and customization requests.",
          "Enquiry and support content, including messages, call notes, screenshots, documents or diagnostic information you choose to provide.",
          "Commercial and service records, such as quotations, accepted orders, invoices, licence details, installation details and support history.",
          "Technical and security information, such as IP address, browser and device type, requested pages, date and time, referring page, error records and security logs, where collected by us or our hosting provider.",
        ],
      },
      {
        title: "How we collect information",
        paragraphs: [
          "We collect information directly from you when you complete a form, open and send a pre-filled WhatsApp message, email or call us, request a quotation, attend a demonstration, place an order or ask for installation or support.",
          "The website prepares form information as a WhatsApp message addressed to the published support number. You can review, edit or cancel that message before sending it. Information is not delivered to us through WhatsApp until you choose to send it.",
        ],
      },
      {
        title: "Why we use personal information",
        paragraphs: ["We use personal information only for lawful purposes connected with TurboCart and our business relationship with you."],
        items: [
          "Responding to enquiries and arranging product demonstrations.",
          "Understanding requirements and preparing quotations, orders, implementation plans and customization proposals.",
          "Providing installation, configuration, licensing, training, maintenance and technical support where agreed.",
          "Managing accounts, payments, taxes, renewals, customer communications and business records.",
          "Operating, protecting, troubleshooting and improving the website, software and related services.",
          "Detecting misuse, maintaining security, resolving disputes and complying with legal, regulatory, accounting and law-enforcement requirements.",
        ],
      },
      {
        title: "Consent and other permitted processing",
        paragraphs: [
          "Where consent is required, we request it through a clear notice or rely on the affirmative action by which you voluntarily provide information for a stated purpose. You may withdraw consent for future consent-based processing by contacting us. Withdrawal will not affect processing already completed or information that may lawfully be retained for another purpose.",
          "We may also process information where permitted for responding to your request, taking steps toward or performing a contract, complying with law, addressing a medical emergency or disaster, protecting systems and legal rights, or another use recognized by applicable Indian law.",
        ],
      },
      {
        title: "Sharing and service providers",
        paragraphs: ["We do not sell personal information. We disclose it only where reasonably necessary for a purpose described in this policy or where law permits or requires disclosure."],
        items: [
          "Between FixLab and SYSGO LLP for sales handover, demonstrations, quotations, implementation, licensing, customization and support.",
          "To hosting, infrastructure, communication, security, accounting, payment or professional-service providers working for us under appropriate obligations.",
          "To WhatsApp or another platform when you choose to communicate through that service, which will also process information under its own terms and privacy policy.",
          "To government, regulatory, judicial or law-enforcement authorities in response to applicable law or valid legal process.",
          "To a genuine successor or participant in a merger, restructuring, acquisition or transfer of the relevant business, subject to lawful safeguards.",
        ],
      },
      {
        title: "Cookies, external services and processing locations",
        paragraphs: [
          "The website may use essential browser storage or similar technologies required for navigation, security, preferences and form operation. We will update this policy and implement any required consent mechanism before introducing non-essential advertising or analytics technologies that require consent.",
          "The site may load resources from or link to third-party services, including Google Fonts and WhatsApp. Those providers may receive technical information when your browser connects to them. Service providers may process information outside Kerala or India where permitted by applicable law and subject to required safeguards or restrictions.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "We retain personal information only for as long as it is reasonably required for the stated purpose, the customer or support relationship, security, dispute resolution, backup cycles, and applicable legal, tax and accounting obligations. Different records may therefore have different retention periods.",
          "When information is no longer required, we take reasonable steps to erase, anonymize or securely archive it, subject to lawful retention duties, technical limitations and backup schedules.",
        ],
      },
      {
        title: "Security and incident response",
        paragraphs: [
          "We use reasonable administrative, technical and organizational safeguards appropriate to the nature of the information, including access controls, supported systems, backup practices and security monitoring where relevant. No internet, messaging or storage system can be guaranteed to be completely secure.",
          "If a personal-data breach occurs, we will investigate, contain and document it and provide notices to affected individuals or authorities where and when required by applicable law. Do not send passwords, payment-card details, confidential database exports or other highly sensitive information through an ordinary form or unsolicited WhatsApp message.",
        ],
      },
      {
        title: "Your choices, rights and grievances",
        paragraphs: ["Subject to applicable law and reasonable identity verification, you may request information about our processing, correction or updating of inaccurate information, erasure where retention is no longer lawful or necessary, withdrawal of consent, or grievance resolution."],
        items: [
          "For website, sales or commercial privacy matters, contact FixLab at info@fixlab.co.in or +91 97782 72227.",
          "For product and technical-support privacy matters, contact SYSGO LLP at support@sysgo.in or +91 80758 15183.",
          "Describe the relevant interaction and information so that we can locate and assess your request.",
          "We may ask for information reasonably necessary to verify your identity or authority before acting on a request.",
        ],
      },
      {
        title: "Children and business use",
        paragraphs: [
          "TurboCart is intended for businesses and this website is not directed to children. Do not submit a child's personal information unless you are legally authorized and the information is necessary for an agreed purpose. Where Indian law requires verifiable parental consent or restricts processing concerning children, we will apply those requirements as and when applicable.",
        ],
      },
      {
        title: "Changes, governing law and jurisdiction",
        paragraphs: [
          "We may update this policy to reflect changes in law, technology, providers or our services. The revised version will be posted with an updated effective date, and material changes will be communicated where required.",
          "This policy is governed by the laws of India. Subject to mandatory rights and any agreed dispute-resolution process, courts of competent jurisdiction in Kerala, India will have jurisdiction.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    badge: "Website terms",
    description: "The terms governing access to the TurboCart website, product information, demonstrations, enquiries and linked services in India.",
    seoDescription: "Read the TurboCart Terms of Use covering website access, electronic enquiries, demonstrations, acceptable use, intellectual property and Kerala jurisdiction.",
    path: "/terms",
    sections: [
      {
        title: "Acceptance and scope",
        paragraphs: [
          "These Terms of Use govern your access to and use of myturbocart.in, including its public content, forms, demonstrations and links. By accessing or using the website, you agree to these Terms. If you do not agree, do not use the website.",
          "Electronic records and communications relating to the website may be recognized under the Information Technology Act, 2000 and other applicable Indian laws. These Terms do not replace a signed quotation, accepted order, implementation agreement, support agreement or software licence. An executed commercial document controls to the extent of a conflict concerning a purchased product or service.",
        ],
      },
      {
        title: "Operators and business roles",
        paragraphs: [
          "TurboCart website and sales enquiries are managed by FixLab in Kollam, Kerala. Product development and technical support are provided by SYSGO LLP in Trivandrum, Kerala. The contracting party, product, scope, price, taxes, milestones, warranty and support commitments for a purchase will be identified in the applicable quotation, order or agreement.",
        ],
      },
      {
        title: "Eligibility and authority",
        paragraphs: [
          "You must be competent to contract under applicable Indian law. If you use the website for a company, partnership, store or other organization, you represent that you are authorized to act for it and that information you submit is accurate and lawful to the best of your knowledge.",
        ],
      },
      {
        title: "Website information and demonstrations",
        paragraphs: [
          "Website content describes TurboCart's general capabilities and intended uses. Screenshots, animations, dashboards, invoices, charts, values and business records identified as demonstrations are illustrative and do not represent a customer's live data.",
          "Features, interfaces, deployment options and availability may change. A feature is contractually included only when stated in an accepted quotation, order, statement of work or licence. You must confirm important hardware, integration, tax, GST, accounting and workflow requirements before purchase or production use.",
        ],
      },
      {
        title: "Enquiries and electronic communications",
        paragraphs: [
          "Submitting a form, WhatsApp message or email requests contact and does not itself create a purchase, licence, agency, employment, partnership or support contract. A commercial contract is formed only through an accepted quotation, order, signed agreement or other unambiguous confirmation by an authorized party.",
          "You consent to receive replies concerning your enquiry through the contact details and channel you provide. You are responsible for reviewing any pre-filled WhatsApp message before sending it.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: ["You may use the website only for lawful evaluation, communication and business purposes."],
        items: [
          "Do not attempt unauthorized access to the website, accounts, servers, source code, databases or connected systems.",
          "Do not introduce malware, send abusive automated requests, scrape at a disruptive scale, bypass security controls or interfere with availability.",
          "Do not impersonate another person, submit misleading information, misuse demonstrations or infringe privacy, intellectual-property or other legal rights.",
          "Do not copy, frame, republish, resell or commercially exploit substantial website content without prior written permission.",
          "Do not use the website for conduct prohibited by the Information Technology Act, 2000 or any other applicable Indian law.",
        ],
      },
      {
        title: "Products, customization and commercial terms",
        paragraphs: [
          "You may request new fields, reports, workflows, integrations or other custom features. A request is not a delivery commitment. Custom work begins only after technical assessment and written agreement on scope, assumptions, dependencies, price, delivery approach and acceptance criteria.",
          "Product pricing, taxes, payment schedules, installation, travel, training, renewals, service levels and support are governed by the applicable commercial document. Nothing on the public website constitutes an irrevocable offer or guarantee of availability.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The TurboCart name, software, source code, website design, text, graphics, interfaces, demonstrations, documentation and related materials are owned by or licensed to their respective provider and are protected by applicable Indian intellectual-property laws.",
          "You receive a limited, revocable permission to access the public website for evaluation and legitimate business communication. Website access does not grant ownership, source-code rights, a trademark licence or a software licence.",
        ],
      },
      {
        title: "Privacy and third-party services",
        paragraphs: [
          "Personal information is handled according to the TurboCart Privacy Policy and applicable Indian law. The website may link to WhatsApp, login services, FixLab, SYSGO LLP or other external services. External services are governed by their own terms, privacy practices and availability, and you should review them before use.",
        ],
      },
      {
        title: "Disclaimers",
        paragraphs: [
          "The public website is provided on an 'as available' basis for general product information. To the maximum extent permitted by law, we do not warrant that every page will always be uninterrupted, error-free, current or suitable for a particular business requirement.",
          "Nothing on the website is legal, tax, GST, accounting or regulatory advice. You remain responsible for validating your configuration, billing, tax, record-keeping, industry and compliance requirements with qualified advisers before relying on software output.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by applicable law, FixLab, SYSGO LLP and their personnel will not be liable for indirect, incidental, special, punitive or consequential loss arising solely from access to or inability to access the public website, including loss of anticipated profit, goodwill or opportunity.",
          "Nothing in these Terms excludes liability or a statutory remedy that cannot lawfully be excluded. Liability concerning licensed software, implementation, customization or paid support is governed by the applicable customer agreement and mandatory Indian law.",
        ],
      },
      {
        title: "Suspension, changes and availability",
        paragraphs: [
          "We may update, suspend or withdraw website content and may restrict access where reasonably necessary for maintenance, security, misuse prevention or legal compliance. We may revise these Terms by posting an updated version and effective date. Changes do not retrospectively alter an executed customer agreement unless that agreement permits it.",
        ],
      },
      {
        title: "Governing law, consumer rights and Kerala jurisdiction",
        paragraphs: [
          "These Terms are governed by the laws of India, including applicable principles of Indian contract, information-technology and consumer law. Nothing in these Terms limits a mandatory right or forum available to a consumer under applicable law.",
          "Subject to mandatory rights and any dispute-resolution process in an applicable agreement, courts of competent jurisdiction in Kerala, India will have jurisdiction over disputes connected with the website or these Terms.",
        ],
      },
      {
        title: "General terms and contact",
        paragraphs: [
          "If a provision is held invalid or unenforceable, the remaining provisions continue to apply. A failure to enforce a provision is not a waiver. These Terms and any applicable commercial documents constitute the relevant agreement for their respective subject matter.",
          "For website, sales or commercial questions, contact FixLab at info@fixlab.co.in or +91 97782 72227. For product and technical support, contact SYSGO LLP at support@sysgo.in or +91 80758 15183.",
        ],
      },
    ],
  },
  licence: {
    title: "Software Licence Terms",
    badge: "TurboCart software licence",
    description: "The standard terms for licensing and using TurboCart software in India, subject to the customer's accepted order and agreement.",
    seoDescription: "Review the TurboCart Software Licence Terms covering authorized use, restrictions, customer data, support, liability and Kerala jurisdiction.",
    path: "/licence",
    sections: [
      {
        title: "Agreement and electronic acceptance",
        paragraphs: [
          "These Software Licence Terms apply when a customer installs, accesses or uses TurboCart Windows, Cloud, Mobile, documentation, updates or related components supplied under an accepted order. Installation, access, use, an electronic acceptance or another affirmative acceptance method may create a binding agreement to the extent recognized by applicable Indian law.",
          "If a separately signed software agreement applies, it prevails. Otherwise, documents apply in this order: the accepted order or quotation, these Licence Terms, and supporting documentation. The commercial document identifies the customer, provider, licensed edition, locations, users or terminals, licence period, fees and included services.",
        ],
      },
      {
        title: "Providers and applicable law",
        paragraphs: [
          "FixLab manages TurboCart sales and commercial enquiries. SYSGO LLP develops and technically supports the product. The provider legally responsible for a particular licence, implementation or service will be identified in the accepted commercial document.",
          "The licence relationship is governed by applicable Indian law, including the Indian Contract Act, 1872, the Information Technology Act, 2000 and applicable data-protection, consumer, tax and intellectual-property requirements according to their subject matter and application.",
        ],
      },
      {
        title: "Licence grant",
        paragraphs: [
          "Subject to full payment and continuing compliance, the relevant provider grants the customer a limited, non-exclusive, non-transferable and non-sublicensable right to install, access and use the licensed TurboCart product for the customer's internal business operations during the agreed term and within the agreed deployment scope.",
          "The software is licensed, not sold. Rights not expressly granted are reserved. Cloud and mobile access may depend on an active subscription, authorized credentials, compatible devices, supported software and internet connectivity.",
        ],
      },
      {
        title: "Authorized deployment and users",
        paragraphs: [
          "The customer may use TurboCart only for the legal entities, stores, servers, billing terminals, users, databases or other limits stated in the order. Additional locations, terminals, users or environments may require written approval and additional fees.",
          "The customer must keep credentials confidential, limit access to authorized personnel and promptly notify support of suspected compromise or unauthorized use. Individual user accounts should be used where accountability is required.",
        ],
      },
      {
        title: "Restrictions",
        paragraphs: ["Except to the limited extent that applicable law expressly prevents a restriction, the customer must not:"],
        items: [
          "Copy, distribute, sell, rent, lease, sublicense, publish or make TurboCart available to an unauthorized third party.",
          "Reverse engineer, decompile, disassemble, attempt to derive source code, or bypass licence, authentication or security controls.",
          "Remove or alter copyright, trademark, confidentiality or proprietary notices.",
          "Use the software to provide an unauthorized hosted, bureau, time-sharing or competing service.",
          "Use TurboCart unlawfully, transmit malicious code, interfere with systems or process information without required authority, notices and permissions.",
          "Make unsupported changes to the database, executable or configuration that may compromise security, integrity, supportability or upgrade compatibility.",
        ],
      },
      {
        title: "Ownership, feedback and customization",
        paragraphs: [
          "TurboCart software, source code, architecture, standard features, documentation, branding, updates and reusable improvements remain the intellectual property of their respective owner or licensor. The customer retains ownership of its business data and pre-existing materials.",
          "Customization starts only after written agreement on scope, dependencies, fees, delivery and acceptance criteria. Ownership and permitted use of paid custom development must be stated in the applicable statement of work. Unless otherwise agreed, the provider may retain and reuse general know-how, platform components and improvements that do not disclose the customer's confidential information or transfer its pre-existing intellectual property.",
        ],
      },
      {
        title: "Customer data and data-protection roles",
        paragraphs: [
          "The customer controls and is responsible for the accuracy, legality and quality of information entered into TurboCart, including product, pricing, tax, supplier, customer, employee and transaction information. The customer must provide required notices and obtain lawful authority or consent for personal data it processes through the software.",
          "Unless an agreement states otherwise, the customer determines the purposes and means of processing its operational personal data, while the provider processes customer data only as needed to deliver agreed hosting, implementation or support. Each party must meet the obligations applicable to its role under Indian data-protection law as and when those obligations apply.",
        ],
      },
      {
        title: "Configuration and customer responsibilities",
        paragraphs: [
          "The customer must review opening balances, product data, tax and GST settings, invoice formats, permissions, reports, integrations and imported information before production use. TurboCart output depends on information and rules configured by authorized users and is not a substitute for professional tax, accounting or legal advice.",
          "The customer is responsible for suitable devices, supported operating systems, local networks, power protection, physical security, malware protection and staff access controls unless an accepted service scope expressly assigns a responsibility elsewhere.",
        ],
      },
      {
        title: "Backups, security and incidents",
        paragraphs: [
          "For locally deployed TurboCart installations, the customer must maintain a protected and tested backup routine unless a written service scope assigns that duty elsewhere. The availability of a backup does not guarantee successful recovery; multiple protected copies and periodic restoration tests are recommended.",
          "Each party must use reasonable safeguards for systems and information under its control and promptly cooperate regarding a relevant security incident. Support should be contacted before database transfers, server replacement, restoration or material infrastructure changes.",
        ],
      },
      {
        title: "Updates, maintenance and support",
        paragraphs: [
          "Updates, maintenance, support hours, response targets and included services are provided only as stated in the accepted order or support plan. Updates may correct defects, improve security, change interfaces, or add, modify or remove functionality.",
          "The customer must follow supported update procedures and reasonable support instructions. Support may be limited where unauthorized changes, unsupported hardware or software, customer misuse or a third-party failure causes the issue.",
        ],
      },
      {
        title: "Third-party components and integrations",
        paragraphs: [
          "TurboCart may interact with operating systems, devices, messaging services, payment systems, databases or other third-party products. Third-party products may have separate licences, fees, privacy terms and availability conditions. Compatibility must be confirmed for the agreed deployment, and third-party changes may require additional work or affect functionality.",
        ],
      },
      {
        title: "Fees, GST, renewal and verification",
        paragraphs: [
          "Licence, subscription, implementation, customization, travel, hardware and support fees are specified in the commercial documents. Fees are exclusive of GST and other applicable taxes unless expressly stated otherwise and must be paid according to the agreed schedule.",
          "Subscription and term licences expire unless renewed. Continued use after expiry is unauthorized except for a transition or data-export period expressly agreed in writing. The provider may reasonably verify licence scope without unnecessary access to customer content and subject to applicable confidentiality and data-protection obligations.",
        ],
      },
      {
        title: "Limited warranty and disclaimers",
        paragraphs: [
          "Any software warranty and remedy are limited to those stated in the accepted order or agreement. Customization is assessed against documented acceptance criteria rather than an unstated expectation.",
          "To the maximum extent permitted by law, TurboCart is not warranted to be uninterrupted, free from every defect, compatible with every device or automatically compliant with every legal, tax, GST or industry requirement. The customer must verify its own compliance obligations and promptly report reproducible issues through the agreed support channel.",
        ],
      },
      {
        title: "Liability",
        paragraphs: [
          "Liability for licensed software and paid services is governed by the accepted agreement. Where no signed agreement states otherwise, and to the maximum extent permitted by law, neither provider is liable for indirect, incidental, special, punitive or consequential loss, including loss of profit, revenue, goodwill or anticipated savings.",
          "Nothing excludes liability or a statutory remedy that cannot lawfully be excluded. The customer must take reasonable steps to mitigate loss, including maintaining backups, reviewing configuration, controlling access and using supported operating environments.",
        ],
      },
      {
        title: "Suspension, termination and customer data",
        paragraphs: [
          "Access may be suspended for material non-payment, a security risk, unlawful use or a serious licence breach, subject to any notice and cure requirement in the agreement or applicable law. The licence ends on expiry or termination according to the governing agreement.",
          "On termination, the customer must stop using the software and remove unauthorized copies. Any agreed data-export or transition assistance, format, period and fee will be governed by the applicable commercial document. Ownership, confidentiality, accrued payment, disclaimers, liability and dispute provisions survive where their nature requires.",
        ],
      },
      {
        title: "Force majeure",
        paragraphs: [
          "A party is not responsible for delay or failure caused by an event beyond its reasonable control, such as natural disaster, widespread network or utility failure, government action, civil disturbance or third-party infrastructure outage, provided it takes reasonable steps to reduce the effect and resumes performance when reasonably possible. Payment obligations already due are not excused solely by such an event.",
        ],
      },
      {
        title: "Governing law, mandatory rights and Kerala jurisdiction",
        paragraphs: [
          "These Licence Terms are governed by the laws of India. Nothing in them limits a mandatory statutory right or remedy that applies to the customer. Any dispute-resolution method stated in a signed agreement will apply according to its terms.",
          "Subject to mandatory rights and an agreed dispute-resolution process, courts of competent jurisdiction in Kerala, India will have jurisdiction over disputes arising from the licence or related services.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For licensing, quotations and customization, contact FixLab at info@fixlab.co.in or +91 97782 72227. For installation and technical support, contact SYSGO LLP at support@sysgo.in or +91 80758 15183.",
        ],
      },
    ],
  },
};
