import { describe, expect, it } from "vitest";
import { services } from "./services";

describe("Cognosy service anchors", () => {
  it("keeps all four existing service URLs and adds anchors for the two new services", () => {
    expect(services.map((service) => service.slug)).toEqual([
      "ai-automation",
      "ai-customer-engagement",
      "rag-systems",
      "custom-ai",
      "ai-governance-risk-system-safety",
      "business-growth",
    ]);
  });
});