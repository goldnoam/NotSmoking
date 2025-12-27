
export interface DamageInfo {
  title: string;
  description: string;
  icon: string;
}

export interface ChartData {
  year: number;
  cost: number;
  savings: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
