import { cn, formatDate } from '@/lib/utils'

describe('Utils', () => {
  describe('cn (className merger)', () => {
    it('merges class names correctly', () => {
      expect(cn('text-red', 'bg-blue')).toBe('text-red bg-blue')
    })

    it('handles conditional classes', () => {
      expect(cn('base', true && 'active', false && 'disabled')).toBe('base active')
    })

    it('handles undefined and null', () => {
      expect(cn('base', undefined, null, 'extra')).toBe('base extra')
    })

    it('handles clsx syntax', () => {
      expect(cn({ active: true, disabled: false })).toBe('active')
    })

    it('merges tailwind classes correctly', () => {
      // tailwind-merge should handle conflicts
      expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = '2025-10-07'
      const formatted = formatDate(date)
      expect(formatted).toMatch(/October|Oct/)
      expect(formatted).toContain('2025')
    })

    it('handles different date formats', () => {
      const date1 = '2025-01-15'
      const date2 = new Date('2025-01-15').toISOString()
      
      const formatted1 = formatDate(date1)
      const formatted2 = formatDate(date2)
      
      expect(formatted1).toContain('2025')
      expect(formatted2).toContain('2025')
    })
  })
})
