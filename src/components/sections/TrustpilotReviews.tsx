import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function TrustpilotReviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      text: t('reviews.review1'),
      date: t('reviews.daysAgo', { days: 2 })
    },
    {
      id: 2,
      author: 'Michael R.',
      rating: 5,
      text: t('reviews.review2'),
      date: t('reviews.weekAgo')
    },
    {
      id: 3,
      author: 'Emma L.',
      rating: 4,
      text: t('reviews.review3'),
      date: t('reviews.weeksAgo', { weeks: 2 })
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg"
            alt="Trustpilot"
            className="h-8"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-green-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{review.author}</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                    {t('reviews.verified')}
                  </span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}