
import dynamic from 'next/dynamic'
const BrowserRouterExample = dynamic(import( './browser-router-example'), {
  ssr: false
});
export default BrowserRouterExample;
