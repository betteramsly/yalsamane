import { FC } from 'react'

type TProps = {
  children: React.ReactNode
}

export const MainLayout: FC<TProps> = ({ children }) => {
  return <>{children}</>
}
