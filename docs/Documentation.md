Yes. The next thing is the **Page and Section Documentation**.

This is the document engineers or a coding agent should use to understand:

* what pages to build
* what each page is trying to achieve
* what sections go on each page
* what each section must communicate
* what components and interactions are needed
* what content hierarchy to follow
* what not to do

For the build stack, a modern marketing site like this is well suited to **Next.js**, which Next.js describes as a React framework for building full-stack web applications, and it can be deployed either on a Node.js host or on Vercel. Next.js also documents that deployments can run as a Node.js server, Docker container, static export, or with platform adapters, while Vercel provides zero-config support and preview deployments for Next.js projects. ([Next.js][1])

Below is the **engineer-ready v1 document**.

---

# Stem Website — Page & Section Documentation v1

## 1. Project overview

### Project name

**Stem-Cogent Marketing Website**

### Website type

Premium B2B marketing website for an AI-powered decision intelligence platform

### Primary business goal

Generate qualified inbound conversations from decision-makers in mid-market fintech and financial-services companies in Nigeria

### Primary conversion goal

**Request a Scoping Call**

### Secondary conversion goal

**See How It Works**

### Transitional conversion goal

**Download fintech intelligence report / insight brief**

### Primary audience

* Strategy Leads
* Growth / Expansion Leads
* Founder / CEOs of smaller mid-market firms

### Secondary audience

* Research / Intelligence Leads
* Operations Leads affected by external-market changes

### Core narrative

The market is noisy and fragmented. Important decisions are being made half-blind. Stem helps teams detect what matters early, understand why it matters, and act with defensible intelligence.

### Messaging framework

StoryBrand SB7:

* customer is the hero
* Stem is the guide
* the problem is fragmented and unreliable external intelligence
* the plan is simple
* the action is clear
* the stakes are visible
* the outcome is proactive, defensible decision-making

StoryBrand’s official materials describe this as a 7-part messaging framework built to clarify the message and trigger the buyer’s journey. ([StoryBrand][2])

---

# 2. Global product requirements

## 2.1 Brand palette

* Primary Blue: `#3563EB`
* Soft Background: `#F8FAFC`
* Deep Ink: `#111827`
* White: `#FFFFFF`

## 2.2 Design direction

* White, premium, spacious, modern
* Strong typography and high whitespace
* Minimal but sophisticated
* Motion should represent **noise becoming signal**
* Blue should be used intentionally, not everywhere

## 2.3 UX principles

* Clear hierarchy
* Fast comprehension
* Minimal cognitive load
* Customer-first copy
* Every page must have a clear CTA
* Each section should answer one question only

## 2.4 Tone

* Strategic
* Calm
* Intelligent
* Precise
* Trusted
* Regionally grounded
* Not hype-heavy
* Not overly technical too early

## 2.5 Technical direction

### Recommended stack

* Next.js
* Tailwind CSS
* Framer Motion
* CMS optional, but not required for first build

## 2.6 Performance requirements

* Lighthouse performance target: high
* Minimal layout shift
* Motion must not block load
* Images optimized
* Scroll interactions lightweight
* Mobile performance must remain strong

## 2.7 Accessibility requirements

* Clear semantic structure
* Keyboard-navigable interactive elements
* Sufficient color contrast
* Motion reduction support
* All animations should degrade gracefully

---

# 3. Sitemap v1

## Required pages

1. Home
2. Platform
3. Solutions
4. Use Cases
5. About
6. Insights
7. Contact / Request a Scoping Call

## Optional pages for later

* Case Studies
* Security / Trust
* Resources hub
* Careers

---

# 4. Global layout documentation

## 4.1 Header

### Purpose

Persistent navigation and primary CTA

### Required elements

* Stem logo
* Navigation links
* Primary CTA button: Request a Scoping Call
* Mobile menu
* Optional small text link: See How It Works

### Behavior

* Transparent or minimal at top
* Becomes solid white on scroll
* Sticky after initial scroll threshold
* Smooth transitions
* On mobile: slide-in menu or sheet

