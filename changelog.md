# Changelog

## [2.9.0] - 2026-10-20
* **Changed:** Header order: Alerts · All menus · Profile (all pages).
* **Added:** login.html: Sign in, Sign up, Verify email, Onboarding 5 steps (full start-to-Home flow).
* **Added:** Sign out → Login; valid login → Home (returning owner); Launch workspace → Home (new owner).
* **Added:** Storyboard v2.9 with flowcharts, scenarios, menu & role tables.
* **Fixed:** Verify email: code boxes were cleared every second (demo code now works; paste 6 digits, Backspace).
* **Fixed:** Typing lost focus after 1 character (Onboarding, Sign up, Ask Ganes, Find a menu): only the summary/part updates now.
* **Added:** Self-test in POC tools: 76 checks incl. typing-focus checks on every field on Home, guided tasks, voice, AI Room, menus, gestures, 12 menu pages, auth (works on file://).

## [2.8.0] - 2026-10-20
* **Removed:** Stacked papers behind the task card (cleaner focus).
* **Removed:** Previous step card (simpler screen, as reference).

## [2.7.0] - 2026-10-20
* **Changed:** POC tools closed by default (open with POC tools button or `).
* **Changed:** Guided task: tap an option = next step (no Next button, fewer taps).
* **Changed:** Task card centred with stacked papers for next steps (clear what’s left).
* **Added:** Large “Previous step” card on the left (easy way back on tablet).
* **Changed:** Typing steps use Continue inside the card; Enter also works.
* **Removed:** Bottom Next bar (more focus).

## [2.6.0] - 2026-10-20
* **Fixed:** Guided task keeps the Home header (no full-screen takeover).
* **Changed:** Guided task opens as a page under the header, like AI Room (familiar layout).
* **Changed:** Cancel → “Cancel · back to Home” link (clear exit).
* **Added:** Screenshot mode `?shot=` for the storyboard (consistent captures).
* **Added:** Storyboard deck for v2.6 (screen-by-screen description).

## [2.5.0] - 2026-10-20
* **Added:** Guided task from the to-do list: Next / Back / Cancel only (one task, no distraction).
* **Added:** Type, upload or Speak in each step (simple input).
* **Added:** Guided flows: products (one / CSV), documents (file / URL / failed file), test + answers, install, reply, stock, fix document (all to-do tasks covered).
* **Changed:** To-do no longer opens full menu pages (no tables, filters or CRUD).
* **Changed:** All menus and Ask Ganes keep the full menu pages (2 clear ways in).

## [2.4.0] - 2026-10-20
* **Added:** Task buttons open the matching menu (finish tasks for real).
* **Added:** Task bar on menu pages with instruction (clear what to do).
* **Added:** Auto-complete when the action is done there (no manual marking).
* **Added:** Return to Home with step checked + next task (continuous flow).
* **Added:** Mark as done / Do it later on the task bar (demo fallback).
* **Changed:** Home progress saved across pages (no lost state).

## [2.3.0] - 2026-10-20
* **Changed:** Menu data → Gelora Sport (one store everywhere).
* **Changed:** Products: Pacer Lite, Court Zero Low, Jersey Tim Custom + sport categories (matches Home tasks).
* **Changed:** Knowledge Base: Kebijakan Retur, Info Pengiriman, Promo Cicilan (failed), FAQ (matches Home).
* **Changed:** Conversations, Members & Chat Simulator (Mira) → Gelora Sport (realistic demo).
* **Changed:** Menu pages use Home v2.1 style: font, colours, buttons, cards (consistent UI).
* **Added:** Home header + breadcrumb on every menu page (same navigation everywhere).
* **Added:** Profile menu on menu pages (App Settings always reachable).
* **Removed:** Dark theme toggle in menus (one calm theme).
* **Added:** changelog.md (track each version).

## [2.2.0] - 2026-10-20
* **Added:** One page per menu, linked from Home (lighter files).
* **Added:** Menu flows from Chat Menus POC, incl. Add product Manual & Bulk (real flows).
* **Added:** Back returns to Home with last scenario (smooth demo).

## [2.1.0] - 2026-10-19
* **Changed:** POC tools → dark side panel (same as Chat Menus POC).
* **Changed:** Gesture panel in task list, frames G1–G6 (matches storyboard).
* **Added:** Gesture setup 2 min + Play flow A/B/C (live demo).

## [2.0.0] - 2026-10-19
* **Added:** Home prototype: 9 scenarios, voice, All menus, AI Room, Profile (first full demo).
