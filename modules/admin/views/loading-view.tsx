import { Skeleton } from "@/components/ui/skeleton"

export function LoadingView() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-16 w-full rounded-2xl" />
      <Skeleton className="h-72 w-full rounded-2xl" />
      <Skeleton className="h-72 w-full rounded-2xl" />
    </div>
  )
}