## 4.2 Footer

### Purpose

Close with trust, navigation, and legal/support links

### Required elements

* Short brand statement
* Navigation columns
* CTA reminder
* Contact email / form link
* Social links if relevant
* Legal links
* Copyright

### Tone

Quiet, premium, clean

---

# 5. HOME PAGE DOCUMENTATION

## 5.1 Home page goal

The home page must do five things:

1. Tell the right buyer this is for them
2. Make the pain visible
3. Position Stem as the guide
4. Show a simple path
5. Push toward a scoping call

## 5.2 Home page structure

Recommended section order:

1. Hero
2. Stakes / Problem
3. Signal-to-Action Explanation
4. Core Benefits / Value Proposition
5. Three-Step Plan
6. Use Case Cluster
7. Proof / Trust
8. Final CTA

---

## Section 1 — Hero

### Goal

Instantly communicate the problem, audience relevance, and action

### Messaging job

Answer:

* What is Stem?
* Who is it for?
* Why should I care?
* What do I do next?

### Content requirements

* Eyebrow or small label:
  “Decision Intelligence for Fast-Moving Markets”
* H1 headline
* Supporting subheadline
* Primary CTA
* Secondary CTA
* Hero visual / animation

### Recommended headline territory

**Stop making high-stakes decisions half-blind.**

Alternative:
**Turn fragmented market signals into defensible decisions.**

### Recommended subheadline

Stem helps fintech and financial-services teams in Nigeria detect meaningful market changes early and act with more confidence, less guesswork, and less manual research.

### CTA

* Primary: Request a Scoping Call
* Secondary: See How It Works

### Visual requirements

Interactive premium signal visualization

### Animation behavior

* Background begins with dispersed dots/lines/nodes
* Motion subtly converges into a structured signal graphic
* Visual should imply scattered intelligence being synthesized
* Light-theme version only
* Blue used as highlight, not dominant wash

### Engineering notes

* Must be performant
* SVG / canvas / WebGL only if optimized
* Fallback static illustration required
* Respect reduced-motion preferences

---

## Section 2 — Stakes / Problem

### Goal

Make the pain feel concrete and expensive

### Messaging job

Show why fragmented intelligence is dangerous

### Content requirements

* Section heading
* Short supporting paragraph
* 3–4 pain cards or bento blocks

### Suggested heading

**The cost of a blind spot is rarely visible until it is expensive.**

### Card themes

* Missed competitor move
* Delayed expansion timing
* Weakly defended recommendation
* Regulatory / policy surprise

### UX requirements

Each card should feel serious and outcome-driven, not generic

### Visual direction

* Soft gray background blocks
* Clean iconography or subtle line illustrations
* Micro-motion on hover

### Engineering notes

* Bento grid desktop
* Stacked cards mobile
* Hover transitions should be subtle

---

## Section 3 — Signal-to-Action Engine

### Goal

Explain what Stem does in simple, visual terms

### Messaging job

Transform the abstract product into a legible concept

### Content requirements

* Section heading
* Plain-language explanation
* Interactive or semi-interactive system diagram

### Suggested heading

**From fragmented signals to decision-ready intelligence.**

### Diagram structure

Inputs on left:

* Competitors
* Market movement
* Pricing shifts
* Policy / regulation
* Category signals

Stem engine in center:

* detect
* synthesize
* prioritize
* contextualize

Outputs on right:

* alerts
* intelligence summaries
* decision signals
* recommended next steps

### Interaction concept

On hover or scroll:

* individual source nodes activate
* lines flow into Stem
* output card lights up
* sequence demonstrates transformation

### Engineering notes

* Could be built with SVG + motion
* Must not rely on long explanatory text alone
* Diagram should remain understandable on mobile

---

## Section 4 — Value Proposition / Benefits

### Goal

Translate product into buyer outcomes

### Messaging job

Explain why Stem matters, not just how it works

### Content requirements

