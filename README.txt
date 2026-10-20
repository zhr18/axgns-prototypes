AX GANES V.2 · Prototype v2.2 (Owner · Retail · Gelora Sport)

Open index.html (Home). Menus open their own page:
  conversations.html  ->  Conversations
  chat-simulator.html  ->  Chat Simulator
  knowledge-base.html  ->  Knowledge Base
  products.html  ->  Products
  members.html  ->  Members
  discovery-readiness.html  ->  Discovery Readiness
  chatbot-flow.html  ->  Chatbot Flow
  add-ons.html  ->  Add-ons
  ai-service.html  ->  AI Service
  billing.html  ->  Billing
  settings.html  ->  Settings
  profile.html  ->  Profile

Structure
  index.html                Home (v2.1 scenarios + POC tools)
  <menu>.html               one page per menu (thin wrapper)
  assets/poc/ganes-poc.html  shared menu app (from AX_GANES_Chat_Menus_POC.html, embed mode)
  assets/css/custom.css     shared styles for menu pages
  assets/js/main.js         shared script (frame scaling, back to Home)
  assets/images/            images & icons (empty for now)

Edit a menu's flow/UI once in assets/poc/ganes-poc.html; every menu page uses it.

v2.3: Gelora Sport data in all menus · Home design system on menu pages · see changelog.md

v2.7: guided task = tap to continue, stacked cards, Previous step card · POC tools closed by default.

v2.9: start at login.html (demo: andi@gelorasport.id · Gelora2026! · code 123456) or index.html (Home).
