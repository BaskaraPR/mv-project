'use client'

import { useState } from 'react'
import Select from 'react-select'
import { Tags } from "@/app/types/tags"

interface ClientSelectProps {
  tags: Tags[]
}

export default function ClientSelect({ tags }: ClientSelectProps) {
  const [selectedTag, setSelectedTag] = useState(null)

  const tagOptions = tags.map(tag => ({ value: tag.id.toString(), label: tag.tags }))

  return (
    <Select
      options={tagOptions}
      value={selectedTag}
      onChange={setSelectedTag}
      placeholder="Company Tags"
      className="text-sm"
      classNamePrefix="react-select"
    />
  )
}