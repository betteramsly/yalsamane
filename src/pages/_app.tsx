import { MainLayout } from '@/shared/layouts'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>Муса / Ялсамане</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  )
}
