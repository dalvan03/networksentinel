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
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'zh', name: 'Chinese', nativeName: '中文 (简体)' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState({ code: 'en', name: 'English' });

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
      <DropdownMenuContent align="start">
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