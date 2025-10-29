'use client';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'zh', name: 'Chinese', nativeName: '中文 (简体)' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
];


export function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState({ code: 'en', name: 'English', nativeName: 'English' });

  useEffect(() => {
    const pathLang = pathname.split('/')[1] || 'en';
    const lang = languages.find(l => l.code === pathLang) || languages[0];
    setCurrentLang(lang);
  }, [pathname]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-[150px] justify-start text-left">
          <Globe className="mr-2 h-4 w-4" />
          <span>{currentLang.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="max-h-60 overflow-y-auto">
        {languages.map((lang) => (
          <Link href={`/${lang.code}`} key={lang.code}>
            <DropdownMenuItem>
              {lang.nativeName}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
