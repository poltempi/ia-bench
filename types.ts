import React from 'react';

export interface ModelData {
  name: string;
  provider: string;
  cost: number;
  performance: number;
  color: string;
}

export interface PricingData {
  model: string;
  provider: string;
  inputPrice: number;
  outputPrice: number;
  source: string;
  sourceUrl: string;
}

export interface LeaderboardData {
  rank: number;
  name: string;
  provider: string;
  icon: React.FC<{ className?: string; color: string; }>;
  percentageScore: number;
  rawScore: number;
  answered: number;
  totalQuestions: number;
  genPercent: number;
  codePercent: number;
  color: string;
}

export interface EditorData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface CliAgentData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface VibePlatformData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface ProductivityToolData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface FrontendFrameworkData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface ProgrammingLanguageData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface BackendFrameworkData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface DatabaseData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface HostingPlatformData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface CmsData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}

export interface ApiServicesData {
  name: string;
  description: string;
  pricing: string;
  color: string;
}