4 to 6 benefit blocks

### Recommended benefit themes

* Detect meaningful changes earlier
* Reduce manual monitoring and synthesis
* Increase confidence in recommendations
* Track competitor, policy, and category movement in one place
* Understand signal context and lineage
* Shorten signal-to-action time

### Suggested heading

**Built to help teams move from noise to confident action.**

### Design direction

* Grid of premium cards
* Short copy, not paragraphs
* Optional small visual markers or mini diagrams

### Engineering notes

* Reusable card component
* Hover elevation only
* No complex interaction needed here

---

## Section 5 — The Three-Step Plan

### Goal

Reduce friction and make adoption feel simple

### Messaging job

Show a clear process

### Steps

1. Connect your sources
2. Detect meaningful signals
3. Act with defensible intelligence

### Suggested heading

**A simple path from fragmented inputs to better decisions.**

### Content requirements

Each step needs:

* number
* title
* one-sentence explanation

### Interaction

* Steps reveal on scroll
* Connecting line animation optional
* Each step can highlight as user scrolls

### Engineering notes

* Build as reusable timeline or step cards
* Works horizontally on desktop, vertically on mobile

---

## Section 6 — Use Case Cluster

### Goal

Show real applications relevant to the ICP

### Messaging job

Help buyers map Stem to their own workflows

### Required use cases

* Competitor tracking
* Market / category monitoring
* Risk / policy monitoring
* Expansion / market-entry support

### Suggested heading

**Designed for the decisions teams cannot afford to get wrong.**

### Interaction concept

Tabbed or card-based showcase

### For each use case include

* title
* short scenario
* what Stem detects
* what decision it supports
* what outcome improves

### Example format

**Competitor tracking**
Track meaningful launches, pricing changes, positioning shifts, and momentum changes before they become costly surprises.

### Engineering notes

* Tabs on desktop
* Accordions or stacked cards on mobile
* Keep copy concise and scannable

---

## Section 7 — Proof / Trust

### Goal

Reduce perceived risk

### Messaging job

Make Stem feel credible even before large customer logos exist

### Content options

* “Built for the next generation of Nigerian finance”
* founder expertise
* market realism angle
* source lineage / confidence explanation
* placeholder customer quotes later
* industry alignment statements

### Suggested heading

**Intelligence is only useful if teams trust it.**

### Required proof themes

* regional relevance
* interpretable outputs
* source lineage
* enterprise seriousness
* clear use-case fit

### Engineering notes

This section should support future expansion:

* customer logos later
* quotes later
* metrics later
* case studies later

Build it as modular content blocks, not hard-coded only for current content

---

## Section 8 — Final CTA

### Goal

Convert interest into action

### Messaging job

Summarize the promise and ask clearly

### Content requirements

* short closing headline
* 1–2 sentence reinforcement
* CTA button
* optional secondary CTA

### Suggested headline

**See what better market visibility could change for your team.**

### CTA

Request a Scoping Call

### Visual direction

* high-contrast but still minimal
* blue CTA button
* clean white or off-white background
* no noisy graphics here

---

# 6. PLATFORM PAGE DOCUMENTATION

## 6.1 Page goal

Explain how the product works in more depth without overwhelming the buyer

## 6.2 Audience

Interested buyers who want more product clarity after homepage validation

## 6.3 Sections

1. Platform hero
2. How Stem works
3. Core engine capabilities
4. Signal lineage / confidence
5. Workflow integration / outputs
6. CTA

---

## Section 1 — Platform Hero

### Goal

Define the platform in product language

### Suggested heading

**A decision intelligence platform built for external-world visibility.**

### Content

* platform summary
* product screenshot / conceptual UI
* CTA

---

## Section 2 — How Stem Works

### Goal

Walk through system logic simply

### Required subsections

* ingest
* detect
* synthesize
* prioritize
* deliver

### Format

Step-based explanatory layout with product visuals

---

## Section 3 — Core Capabilities

### Required capabilities

