'use client';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const EmailCollect = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const recaptchaRef = useRef(null);

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        };

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            setStatus('success');
            setMessage('Thank you for signing up! We will notify you when we launch.');
            setEmail('');
        } catch (e) {
            console.error('Error:', e);
            setMessage('An error occurred. Please try again later.');
            setStatus('error');
            return;
        }
    };

    if (status === 'success') {
        return (
            <>
            {message && (
                <p className={`mt-4 text-sm text-semibold px-8 py-2 border-2 rounded-3xl bg-[#f9f9fa] ${status === 'success' ? 'text-[#063838]' : 'text-red-500'}`}>
                    {message}
                </p> 
            )}
            </>
        );
    }

    return (
        // 
        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <input 
                type="email" 
                placeholder="e.g., johndoe@gmail.com" 
                className="px-8 py-2 border-2 rounded-3xl focus:outline-none cursor-pointer bg-[#F9F9FA]"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#063838] text-white px-8 py-2 rounded-3xl border-2 hover:bg-[#F9F9FA] hover:text-[#063838] hover:border-2 cursor-pointer transition duration-150 ease-in-out">
                {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
          </form>
    );
}

export default EmailCollect;