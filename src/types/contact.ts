import type { LucideIcon } from 'lucide-react';

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  content: string;
  subContent?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
}
