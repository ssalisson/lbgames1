import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
}

export interface TradeInState {
  hasConsole: string;
  wantsConsole: string;
  condition: string;
}