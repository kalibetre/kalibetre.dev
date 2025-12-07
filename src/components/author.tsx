import Socials from './socials'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { formatDateToReadable } from '@/utils/utils'

export default function Author({ publishedOn }: { publishedOn?: string }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/kalibetre.jpg" alt="@kalibetre" />
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start items-start gap-1">
          <p>Kalkidan Betre</p>
          <Socials />
        </div>
      </div>
      {publishedOn && (
        <div className="text-xs">
          {formatDateToReadable(new Date(publishedOn))}
        </div>
      )}
    </div>
  )
}
