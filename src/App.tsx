import { useEffect } from 'react';
import type { CSSProperties } from 'react';
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
  const productStyle = {
    '--color-brand': product.theme.brand,
    '--blue': product.theme.brand,
    '--blue-700': product.theme.brand700,
    '--blue-900': product.theme.brand900,
    '--color-cyan': product.theme.accent,
    '--color-risk': product.theme.risk,
    '--blue-soft': product.theme.soft,
  } as CSSProperties;

  useEffect(() => {
    document.title = product.metadata.title;
    setMetaContent('meta[name="description"]', product.metadata.description);
    setMetaContent('meta[property="og:title"]', product.metadata.ogTitle);
    setMetaContent('meta[property="og:description"]', product.metadata.ogDescription);
  }, [product]);

  return (
    <div className={`product-page product-${product.key}`} style={productStyle}>
      <ProductLanding product={product} />
    </div>
  );
}
