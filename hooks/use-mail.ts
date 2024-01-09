import { create } from 'zustand';
import { Mail, mails } from '@/lib/data';

interface MailStore {
  selected: Mail['id'] | null;
  selectMail: (mailId: Mail['id']) => void;
}

export const useMailStore = create<MailStore>((set) => ({
  selected: mails[0].id,
  selectMail: (mailId) => set({ selected: mailId }),
}));
