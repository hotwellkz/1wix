import React from 'react';
import { Heart } from 'lucide-react';
import Logo from '../Logo/Logo';

export function Navigation() {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-orange-400">Шаблоны</a>
            <a href="#" className="hover:text-orange-400">Возможности</a>
            <a href="#" className="hover:text-orange-400">Новости</a>
            <a href="#" className="hover:text-orange-400">Документация</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 hover:text-orange-400">Войти</button>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}