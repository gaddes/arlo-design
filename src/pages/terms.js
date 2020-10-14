import React from 'react';
import styled from 'styled-components';

import { SEO, Section } from '../components';

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  
  margin: 1rem;

  h2, h3 {
    margin: 1.5rem 0 1rem 0;
    text-align: left; // Override 'center' from <Section />
  }
`;

const Paragraph = styled.div`
  margin: 1rem 0;
`;

export default function Terms() {
  return (
    <Div>
      <SEO title="Ts & Cs" />
      <Section
        title="Terms and Conditions"
        style={{ flex: '0 1 900px' }}
      >
        <Paragraph>This is a generic contract. It is very similar to the final version, which will be specific to your requirements and issued to you after our initial consultation.</Paragraph>
        
        <h2>The contract</h2>
        <Paragraph>Between Arlo Design</Paragraph>
        <Paragraph>And our new customer</Paragraph>
          
        <h3>Summary</h3>
        <Paragraph>We'll always do our best to fulfil your needs and meet your expectations, but it's important to have things written down so that we both know what's what, who should do what and when, and what will happen if something goes wrong. In this contract you won't find any complicated legal terms or long passages of unreadable text. We've no desire to trick you into signing something that you might later regret. What we do want is what's best for both parties, now and in the future.</Paragraph>
        <Paragraph>So in short;</Paragraph>
        <Paragraph>You, the customer (“You”) are hiring us (Arlo Design) (“We or Us”) to:</Paragraph>
        <ul>
          <li>Design and develop a web site</li>
        </ul>
        <Paragraph>For a price to be confirmed after our initial consultation.</Paragraph>
        <Paragraph>Of course it's a little more complicated, but we'll get to that.</Paragraph>
        
        <h3>What do both parties agree to?</h3>
        <Paragraph>You: You have the authority to enter into this contract on behalf of yourself, your company or your organisation. You'll give us the assets and information we tell you we need to complete the project. You'll do this when we ask and provide it in the formats we ask for. You'll review our work, provide feedback and approval in a timely manner too. Deadlines work two ways, so you'll also be bound by dates we set together. You also agree to stick to the payment schedule set out at the end of this contract.</Paragraph>
        <Paragraph>Us: We have the experience and ability to do everything we've agreed with you and we'll do it all in a professional and timely manner. We'll endeavour to meet every deadline that's set and on top of that we'll maintain the confidentiality of everything you give us.</Paragraph>

        <h2>Getting down to the nitty gritty</h2>
        
        <h3>Design</h3>
        <Paragraph>We create designs that adapt to the capabilities of many devices and screen sizes. We create them iteratively and use predominantly HTML and CSS so we won't waste time mocking up every template as a static visual. We may use visuals to indicate a creative direction (colour, texture and typography.) We call that 'atmosphere.'</Paragraph>
        <Paragraph>You'll have plenty of opportunities to review our work and provide feedback. We'll either share a Dropbox, Google Drive folder or Github repository or development site with you and we'll have regular contact by either phone, Skype, or email.</Paragraph>
        <Paragraph>If—at any stage—you change your mind about what you want delivered or aren't happy with the direction our work is taking, you'll pay us in full for the time we've spent working until that point and may terminate this contract.</Paragraph>
        
        <h3>Text content</h3>
        <Paragraph>Unless agreed separately, we're not responsible for inputting text or images into your content management system or creating every page on your website. We provide professional copywriting and editing services, so if you'd like us to create new content or input content for you, we'll provide a separate estimate.</Paragraph>
        
        <h3>Graphics and photographs</h3>
        <Paragraph>You should supply graphic files in an editable, vector digital format. You should supply photographs in a high resolution digital format. If you choose to buy stock photographs, we can suggest stock libraries. If you'd like us to search for photographs for you, we can provide a separate estimate.</Paragraph>
        
        <h3>HTML, CSS and JavaScript</h3>
        <Paragraph>We deliver pages developed from HTML markup, CSS stylesheets for styling and unobtrusive JavaScript for behaviours.</Paragraph>
        
        <h3>Browser testing</h3>
        <Paragraph>Browser testing no longer means attempting to make a website look the same in browsers of different capabilities or on devices with different size screens. It does mean ensuring that a person's experience of a design should be appropriate to the capabilities of a browser or device.</Paragraph>
        <Paragraph>We test our work in current versions of major desktop browsers including those made by Apple (Safari), Google (Chrome) and Mozilla Firefox. We won't test in other older browsers unless we agreed separately. If you need an enhanced design for an older browser, we can provide a separate estimate for that.</Paragraph>
        
        <h3>Mobile browser testing</h3>
        <Paragraph>Testing using popular smaller screen devices is essential in ensuring that a person's experience of a design is appropriate to the capabilities of the device they're using. We test our designs in:</Paragraph>
        <Paragraph>iOS: Safari and Google Chrome</Paragraph>
        <Paragraph>We won't test in Opera Mini/Mobile, specific Android devices, or other mobile browsers unless we agreed separately. If you need us to test using these, we can provide a separate estimate.</Paragraph>
        
        <h3>Technical support</h3>
        <Paragraph>We're not a website hosting company so we don't offer support for website hosting, email or other services relating to hosting. You may already have professional hosting and you might even manage that hosting in-house; if you do, great. If you don't, we will recommend one of our preferred hosting providers. We can set up your site on a server, plus any statistics software such as Google Analytics and will provide a separate estimate for that. Then, the updates to, and management of that server will be up to you.</Paragraph>
        
        <h3>Search engine optimisation (SEO)</h3>
        <Paragraph>We don't guarantee improvements to your website's search engine ranking, but the pages that we develop are accessible to search engines.</Paragraph>
        
        <h3>Changes and revisions</h3>
        <Paragraph>We don't want to limit your ability to change your mind. The price at the beginning of this contract is based on the number of weeks that we estimate we'll need to accomplish everything you've told us you want to achieve, but we're happy to be flexible. If you want to change your mind or add anything new, that won't be a problem as we'll provide a separate estimate for those additional weeks.</Paragraph>
        
        <h3>Legal stuff</h3>
        <Paragraph>We'll carry out our work in accordance with good industry practice and at the standard expected from a suitably qualified person with relevant experience. That said, we can't guarantee that our work will be error-free and so we can't be liable to you or any third-party for damages, including lost profits, lost savings or other incidental, consequential or special damages, even if you've advised us of them.</Paragraph>
        <Paragraph>Your liability to us will also be limited to the amount of fees payable under this contract and you won't be liable to us or any third-party for damages, including lost profits, lost savings or other incidental, consequential or special damages, even if we've advised you of them.</Paragraph>
        <Paragraph>Finally, if any provision of this contract shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this contract and shall not affect the validity and enforceability of any remaining provisions.</Paragraph>
        <Paragraph>Phew.</Paragraph>
        
        <h3>Intellectual property rights</h3>
        <Paragraph>Just to be clear, “Intellectual property rights” means all patents, rights to inventions, copyright (including rights in software) and related rights, trademarks, service marks, get up and trade names, internet domain names, rights to goodwill or to sue for passing off, rights in designs, database rights, rights in confidential information (including know-how) and any other intellectual property rights, in each case whether registered or unregistered and including all applications (or rights to apply) for, and renewals or extensions of, such rights and all similar or equivalent rights or forms of protection which subsist or shall subsist now or in the future in any part of the world.</Paragraph>
        <Paragraph>Blimey.</Paragraph>
        <Paragraph>First, you guarantee that all elements of text, images or other artwork you provide are either owned by your good selves, or that you've permission to use them. When you provide text, images or other artwork to us, you agree to protect us from any claim by a third party that we're using their intellectual property.</Paragraph>
        <Paragraph>We guarantee that all elements of the work we deliver to you are either owned by us or we've obtained permission to provide them to you. When we provide text, images or other artwork to you, we agree to protect you from any claim by a third party that you're using their intellectual property. Provided you've paid for the work and that this contract hasn't been terminated, we'll assign all intellectual property rights to you as follows:</Paragraph>
        <Paragraph>You'll own the website we design for you plus the visual elements that we create for it. We'll give you source files and finished files and you should keep them somewhere safe as we're not required to keep a copy. You own all intellectual property rights of text, images, site specification and data you provided, unless someone else owns them.</Paragraph>
        <Paragraph>We'll own any intellectual property rights we've developed prior to, or developed separately from this project and not paid for by you. We'll own the unique combination of these elements that constitutes a complete design and we'll license its use to you, exclusively and in perpetuity for this project only, unless we agree otherwise.</Paragraph>
        
        <h3>Displaying our work</h3>
        <Paragraph>We love to show off our work, so we reserve the right to display all aspects of our creative work, including sketches, work-in-progress designs and the completed project on our portfolio and in articles on websites, in magazine articles and in books.</Paragraph>
        
        <h3>Payment schedule</h3>
        <Paragraph>We're sure you understand how important it is as a small business that you pay the invoices that we send you promptly. As we're also sure you'll want to stay friends, you agree to stick tight to the payment schedule provided in the final copy of this document.</Paragraph>
        <Paragraph>We issue invoices electronically. Our payment terms are 30 days from the date of invoice by Interac or Paypal payments system. All proposals are quoted in CAD and payments will be made at the equivalent conversion rate at the date the transfer is made.</Paragraph>
        <Paragraph>You agree to pay all charges associated with international transfers of funds. The appropriate bank account details will be printed on our electronic invoice. We reserve the right to charge interest on all overdue debts at the rate of 10% per month or part of a month.</Paragraph>
        
        <h3>But where's all the horrible small print?</h3>
        <Paragraph>Just like a parking ticket, neither of us can transfer this contract to anyone else without the other's permission.</Paragraph>
        <Paragraph>We both agree that we'll adhere to all relevant laws and regulations in relation to our activities under this contract and not cause the other to breach any relevant laws or regulations.</Paragraph>
        <Paragraph>This contract stays in place and need not be renewed. If for some reason one part of this contract becomes invalid or unenforceable, the remaining parts of it remain in place.</Paragraph>
        <Paragraph>Although the language is simple, the intentions are serious and this contract is a legal document.</Paragraph>
        <Paragraph>Everyone should sign their copy of the final document and keep a copy for their records.</Paragraph>
      </Section>
    </Div>
  );
}