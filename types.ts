import React from 'react';

export interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ContactState {
  copied: boolean;
}