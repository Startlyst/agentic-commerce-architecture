/**
 * Startlyst Public Headless SDK TypeScript Definitions (Mode C: Headless Backbone)
 * Canonical Origin: https://startlyst.com
 */
export interface StartlystBundleOption {
  id: string;
  quantity: 1 | 2 | 3;
  title: string;
  unitPrice: number;
  totalPrice: number;
  savingsPct: number;
}

export interface StartlystCommerceHookState {
  engineMode: 'live_edge_symbiosis' | 'static_frozen_fallback';
  selectedBundle: StartlystBundleOption;
  bundles: ReadonlyArray<StartlystBundleOption>;
  selectBundle: (bundleId: string) => void;
  triggerCheckout: () => Promise<{ checkoutUrl: string }>;
}

export declare function useStartlystCommerce(config?: {
  endpoint?: string;
}): StartlystCommerceHookState;