* competitor monitoring
* market change detection
* policy / risk signal monitoring
* signal prioritization
* intelligence summaries
* recommendation support

### Format

Card grid or grouped capabilities

---

## Section 4 — Signal Lineage / Confidence

### Goal

Differentiate Stem from black-box noise

### Content themes

* where signals came from
* why they matter
* context around changes
* confidence / traceability concept

### Importance

This is a strategic differentiator and should be treated as premium product proof

---

## Section 5 — Outputs & Team Workflows

### Goal

Show what teams actually receive

### Content themes

* prioritized alerts
* summaries
* monitored entities
* decision signals
* shareable outputs for leadership

### Interaction

Optional UI walkthrough or product slider

---

## Section 6 — CTA

Primary CTA: Request a Scoping Call

---

# 7. SOLUTIONS PAGE DOCUMENTATION

## 7.1 Page goal

Frame Stem by customer problem, not feature list

## 7.2 Recommended solution categories

* Reduce strategic blind spots
* Move faster on market changes
* Improve recommendation quality
* Reduce manual research load
* Increase confidence in external decisions

## 7.3 Structure

1. Solutions hero
2. Problem-to-outcome mapping
3. Solution blocks
4. Why it matters now
5. CTA

### Important note

This page should be outcome-first, not capability-first

---

# 8. USE CASES PAGE DOCUMENTATION

## 8.1 Page goal

Show specific high-value workflows

## 8.2 Structure

1. Use cases hero
2. Use case index
3. Individual use case sections
4. CTA

## 8.3 Required use cases

### 1. Competitor tracking

What changes are competitors making that require attention?

### 2. Market / category monitoring

What is shifting in the market that may affect timing or positioning?

### 3. Policy / regulatory monitoring

What policy changes might create exposure or opportunity?

### 4. Expansion / market-entry support

What signals suggest now is the right time, or not the right time, to move?

## 8.4 Individual use case section format

Each use case must include:

* business question
* current pain
* how Stem helps
* decision improved
* desired outcome

This page is useful for both buyers and sales enablement.

---

# 9. ABOUT PAGE DOCUMENTATION

## 9.1 Goal

Build trust without making the company the hero

## 9.2 Important rule

This page should not feel self-centered

## 9.3 Structure

1. About hero
2. Why Stem exists
3. The market problem we are solving
4. What we believe
5. Founding perspective / team
6. Closing CTA

## 9.4 Messaging priorities

* teams in under-instrumented markets deserve better decision systems
* important market decisions should not depend on scattered intelligence
* Stem exists to make external visibility more actionable and trustworthy

### Suggested heading

**Built for teams making difficult decisions in fast-moving markets.**

---

# 10. INSIGHTS PAGE DOCUMENTATION

## 10.1 Goal

Support thought leadership, SEO, and transitional CTAs

## 10.2 Content types

* reports
* market briefs
* insight articles
* category observations
* fintech intelligence commentary

## 10.3 Structure

1. Insights hero
2. Featured report
3. Latest articles
4. Category filters
5. CTA

## 10.4 Transitional CTA usage

This page is the best home for:
**Download the State of Fintech Intelligence report**

## 10.5 Engineering notes

Can launch simple:

* blog index
* featured article cards
* report download card

CMS can be added later if needed

---

# 11. CONTACT / SCOPING CALL PAGE DOCUMENTATION

## 11.1 Goal

Convert high-intent traffic

## 11.2 Structure

1. Hero
2. Why book a scoping call
3. Form
4. Optional FAQ / expectations block

## 11.3 Required form fields

* Name
* Work email
* Company
* Role
* What are you trying to understand or improve?
* Optional market / use-case dropdown

## 11.4 Messaging

The page should feel strategic and low-friction, not like a hard sales trap

### Suggested heading

**Start with a conversation focused on your decision environment.**

### Supporting copy

Tell us what your team is trying to track, assess, or decide. We’ll show you how Stem could fit your workflow.

---

# 12. Component documentation

## Required reusable components

