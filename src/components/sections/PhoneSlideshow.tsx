import React from 'react';
import { products } from '../../data/products';
import { SlideItem } from '../slider/SlideItem';
import { SliderControls } from '../slider/SliderControls';
import { useSlider } from '../slider/useSlider';
import { Shield, Truck, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const ITEMS_PER_VIEW = 6;

export function PhoneSlideshow() {
  const { t } = useLanguage();
  const {
    startIndex,
    containerRef,
    nextSlide,
    prevSlide,
    canGoPrev,
    canGoNext
  } = useSlider({
    totalItems: products.length,
    itemsPerView: ITEMS_PER_VIEW
  });

  const visiblePhones = products.slice(startIndex, startIndex + ITEMS_PER_VIEW);

  const features = [
    { icon: Shield, title: t('models.warranty'), desc: t('models.warrantyDesc') },
    { icon: Truck, title: t('models.shipping'), desc: t('models.shippingDesc') },
    { icon: BadgeCheck, title: t('models.quality'), desc: t('models.qualityDesc') }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -top-48 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t('models.title')}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('models.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('models.subtitle')}
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative">
          {/* Phone Cards Container */}
          <div className="flex items-center gap-4">
            <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-gray-100/50">
              <div
                ref={containerRef}
                className="flex gap-6 transition-transform duration-500"
                style={{ willChange: 'transform' }}
              >
                {visiblePhones.map((phone) => (
                  <SlideItem
                    key={phone.id}
                    product={phone}
                    isActive={true}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <SliderControls
            onPrev={prevSlide}
            onNext={nextSlide}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            currentIndex={startIndex}
            totalSlides={products.length}
          />
        </div>
      </div>
    </section>
  );
}