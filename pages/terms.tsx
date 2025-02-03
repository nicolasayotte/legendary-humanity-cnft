import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import { Heading, HugeText, MutedText, SmallerText } from '@/components/text';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Head from 'next/head';

export const DigitalTwin = () => {
  return (
    <div className="w-full p-4 bg-muted">
      <Heading>Register to make a digital twin</Heading>
      <SmallerText>Register to make a digital twin</SmallerText>
      <Separator className="bg-black my-2" />
      <MutedText>Email</MutedText>
      <Input
        className="text-foreground"
        name="email"
        title="email"
        placeholder="Enter email"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-screen max-w-none font-semibold text-lg leading-normal text-black container">
      <Head>
        <title>Legendary Humanity</title>
        <meta name="description" content="Legendary Humanity" />
        <link rel="icon" href="/images/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Armata&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          }
          rel="stylesheet"
        />
      </Head>

      <nav>
        <NavBar />
      </nav>

      <main className="main">
        <div className="z-10 flex flex-row p-20">
          <div className="flex flex-col w-2/5 items-start pt-20 pr-20">
            <HugeText className="font-normal">Terms and conditions</HugeText>
            <MutedText>Last updated 12 September 2026</MutedText>
          </div>

          <div className="flex flex-col w-3/5 grow items-start pt-20">
            <Heading>Terms and Conditions for LH MUSEO</Heading>

            <SmallerText>
              The following Terms and Conditions (the “Terms”) apply to your use
              of the websites of all customers, whether guests or registered
              users, who use the LH MUSEO (the "Service"), a virtual museum
              developed by Legendary Humanity ("LH").
            </SmallerText>
            <SmallerText>
              The Service shall include content, functions, products, and
              services presented on or through related websites or applications.
              The sites providing this Service shall be collectively referred to
              as the "Website." Please read these terms carefully before you
              start to use the Service.
            </SmallerText>

            <Heading>Application</Heading>

            <SmallerText>
              Upon use of the Service, you will be bound by and agree to comply
              with the Terms. Customers who do not agree to the Terms are
              prohibited from using the Service.
            </SmallerText>
            <SmallerText>
              In addition to these Terms, LH may prescribe detailed rules,
              conditions, and guidelines for the use of the Site or the Service.
              Customers must use the Service in accordance with these Terms as
              well as these detailed rules. The End User License Agreement (the
              "License Agreement") stipulates the terms for the license to use
              the application in connection with the Service. The License
              Agreement shall apply to all customers.
            </SmallerText>

            <Heading>Changes to the Terms</Heading>

            <SmallerText>
              LH may update these Terms from time to time; you should check this
              page regularly to take notice of any changes. Once the revised
              Terms are posted, any customer who continues to use the Service
              shall be deemed to have accepted the changes, and the revised
              Terms shall apply.
            </SmallerText>

            <Heading>Account</Heading>

            <SmallerText>
              With the exception of select parts of the Service, account
              registration is required to access the Service. To register an
              account, please provide the information requested by LH. When
              registering an account, ensure that all information provided is
              accurate, up-to-date, and complete. In the event of any changes,
              you must promptly update all registered information.
            </SmallerText>
            <SmallerText>
              ID, password, and other credentials required for account access
              shall be kept with the customer's own responsibility and shall not
              be disclosed to others. In the event of unauthorized use of an ID,
              password, or any other security breach, please immediately notify
              LH. Specifically, when accessing an account from a public or
              shared terminal, pay special attention to ensure that the account
              password or other personal information is not visible or recorded.
            </SmallerText>
            <SmallerText>
              You may only access the Service through your account. The account
              is not the customer's property. The transfer of accounts or
              credentials, creation of security interests, and other
              dispositions are expressly prohibited.
            </SmallerText>
            <SmallerText>
              LH may suspend access to the account or delete the account if the
              customer is found in conflict with the Terms, the License
              Agreement, or other rules or guidelines. Accounts may also be
              suspended or deleted if the account holder has not logged in to
              the Service for six months or more. LH shall not be liable for any
              damage or disadvantage suffered as a result of the suspension of
              access to an account or the deletion of an account in accordance
              with this Section.
            </SmallerText>

            <Heading>Intellectual Property Rights</Heading>

            <SmallerText>
              The Service, including all content, feature, and functionality
              thereof, is owned by LH, its licensors, or other providers of such
              material and is protected by Japanese and international
              copyrights, trademark, patent, and other intellectual property or
              proprietary rights laws.
            </SmallerText>
            <SmallerText>
              You are permitted to use the Service for personal, non-commercial
              use only. You must not copy, modify, create derivative works of,
              publicly display, publicly perform, republish, or transmit any of
              the material obtained through the Service. Moreover, you must not
              delete or alter any copyright, trademark, or other intellectual
              property notices from copies of materials from the Service, except
              as expressly permitted by LH within the Service.
            </SmallerText>

            <Heading>User-Generated Content</Heading>

            <SmallerText>
              LH is not obligated to back up any data that you store on servers
              managed by LH, or any text, images, videos, or other
              user-generated content (the "UGC") that you post within the
              Service. UGC is copyrighted by you or the copyright holder of UGC.
            </SmallerText>
            <SmallerText>
              You grant LH a worldwide, royalty-free, nonexclusive, irrevocable
              license to reproduce, screen, display, distribute, transfer, lend,
              translate, adapt, publish, and otherwise use UGC posted on the
              electronic bulletin boards and other sites accessible by an
              unspecified number of customers and others. You hereby grant UGC a
              worldwide, royalty-free, irrevocable license to use the UGC. You
              must not exercise any moral rights with respect to your UGC.
            </SmallerText>
            <SmallerText>
              LH may restrict the use of the Service by deleting UGC or by other
              means without prior notice to you if LH recognizes that you have
              violated or are likely to violate any law, regulation, or the
              Terms, or if there is any other reasonable business need to do so.
            </SmallerText>
            <SmallerText>
              LH may check the contents of your UGC when it is necessary to
              check compliance with laws and regulations or these Terms, as long
              as such checks do not violate any laws or regulations. However, LH
              is not obligated to perform such verification.
            </SmallerText>

            <Heading>Tickets</Heading>

            <SmallerText>
              LH may sell electronic tickets (hereinafter referred to as
              "Tickets") required for admission to the digital content
              exhibition space (the "Exhibition"). Tickets may only be purchased
              by the registered user, and the registered user who purchases the
              ticket shall operate your device as directed by the Website. Once
              the Ticket is purchased and the Ticket is registered in your
              account, the sale and purchase transaction between you and LH is
              deemed to be completed. In addition, the registered user who
              purchases the ticket as listed on the Website where the ticket is
              sold will be treated as having accepted all of those terms and
              conditions through the purchase procedure.
            </SmallerText>
            <SmallerText>
              The ticket purchase transaction may not be canceled and the ticket
              purchase price will not be refunded for any reason.
            </SmallerText>
            <SmallerText>
              Transfer of Tickets to third parties is prohibited. Tickets may
              not be sold, lent, gifted, or used by anyone other than the
              registered user who purchased the Ticket.
            </SmallerText>
            <SmallerText>
              LH may sell any goods or services other than Tickets as set forth
              on the Website or outside the Website. The terms and conditions of
              these transactions shall be in accordance with the provisions set
              forth in each sales site.
            </SmallerText>

            <Heading>Payment</Heading>

            <SmallerText>
              The means of payment used for the purchase of Tickets and other
              products and services offered through this Service, whether inside
              or outside of the Exhibition, shall be by credit card or other
              methods provided by LH on each sales site.
            </SmallerText>

            <Heading>Prohibited Actions</Heading>

            <SmallerText>
              You shall not, and shall not attempt to, perform any of the
              following acts or act to facilitate the use of the Service.
            </SmallerText>
            <SmallerText>
              Acts in violation of applicable laws and regulations or the rules
              of the self-regulatory organization
              <br />
              Engaging in criminal acts or participating in such acts
              <br />
              Any act of posting or transmitting information determined by LH to
              fall under any of the following within the Service:
              <br />
              (a) Information containing violent or cruel expressions
              <br />
              (b) Information that contains expressions that defame the
              reputation or credibility of LH, other users, or third parties
              <br />
              (c) Information including obscene expressions, child pornography,
              and child abuse expressions
              <br />
              (d) Information that contains expressions that encourage
              discrimination
              <br />
              (e) Information including expressions that promote suicide or
              self-injurious behavior
              <br />
              (f) Information that includes expressions that promote the
              inappropriate use of drugs
              <br />
              (g) Information including anti-social expressions
              <br />
              (h) Information requesting the dissemination of information to
              third parties
              <br />
              (i) Information that may cause discomfort to others
              <br />
              Infringement of the intellectual property rights, portrait rights,
              privacy rights, other rights or interests of LH or any other user
              or any third party
              <br />
              Acts that disrupt or interfere with the functioning of LH, other
              users, or third party servers or networks
              <br />
              Act of falsifying information on the Website Transmission of large
              quantities of data to servers or other acts that may interfere
              with the operation of the Services
              <br />
              Act of unauthorized access to or attempting to access servers
              <br />
              Act of impersonating other registered users or third parties
              <br />
              Use of the IDs or passwords of other registered users
              <br />
              Improper acquisition or attempted acquisition of Points
              <br />
              Advertising, solicitation, and other business activities
              (excluding those individually licensed by LH) conducted in
              connection with the Services.
              <br />
              Acts of providing economic benefits, directly or indirectly, to
              anti-social forces or to persons whose transactions are prohibited
              or restricted by economic sanctions laws or regulations in each
              country. This includes actions related to money laundering or
              terrorist financing regulations
              <br />
              Apart from the items mentioned earlier, any act that LH deems an
              inappropriate use of the Services.
            </SmallerText>

            <Heading>Suspension of Services</Heading>

            <SmallerText>
              LH may suspend or terminate, in whole or in part, the provision of
              the Service or the Website without prior notice to the user in the
              following cases:
              <br />
              (a) In the event of maintenance and inspection or updating of the
              computer system
              <br />
              (b) In the event it becomes difficult to provide the Service due
              to natural disasters such as earthquakes, lightning strikes,
              fires, and power outages
              <br />
              (c) When a computer, communication line, or other equipment stops
              functioning
              <br />
              (d) In addition to the foregoing, in the event LH determines, at
              its discretion, that suspension or interruption of the Service is
              necessary or beneficial
              <br />
              LH may, at its discretion, terminate the operation of the Service
              or the Website. In this case, LH shall endeavor reasonably to
              notify users in advance, but may not give prior notice in the
              event of unavoidable circumstances.
              <br />
              LH shall not be liable for any damage or other disadvantage
              suffered as a result of the suspension or interruption of the
              Service or the Website, or the termination of its operation, as
              provided in this Section.
            </SmallerText>

            <Heading>Customer Facility</Heading>

            <SmallerText>
              Devices, communication lines, and other environments required for
              the use of the Service by the Customer shall be prepared at the
              responsibility and expense of the Customer.
              <br />
              The Customer is responsible for any communication fees incurred
              while using the Service.
            </SmallerText>

            <Heading>Disclaimer and Limitation of Liability</Heading>

            <SmallerText>
              The Services and all information, content, materials, products
              (including software) and other services included on or otherwise
              made available through the Services are provided on an "as is" and
              "as available" basis by LH.
              <br />
              LH makes no representation or warranties, express or implied, as
              to the operation of the Services, or the information, content,
              materials, products (including software) or other services
              included on or otherwise made available to you through the
              Service. LH disclaims that the Service meets the specific purposes
              of the Customer; are of the function, merchandise value, accuracy,
              usefulness, reliability, integrity, or safety that the Customer
              expects; are in compliance with applicable laws and regulations;
              are continuously available; are free from defects, errors or bugs;
              do not infringe the rights of the Customer or any third party; or
              that the Service or the Customer's equipment does not fail.
              <br />
              LH does not guarantee the integrity or continuity of its
              collaboration with external social network services or other
              external service providers, nor does it guarantee that the use of
              the Service will not violate the terms of use of these external
              services. The Customer is responsible for complying with the Terms
              of Use of External Services under their own responsibility.
            </SmallerText>

            <Heading>Indemnification</Heading>

            <SmallerText>
              To the fullest extent permitted by applicable law, LH shall not be
              liable for any loss of profits or for any indirect, incidental,
              punitive, special, or consequential damages arising out of or in
              connection with these Terms.
              <br />
              To the fullest extent permitted by applicable laws and
              regulations, the total liability of LH arising out of or in
              connection with the Terms shall not exceed the sum of the amount
              paid by the customer to LH under the Terms, during the twelve (12)
              months that immediately precede the cause of liability.
            </SmallerText>

            <Heading>Restrictions by Applicable Laws</Heading>

            <SmallerText>
              Notwithstanding the provisions of the preceding two sections, in
              some countries, states, provinces, or other jurisdictions, no
              specific warranty or liability limitation as set forth in the
              preceding two sections may be granted and the preceding two
              sections may not apply to you. In such jurisdictions, the
              disclaimers and limitations of the preceding two sections shall
              only apply to the extent permitted by the laws of such
              jurisdiction.
              <br />
              You may have additional legal rights in the jurisdiction in which
              you reside. Nothing in these Terms shall prejudice any legal
              rights which you may have as a consumer of the Service.
            </SmallerText>

            <Heading>Use of cookies</Heading>

            <SmallerText>
              The Website may use cookies to deliver advertisements and analyze
              access. A cookie is a small piece of data sent from a web server
              to your web browser and may be stored as a file on your device's
              hard disk. Cookies can store information about the customer's
              computer, the date and time of the last visit, the number of
              visits, and so on, but they cannot identify a specific individual.
              Third-party distributors may deliver personalized advertisements
              to customers using cookies.
              <br />
              You can refuse to accept cookies by changing your browser
              settings. However, some functions may then become unavailable for
              the Service. Additionally, the cookies used by third-party
              distributors for posting personalized ads can be disabled on the
              company's website. Please refer to the applicable third-party
              distributor's website for further details.
            </SmallerText>

            <Heading>Feedback</Heading>

            <SmallerText>
              If you provide feedback to LH, you will grant LH a non-exclusive,
              fully paid up, royalty-free, irrevocable, permanent, transferable,
              and sub-licensable license for all purposes to reproduce,
              distribute, and modify your feedback and to make, display, use,
              and sell derivative works and otherwise exploit all existing and
              future means and modes of exploitation, irrespective of country.\
              <br />
              You waive and do not assert any rights that are not licensed, such
              as personal rights and other individual rights.
              <br />
              You agree that LH shall not be obligated to credit or indemnify
              your contribution if LH makes use of your feedback.
              <br />
              You represent and warrant that you have sufficient right to grant
              LH and other related parties the foregoing rights for any feedback
              you provide to LH. This includes, but is not limited to,
              intellectual property rights and other property rights or
              individual rights.
            </SmallerText>

            <Heading>Indemnification</Heading>

            <SmallerText>
              You agree to indemnify LH, its licensors, affiliates and their
              officers, employees or trustees against any damages, losses, or
              expenses (including attorneys' fees) arising out of or in
              connection with any breach of the Terms or your act or omission in
              the use of the software or Service.
              <br />
              In the event it is prohibited by law to assume the liability for
              compensation set forth in the preceding paragraph, the Customer
              shall bear the damage, loss, or expenses set forth in the
              preceding paragraph to the extent permitted by law.
            </SmallerText>

            <Heading>Governing Law and Jurisdiction</Heading>

            <SmallerText>
              You agree that the Terms shall be governed by and construed in
              accordance with the laws of Japan. Any action or proceeding taken
              to fulfill the terms of this Agreement or to resolve any dispute
              shall be subject to the exclusive jurisdiction of the Tokyo
              District Court.
              <br />
              You hereby waive any right to an inconvenient forum and a jury
              trial.
            </SmallerText>

            <Heading>No Class Action</Heading>

            <SmallerText>
              You agree not to bring or participate in any class or
              representative action, collective or class-wide arbitration,
              private attorney general action, group arbitration or any other
              action where another individual or entity acts in a representative
              capacity, in connection with the Service, the Website, or the
              Terms. You agree that no action or arbitration relating to the
              Service, the Website, or the Terms will be linked to any other
              action or arbitration without the consent of all parties involved
              in the Terms and all other actions or arbitrations.
            </SmallerText>

            <Heading>Amendment</Heading>

            <SmallerText>
              LH may, at its discretion, change the Terms, the License Agreement
              or the Privacy Policy at any time by posting them on the Website
              or by providing digital access to the Service.
              <br />
              In the event that you are unable to accept the revised Terms,
              License Agreement, or Privacy Policy, you must delete the account.
              <br />
              After amending these Terms, the License Agreement, or the Privacy
              Policy, your continued use of the Service will be regarded as an
              acceptance of any revisions.
            </SmallerText>

            <Heading>Miscellaneous Provisions</Heading>

            <SmallerText>
              The Terms and the documents or information referred to herein
              constitute the entire Terms between you and LH with respect to the
              subject matter contained herein.
              <br />
              The original version of these Terms is in Japanese and any
              translations are provided for reference purposes only. You hereby
              waive any rights that you may have to document the Terms in any
              other language under the applicable laws of your country.
              <br />
              This Agreement stipulates the rights and obligations of the
              customer, as applicable to the Service. You may have additional
              rights under applicable laws and regulations in your jurisdiction.
              If the laws of your jurisdiction do not permit it, these Terms
              shall not alter your rights under the laws of your jurisdiction.
              If any particular provision of these Terms is held unenforceable
              by a court of competent jurisdiction, that provision shall be
              enforced only to the extent possible under applicable law and the
              remaining provisions of the Terms shall survive and remain in
              force. Any act, withholding, or delay in the exercise of any right
              by LH to exercise control under these Terms shall not be deemed a
              waiver of any right or remedy available to LH.
            </SmallerText>

            <DigitalTwin />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