* Header
* Footer
* Primary button
* Secondary button
* Section heading block
* Benefit card
* Use case card
* Testimonial / quote block
* CTA panel
* Bento card
* Step / timeline card
* Tabbed showcase
* Product diagram module
* Form fields
* Insight article card

## Button variants

* Primary: blue fill
* Secondary: white or subtle outline
* Tertiary: text link

## Card system

Cards should have:

* clean radius
* subtle border or shadow
* strong spacing
* hover lift only if appropriate

---

# 13. Motion documentation

## Motion goal

Support the story:
**fragmentation → synthesis → action**

## Motion principles

* subtle
* meaningful
* premium
* never distracting
* never block comprehension

## Motion types allowed

* fade + translate reveals
* line-draw animations
* pulse on detected signals
* blur-to-focus transitions
* step highlight transitions
* node convergence animations

## Motion types to avoid

* excessive particle chaos
* heavy parallax everywhere
* aggressive floating objects
* decorative movement with no narrative purpose

## Reduced motion requirement

All sections must remain fully functional and understandable with motion minimized or disabled

---

# 14. Copy rules for engineers and coding agents

## Copy hierarchy

Every section must include:

* eyebrow if needed
* heading
* short support text
* one clear CTA or next-step behavior

## Copy style rules

* short paragraphs
* no jargon overload
* no talking about AI first
* lead with buyer pain and outcome
* avoid vague phrases like “unlock value” unless backed by specifics

## The site must not sound like

* generic AI startup
* general analytics company
* dashboard company
* consulting deck

---

# 15. SEO and metadata requirements

## Home page target themes

* decision intelligence platform
* fintech intelligence
* competitor monitoring
* market intelligence Nigeria
* risk and policy monitoring
* expansion intelligence

## Metadata requirements

Each page must include:

* unique title
* unique meta description
* OG image support
* clean URL slug
* structured heading order

## Technical requirements

* semantic HTML
* sitemap
* robots
* canonical tags
* optimized images
* social share metadata

---

# 16. Engineering implementation notes

## Build recommendation

Use **Next.js App Router** unless the team has a strong reason otherwise.

### Why

* clean component architecture
* strong performance tooling
* modern deployment options
* good fit for marketing + future product site expansion

Next.js documents itself as a React framework for full-stack web apps, and Vercel documents dedicated support for Next.js features and preview deployment workflows. ([Next.js][1])

## Deployment recommendation

Two options:

### Option A

Domain on Hostinger, app hosted on Vercel, DNS pointed accordingly

### Option B

Host entirely on a Node-compatible Hostinger environment if the team wants a single provider

Next.js documents Node.js server deployment directly, while Vercel provides a streamlined zero-config option for Next.js. ([Next.js][3])

## Suggested folder thinking

* app routes by page
* components grouped by global/layout/sections/ui
* content config for page copy
* reusable section wrappers
* shared motion utilities

## CMS note

Do not block v1 on CMS.
Hardcode v1 content if needed.
Add CMS later when content volume justifies it.

---

# 17. Definition of done for v1

The website is ready for handoff acceptance when:

* all core pages are built
* home page clearly communicates value in under 10 seconds
* all primary CTAs work
* responsive behavior is complete
* animations are smooth and optional
* page speed is strong
* content hierarchy matches the documentation
* there is no generic filler copy
* every section supports the StoryBrand narrative

---

# 18. Priority order for build

## Phase A

* Global layout
* Home page
* Contact / Scoping Call page

## Phase B

* Platform page
* Solutions page
* Use Cases page

## Phase C

* About page
* Insights page

That order gets the highest-value pages live first.

---

# 19. Final instruction to engineering team

This is not a generic SaaS website.

The site must feel like a premium decision-intelligence brand for serious operators in fast-moving markets.

The homepage should tell this story clearly:

* the market is noisy
* your team is exposed
* Stem clarifies what matters
* you can act with confidence
* the next step is a scoping call

Every page and section should support that story.

---
