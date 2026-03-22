import { test } from "node:test";
import assert from "node:assert/strict";
import { buildHeroImageList, HERO_IMAGE_SOURCES } from "../js/hero-sources.mjs";

test("buildHeroImageList: repite cuando hay pocas URLs", () => {
  const list = buildHeroImageList(["a", "b"], 5);
  assert.deepEqual(list, ["a", "b", "a", "b", "a"]);
});

test("buildHeroImageList: no acorta si ya hay suficientes", () => {
  const src = ["x", "y", "z", "w"];
  const list = buildHeroImageList(src, 3);
  assert.deepEqual(list, src);
});

test("buildHeroImageList: fuentes vacías", () => {
  assert.deepEqual(buildHeroImageList([]), []);
});

test("HERO_IMAGE_SOURCES tiene al menos una URL", () => {
  assert.ok(HERO_IMAGE_SOURCES.length > 0);
  for (const u of HERO_IMAGE_SOURCES) {
    assert.equal(typeof u, "string");
    assert.ok(u.length > 0);
  }
});
