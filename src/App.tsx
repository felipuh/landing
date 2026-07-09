import { useEffect } from 'react';
import { ProductLanding } from './components/ProductLanding';
import { isoSmart } from './data/products/isoSmart';
import { medSupplier } from './data/products/medSupplier';
import type { ProductLandingContent } from './data/products/types';

function resolveProductByPath(pathname: string): ProductLandingContent {
  if (pathname === '/medsupplier' || pathname === '/medsupplier.html') {
    return medSupplier;
  }

  return isoSmart;
}

function setMetaContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.content = content;
  }
}

export function App() {
  const product = resolveProductByPath(window.location.pathname);

  useEffect(() => {
    document.title = product.metadata.title;
    setMetaContent('meta[name="description"]', product.metadata.description);
    setMetaContent('meta[property="og:title"]', product.metadata.ogTitle);
    setMetaContent('meta[property="og:description"]', product.metadata.ogDescription);
  }, [product]);

  return <ProductLanding product={product} />;
}
