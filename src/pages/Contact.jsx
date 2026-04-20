import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        accountType: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const supportEmail = 'contact@mybestmetrics.com';

    const canSend = useMemo(() => {
        return (
            formData.firstName.trim() &&
            formData.lastName.trim() &&
            formData.email.trim() &&
            formData.subject.trim() &&
            formData.accountType.trim() &&
            formData.message.trim()
        );
    }, [formData]);

    const onChange = (field) => (e) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!canSend) return;
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok || !data.ok) {
                throw new Error(data?.message || 'Erreur lors de l’envoi du message.');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Votre message a bien été envoyé. Nous reviendrons vers vous rapidement.',
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                accountType: '',
                message: '',
            });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error?.message || 'Une erreur est survenue. Veuillez réessayer.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white">
            <div className="border-b border-gray-800 bg-[#050614]/90 backdrop-blur-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-sm md:text-base font-bold tracking-wide">MyBestMetrics - Contact</h1>
                    <Link to="/" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <div className="max-w-3xl mx-auto rounded-2xl border border-gray-800 bg-[#11132b]/60 p-5 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold">Contact & demande d&apos;information</h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                        Remplissez ce formulaire pour nous envoyer directement votre demande d&apos;information.
                    </p>

                    <form className="mt-8 space-y-5" onSubmit={onSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="space-y-2">
                                <span className="text-sm text-gray-300">Prénom *</span>
                                <input type="text" value={formData.firstName} onChange={onChange('firstName')} className="w-full rounded-lg border border-gray-700 bg-[#0a0b1e] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
                            </label>
                            <label className="space-y-2">
                                <span className="text-sm text-gray-300">Nom *</span>
                                <input type="text" value={formData.lastName} onChange={onChange('lastName')} className="w-full rounded-lg border border-gray-700 bg-[#0a0b1e] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
                            </label>
                        </div>

                        <label className="space-y-2 block">
                            <span className="text-sm text-gray-300">Email *</span>
                            <input type="email" value={formData.email} onChange={onChange('email')} className="w-full rounded-lg border border-gray-700 bg-[#0a0b1e] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="space-y-2">
                                <span className="text-sm text-gray-300">Sujet *</span>
                                <input type="text" value={formData.subject} onChange={onChange('subject')} placeholder="Ex: Abonnement Pro, Backtesting, Synchronisation..." className="w-full rounded-lg border border-gray-700 bg-[#0a0b1e] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
                            </label>
                            <label className="space-y-2">
                                <span className="text-sm text-gray-300">Type de compte *</span>
                                <select value={formData.accountType} onChange={onChange('accountType')} className="w-full rounded-lg border border-gray-700 bg-[#0a0b1e] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60">
                                    <option value="">Sélectionner</option>
                                    <option value="Visiteur">Visiteur</option>
                                    <option value="Gratuit">Compte gratuit</option>
                                    <option value="Pro Mensuel">Pro Mensuel</option>
                                    <option value="Pro Annuel">Pro Annuel</option>
                                </select>
                            </label>
                        </div>

                        <label className="space-y-2 block">
                            <span className="text-sm text-gray-300">Message *</span>
                            <textarea value={formData.message} onChange={onChange('message')} rows={8} placeholder="Décrivez votre demande en précisant votre besoin, votre contexte (broker, plateforme, type de marché), et ce que vous attendez de notre réponse." className="w-full rounded-lg border border-gray-700 bg-[#0a0b1e] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 resize-y" />
                        </label>

                        <div className="rounded-lg border border-gray-800 bg-[#0a0b1e] p-4 text-xs md:text-sm text-gray-400">
                            Les champs marqués d&apos;un * sont nécessaires pour traiter votre demande. Email de contact:
                            <span className="text-blue-400"> {supportEmail}</span>
                        </div>

                        {submitStatus.message && (
                            <div
                                className={`rounded-lg border p-3 text-sm ${
                                    submitStatus.type === 'success'
                                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                                        : 'border-red-500/40 bg-red-500/10 text-red-300'
                                }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={!canSend || isSubmitting}
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:from-blue-500 hover:to-indigo-500 transition"
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
