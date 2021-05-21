import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from '../NavBar/NavBar';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

const Title = styled(Typography)`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 38px;
    text-align: center;

    color: #ffffff;
`;
const SubTitle = styled(Typography)`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 38px;
    color: #ffffff;
`;
const TextBody = styled(Typography)`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #ffffff;
    text-align: justify;
`;

const StyleButton = styled(Button)`
    background-color: transparent;
    color: #fff;
    padding: 15px;

    text-align: justify;
`;

export default function SimpleContainer() {
    return (
        <div
            style={{
                background:
                    'linear-gradient(116.72deg, #000330 0%, #FF6C6C 99.43%)',
            }}
        >
            <Navbar />

            <CssBaseline />
            <Container maxWidth="md">
                <Title>Terms of Service. Updated: May 11 2021</Title>
                <br />
                <br />
                <SubTitle>Welcome to StablePay.io</SubTitle>
                <br />
                <TextBody>
                    {`These terms and conditions outline the rules and regulations for the use of StablePay's Platform and Interface ("Interface" or "App").
                    The Interface provides access to a decentralized protocol on the Ethereum blockchain that allows users management of digital assets.

                    The Terms of Service Agreement (the "agreement") explains the terms and conditions by which you may access and use the Interface.
                    You must read this Agreement carefully. By accessing or using the Interface, you signify that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use the Interface.

                    StablePay is located at:
                    40103 - Heredia , Costa Rica
                    By accessing this website we assume you accept these terms and conditions in full. Do not continue to use StablePay's website if you do not accept all of the terms and conditions stated on this page.

                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of Costa Rica. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.

                    You affirm that you are aware and acknowledge that Company is a non-custodial provider of software services, meaning that the Company does not custody, control or manage user funds in any manner whatsoever. The Services are deployed in a decentralized environment wherein the Services can be autonomously and directly accessed by the Users without any involvement or actions taken by Company or any third-party. `}
                </TextBody>
                <br />
                <br />
                <SubTitle>Modification of this Agreement</SubTitle>
                <br />
                <TextBody>
                    {`We reserve the right, in our sole discretion, to modify this Agreement from time to time. If we make any modifications, we will notify you by updating the date at the top of the Agreement and by maintaining a current version of the Agreement at https://stablepay.io/terms. All modifications will be effective when they are posted, and your continued use of the Interface will serve as confirmation of your acceptance of those modifications. If you do not agree with any modifications to this Agreement, you must immediately stop accessing and using the Interface.`}
                </TextBody>
                <SubTitle>Eligibility</SubTitle>
                <br />
                <TextBody>
                    {`To access or use the Interface, you must be able to form a legally binding contract with us. Accordingly, you represent that you are at least eighteen years old and have the full right, power, and authority to enter into and comply with the terms and conditions of this Agreement on behalf of yourself and any company or legal entity for which you may access or use the Interface. You further represent that you are not a citizen, resident, or member of any jurisdiction or group that is subject to economic sanctions by the United States, or where your use of the Interface would be illegal or otherwise violate any applicable law. You further represent that your access and use of the Interface will fully comply with all applicable laws and regulations, and that you will not access or use the Interface to conduct, promote, or otherwise facilitate any illegal activity.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Cookies</SubTitle>
                <br />
                <TextBody>
                    {`We employ the use of cookies to improve our user experience. By using StablePay's website you consent to the use of cookies in accordance with StablePay's privacy policy.

                    Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting.`}
                </TextBody>
                <SubTitle>Proprietary Rights</SubTitle>
                <br />
                <TextBody>
                    {`We own all intellectual property and other rights in the Interface and its contents, including (but not limited to) software, text, images, trademarks, service marks, copyrights, patents, and designs.
                    Unless expressly authorized by us, you may not copy, modify, adapt, rent, license, sell, publish, distribute, or otherwise permit any third party to access or use the Interface or any of its contents. Provided that you are eligible, you are hereby granted a single, personal, limited license to access and use the Interface. This license is non-exclusive, non-transferable, and freely revocable by us at any time without notice or cause. Use of the Interface or its contents for any purpose not expressly permitted by this Agreement is strictly prohibited. Unlike the Interface, the Protocol is comprised entirely of open-source software running on the public Ethereum blockchain and is not our proprietary property.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Reservation of Rights</SubTitle>
                <br />
                <TextBody>
                    {`We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Removal of links from our website</SubTitle>
                <br />
                <TextBody>{`
                    If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.

                    Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
                    `}</TextBody>
                <br />
                <br />
                <SubTitle>Prohibited Activity</SubTitle>
                <br />
                <TextBody>{`You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in relation to your access and use of the Interface: Intellectual Property Infringement. Activity that infringes on or violates any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under the law. Cyberattack. Activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including (but not limited to) the deployment of viruses and denial of service attacks. Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including (but not limited to) providing any false, inaccurate, or misleading information in order to unlawfully obtain the property of another. Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including (but not limited to) the manipulative tactics commonly known as spoofing and wash trading. Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation of the United States or another relevant jurisdiction, including (but not limited to) the restrictions and regulatory requirements imposed by U.S. law.`}</TextBody>
                <br />
                <br />
                <SubTitle>No Professional Advice</SubTitle>
                <br />
                <TextBody>
                    {`All information provided by the Interface is for informational purposes only and should not be construed as professional advice. You should not take, or refrain from taking, any action based on any information contained in the Interface. Before you make any financial, legal, or other decisions involving the Interface, you should seek independent professional advice from an individual who is licensed and qualified in the area for which such advice would be appropriate.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>No Warranties</SubTitle>
                <br />
                <TextBody>
                    {`The Interface is provided on an “AS IS” and “AS AVAILABLE” basis. To the fullest extent permitted by law, we disclaim any representations and warranties of any kind, whether express, implied, or statutory, including (but not limited to) the warranties of merchantability and fitness for a particular purpose. You acknowledge and agree that your use of the Interface is at your own risk. We do not represent or warrant that access to the Interface will be continuous, uninterrupted, timely, or secure; that the information contained in the Interface will be accurate, reliable, complete, or current; or that the Interface will be free from errors, defects, viruses, or other harmful elements. No advice, information, or statement that we make should be treated as creating any warranty concerning the Interface. We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Interface.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>No Fiduciary Duties</SubTitle>
                <br />
                <TextBody>
                    {`This Agreement is not intended to, and does not, create or impose any fiduciary duties on us. To the fullest extent permitted by law, you acknowledge and agree that we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, those duties and liabilities are hereby irrevocably disclaimed, waived, and eliminated. You further agree that the only duties and obligations that we owe you are those set out expressly in this Agreement.
                    `}
                </TextBody>
                <br />
                <br />
                <SubTitle>Compliance Obligations</SubTitle>
                <br />
                <TextBody>
                    {`The Interface is operated from facilities within the United States. The Interface may not be available or appropriate for use in other jurisdictions. By accessing or using the Interface, you agree that you are solely and entirely responsible for compliance with all laws and regulations that may apply to you. You may not use the Interface if you are a citizen, resident, or member of any jurisdiction or group that is subject to economic sanctions by the United States, or if your use of the Interface would be illegal or otherwise violate any applicable law. The Interface and all of its contents are solely directed to individuals, companies, and other entities located within the United States.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Assumption of Risk</SubTitle>
                <br />
                <TextBody>
                    {`By accessing and using the Interface, you represent that you understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of the usage and intricacies of digital assets such as bitcoin (BTC), ether (ETH), and other digital tokens such as those following the Ethereum Token Standard (ERC-20). You further understand that the markets for these digital assets are highly volatile due to factors including (but not limited to) adoption, speculation, technology, security, and regulation. You acknowledge that the cost and speed of transacting with cryptographic and blockchain-based systems such as Ethereum are variable and may increase dramatically at any time. You further acknowledge the risk that your digital assets may lose some or all of their value while they are supplied to the Protocol. You further acknowledge that we are not responsible for any of these variables or risks, do not own or control the Protocol, and cannot be held liable for any resulting losses that you experience while accessing or using the Interface. Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using the Interface and interacting with the Protocol.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Release of Claims</SubTitle>
                <br />
                <TextBody>
                    {`You expressly agree that you assume all risks in connection with your access and use of the Interface and your interaction with the Protocol. You further expressly waive and release us from any and all liability, claims, causes of action, or damages arising from or in any way relating to your use of the Interface and your interaction with the Protocol. If you are a Delaware resident, you waive the benefits and protections of Delaware Civil Code § 1542, which provides: “[a] general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.”`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Indemnity</SubTitle>
                <br />
                <TextBody>
                    {`You agree to hold harmless, release, defend, and indemnify us and our officers, directors, employees, contractors, agents, affiliates, and subsidiaries from and against all claims, damages, obligations, losses, liabilities, costs, and expenses arising from: (a) your access and use of the Interface; (b) your violation of any term or condition of this Agreement, the right of any third party, or any other applicable law, rule, or regulation; and (c) any other party’s access and use of the Interface with your assistance or using any device or account that you own or control.`}
                </TextBody>
                <br />
                <br />
                <SubTitle>Limitation of Liability</SubTitle>
                <br />
                <TextBody>{`Under no circumstances shall we or any of our officers, directors, employees, contractors, agents, affiliates, or subsidiaries be liable to you for any indirect, punitive, incidental, special, consequential, or exemplary damages, including (but not limited to) damages for loss of profits, goodwill, use, data, or other intangible property, arising out of or relating to any access or use of the Interface, nor will we be responsible for any damage, loss, or injury resulting from hacking, tampering, or other unauthorized access or use of the Interface or the information contained within it. We assume no liability or responsibility for any: (a) errors, mistakes, or inaccuracies of content; (b) personal injury or property damage, of any nature whatsoever, resulting from any access or use of the Interface; (c) unauthorized access or use of any secure server or database in our control, or the use of any information or data stored therein; (d) interruption or cessation of function related to the Interface; (e) bugs, viruses, trojan horses, or the like that may be transmitted to or through the Interface; (f) errors or omissions in, or loss or damage incurred as a result of the use of, any content made available through the Interface; and (g) the defamatory, offensive, or illegal conduct of any third party. Under no circumstances shall we or any of our officers, directors, employees, contractors, agents, affiliates, or subsidiaries be liable to you for any claims, proceedings, liabilities, obligations, damages, losses, or costs in an amount exceeding the amount you paid to us in exchange for access to and use of the Interface, or $100.00, whichever is greater. This limitation of liability applies regardless of whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, and even if we have been advised of the possibility of such liability. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of certain liabilities and damages. Accordingly, some of the disclaimers and limitations set forth in this Agreement may not apply to you. This limitation of liability shall apply to the fullest extent permitted by law.
                    `}</TextBody>
                <br />
                <br />

                <SubTitle>Contact Information: </SubTitle>
                <TextBody>
                    If you have any queries regarding any of our terms, please
                    contact us via{' '}
                    <b>
                        <em>support@stablepay.io</em>
                    </b>
                </TextBody>

                <br />
                <br />
                <br />
                <StyleButton href="/" startIcon={<ArrowBackIcon />}>
                    back
                </StyleButton>
            </Container>
        </div>
    );
}
