// ** React Imports
import { ReactNode } from 'react'

// ** Types
import { ThemeColor } from '@/lib/Theme/config/interface'

export type CardStatsVerticalProps = {
  title: string
  stats: string
  icon: ReactNode
  subtitle: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}
