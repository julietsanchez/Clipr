import { test } from "node:test";
import assert from "node:assert/strict";
import {
  resolveDocumentLang,
  resolveLangLabel,
} from "../js/i18n-nav.mjs";

test("resolveDocumentLang: en", () => {
  assert.equal(resolveDocumentLang("en"), "en");
  assert.equal(resolveDocumentLang("EN"), "en");
});

test("resolveDocumentLang: default es", () => {
  assert.equal(resolveDocumentLang("es"), "es");
  assert.equal(resolveDocumentLang("fr"), "es");
  assert.equal(resolveDocumentLang(""), "es");
  assert.equal(resolveDocumentLang(null), "es");
  assert.equal(resolveDocumentLang(undefined), "es");
});

test("resolveLangLabel", () => {
  assert.equal(resolveLangLabel("en"), "en");
  assert.equal(resolveLangLabel("es"), "es");
});
