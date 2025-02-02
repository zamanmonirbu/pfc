import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FAQSection } from '../../components/faq/FAQSection';
import { useLanguage } from '../../hooks/useLanguage';

const faqData = {
  en: [
    {
      title: "Ordering & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within Europe. Express shipping (1-2 business days) and Next Day Delivery options are also available for an additional fee."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we currently ship to all EU countries. Delivery times may vary by location. International shipping outside the EU is not available at this time."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your delivery status through our website or the carrier's tracking system."
        }
      ]
    },
    {
      title: "Product Information",
      questions: [
        {
          question: "What condition are your refurbished phones in?",
          answer: "All our phones undergo a rigorous 30-point quality check and are graded based on their cosmetic condition (Fair, Good, or Excellent). Every device functions perfectly, regardless of its grade."
        },
        {
          question: "What's included with my refurbished phone?",
          answer: "Each phone comes with a certified charger, charging cable, SIM ejector tool, and our comprehensive 2-year warranty. All devices are factory reset and ready to use."
        },
        {
          question: "How do you test the phones?",
          answer: "Every phone undergoes extensive testing including battery health, screen quality, camera functionality, speaker performance, and all other features. Only phones that pass all tests are offered for sale."
        }
      ]
    },
    {
      title: "Warranty & Returns",
      questions: [
        {
          question: "What does your warranty cover?",
          answer: "Our 2-year warranty covers manufacturing defects and hardware malfunctions. This includes issues with the battery, screen, cameras, and other internal components. Accidental damage is not covered."
        },
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, you can return the device for a full refund. The phone must be in its original condition with all accessories included."
        },
        {
          question: "How do I make a warranty claim?",
          answer: "Contact our customer service team through the support portal or email. We'll guide you through the process and provide a prepaid shipping label if needed."
        }
      ]
    }
  ],
  nl: [
    {
      title: "Bestellen & Verzending",
      questions: [
        {
          question: "Hoe lang duurt de verzending?",
          answer: "Standaard verzending duurt 3-5 werkdagen binnen Europa. Express verzending (1-2 werkdagen) en Next Day Delivery zijn ook beschikbaar tegen een meerprijs."
        },
        {
          question: "Verzenden jullie internationaal?",
          answer: "Ja, we verzenden momenteel naar alle EU-landen. Levertijden kunnen per locatie verschillen. Internationale verzending buiten de EU is momenteel niet beschikbaar."
        },
        {
          question: "Hoe kan ik mijn bestelling volgen?",
          answer: "Zodra uw bestelling is verzonden, ontvangt u een trackingnummer per e-mail. Hiermee kunt u de bezorgstatus volgen via onze website of het systeem van de vervoerder."
        }
      ]
    },
    {
      title: "Productinformatie",
      questions: [
        {
          question: "In welke staat zijn jullie refurbished telefoons?",
          answer: "Al onze telefoons ondergaan een grondige 30-punts kwaliteitscontrole en worden beoordeeld op hun cosmetische staat (Redelijk, Goed of Uitstekend). Elk toestel functioneert perfect, ongeacht de gradatie."
        },
        {
          question: "Wat wordt er meegeleverd met mijn refurbished telefoon?",
          answer: "Elke telefoon wordt geleverd met een gecertificeerde oplader, oplaadkabel, SIM-uitwerptool en onze uitgebreide 2-jarige garantie. Alle toestellen zijn teruggezet naar fabrieksinstellingen en klaar voor gebruik."
        },
        {
          question: "Hoe testen jullie de telefoons?",
          answer: "Elke telefoon ondergaat uitgebreide tests, waaronder batterijgezondheid, schermkwaliteit, camerafunctionaliteit, speakerprestaties en alle andere functies. Alleen telefoons die alle tests doorstaan worden te koop aangeboden."
        }
      ]
    },
    {
      title: "Garantie & Retourneren",
      questions: [
        {
          question: "Wat dekt de garantie?",
          answer: "Onze 2-jarige garantie dekt fabricagefouten en hardware storingen. Dit omvat problemen met de batterij, scherm, camera's en andere interne componenten. Schade door ongelukken valt niet onder de garantie."
        },
        {
          question: "Wat is jullie retourbeleid?",
          answer: "We bieden een 30 dagen geld-terug-garantie. Als u niet helemaal tevreden bent, kunt u het toestel retourneren voor een volledige terugbetaling. De telefoon moet in originele staat zijn met alle accessoires."
        },
        {
          question: "Hoe dien ik een garantieclaim in?",
          answer: "Neem contact op met ons klantenserviceteam via het supportportaal of e-mail. We begeleiden u door het proces en verstrekken indien nodig een vooruitbetaald verzendlabel."
        }
      ]
    }
  ]
};

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();

  const filteredCategories = faqData[language].map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-gray-600 mb-8">
            {t('faq.subtitle')}
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('faq.searchPlaceholder')}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-shadow"
            />
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <FAQSection key={index} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {t('faq.noResults').replace('{query}', searchQuery)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}