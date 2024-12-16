import React from 'react';
import { Heart } from 'lucide-react';
import { CodeInput } from '../CodeInput/CodeInput';
import { ActionButtons } from '../ActionButtons/ActionButtons';
import { Stats } from '../Stats/Stats';
import { Steps } from '../Steps/Steps';
import { UseCases } from '../UseCases/UseCases';
import { Product } from '../Product/Product';
import { Features } from '../Features/Features';
import { Testimonials } from '../Testimonials/Testimonials';
import { FAQ } from '../FAQ/FAQ';
import { Pricing } from '../Pricing/Pricing';

export function Hero() {
  return (
    <>
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Heart className="w-24 h-24 text-gradient-to-r from-orange-400 to-rose-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            От идеи до сайта за секунды
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            1wix - ваш суперсовременный ИИ-помощник для создания сайтов
          </p>
          
          <CodeInput />
          <ActionButtons />
          <Steps />
          <Stats />
        </div>
      </main>
      <UseCases />
      <Product />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}