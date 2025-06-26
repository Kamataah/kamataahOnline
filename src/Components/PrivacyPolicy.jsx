import { useEffect } from "react"


function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="policy-container">
            <h1>Privacy Policy</h1>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li>Personal details such as your name, email address, phone number, and shipping address.</li>
                <li>Payment information including billing address and payment method (processed securely).</li>
                <li>Account login credentials (if you create an account).</li>
                <li>Browsing behavior, device information, and IP address for analytics and personalization.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your information may be used to:</p>
            <ul>
                <li>Process and fulfill orders.</li>
                <li>Send order confirmations, shipping updates, and customer service messages.</li>
                <li>Improve and personalize your shopping experience.</li>
                <li>Send promotional offers or updates if you opt-in to marketing.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your data with trusted third parties to:</p>
            <ul>
                <li>Fulfill and deliver orders (e.g., logistics partners).</li>
                <li>Process payments securely.</li>
                <li>Support marketing or analytics services.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We use industry-standard encryption and security practices to protect your personal data. However, no method of transmission over the internet is 100% secure.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access and correct your personal information.</li>
                <li>Request deletion of your account and associated data.</li>
                <li>Opt out of marketing emails at any time.</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>We use cookies to enhance your browsing experience and collect analytics. You can control cookie settings in your browser.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be posted on this page with the updated effective date.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> kamataahonline@gmail.com</p>
            <p><strong>Phone:</strong> +91-9172197805</p>

            <p>Thank you for shopping with <strong>Kamataah</strong>.</p>
        </div>
    )
}

export default PrivacyPolicy
