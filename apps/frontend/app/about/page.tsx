'use client'

import AchievementsSection from '@/components/AboutPage/achievements-section';
import MeetFounder from '@/components/AboutPage/meet-founder';
import StoryCTA from '@/components/AboutPage/story-cta';
import OurStoryHero from '@/components/AboutPage/story-hero';
import WhatIsBigwig from '@/components/AboutPage/what-is-bigwig';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <OurStoryHero />
      <WhatIsBigwig />
      <MeetFounder />
      <AchievementsSection />
      <StoryCTA />
      <Footer />
    </main>
  )
}
