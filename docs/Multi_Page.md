Great. Here is the **Full Multi-Page Spec Pack** for the remaining pages so engineers or a coding agent can build the full site consistently.

For implementation, **Next.js App Router** is still the strongest recommendation because Next.js officially describes itself as a React framework for building full-stack web applications, recommends the App Router for the latest features, and documents deployment on a Node.js server, Docker, static export, or platform adapters. ([Next.js][1])

---

# Stem Website — Multi-Page Spec Pack v1

## 1. Scope of this document

This document covers deep implementation specs for:

* Platform page
* Solutions page
* Use Cases page
* About page
* Insights page
* Contact / Request a Scoping Call page

Each page spec includes:

* page purpose
* audience
* section order
* section-level requirements
* layout and behavior notes
* responsive guidance
* component requirements
* acceptance criteria

This pack should be used together with:

* Phase 1 Strategic Brief
* Global Page & Section Documentation
* Home Page Deep Spec

---

# 2. Shared page-level standards

## Shared design rules

All pages should follow the same system:

* white / off-white premium surfaces
* dark ink typography
* disciplined blue accents
* strong spacing
* calm motion
* no generic AI visual clichés
* every page should have a clear CTA

## Shared content rules

Every page must:

* speak to the customer first
* keep paragraphs short
* avoid feature dumping
* connect product detail to buyer outcome
* preserve StoryBrand logic

StoryBrand’s official materials frame the method as a 7-part structure that helps clarify the message and move customers through the buying journey, which is why each page here keeps the customer’s problem and desired outcome in focus rather than making the company the hero. ([StoryBrand][2])

## Shared technical rules

* build reusable components
* make content data-driven where practical
* animations must support the narrative
* reduced-motion support required
* page sections should be independently maintainable

---

# 3. PLATFORM PAGE DEEP SPEC

## 3.1 Page overview

### Route

`/platform`

### Primary purpose

Explain how Stem works in more depth after the homepage has created interest.

### Primary user intent

A buyer wants to understand:

* what the product actually does
* how signals become intelligence
* why Stem is different from dashboards or raw monitoring tools
* what outputs their team would actually get

### Primary CTA

Request a Scoping Call

### Secondary CTA

See Use Cases

## 3.2 Narrative role

The Platform page answers:
**“What is this system, how does it work, and why should I trust it?”**

It should deepen clarity, not overwhelm.

## 3.3 Section order

1. Platform hero
2. Platform overview / product summary
3. How Stem works
4. Core capabilities
5. Signal lineage and trust
6. Outputs and workflow fit
7. Platform architecture / integration readiness
8. CTA

---

## Section 1 — Platform Hero

### Goal

Frame Stem in product language while keeping it outcome-oriented.

### Required content

* eyebrow
* H1
* subheadline
* CTA row
* product visualization or conceptual UI

### Recommended eyebrow

Decision Intelligence Platform

### Heading direction

**A decision intelligence platform built for external-world visibility.**

### Subheadline direction

Stem helps strategy and growth teams detect meaningful market changes, synthesize fragmented signals, and turn ambiguity into defensible decisions.

### CTA row

* Request a Scoping Call
* See Use Cases

### Visual requirement

Use either:

* product UI concept
  or
* system architecture visualization

### Acceptance criteria

Buyer understands that Stem is a platform, not a services-only company and not a generic dashboard.

---

## Section 2 — Platform Overview / Product Summary

### Goal

Provide a short, plain-language explanation of what the platform does.

### Required content

* section heading
* 2–3 short explanatory blocks
* optional mini visual

### Heading

**What Stem does, in simple terms.**

### Content logic

Explain:

* Stem watches meaningful external signals
* detects important change
* adds context and prioritization
* delivers decision-ready outputs

### Layout

Two-column recommended:

* explanatory copy left
* simple product concept visual right

### Acceptance criteria

A non-technical strategy buyer should understand the product model without reading a long document.

---

## Section 3 — How Stem Works

### Goal

Break down the operating flow of the platform clearly.

### Required subsections

1. Ingest
2. Detect
3. Synthesize
4. Prioritize
5. Deliver

### Heading

**How Stem turns fragmented signals into usable intelligence.**

### Content requirements per step

Each step must include:

* short title
* one-sentence explanation
* optional product state / UI panel
* optional example

### Example structure

**Ingest**
Stem monitors the markets, entities, and signal categories your team needs to follow.

**Detect**
The system identifies meaningful changes across competitors, policy, pricing, and category movement.

**Synthesize**
Signals are grouped and interpreted so teams can understand what changed and why it matters.

**Prioritize**
Important shifts are surfaced above background noise.

**Deliver**
Teams receive decision-ready outputs they can review, share, and act on.

### Desktop behavior

Horizontal process flow or sectioned vertical rhythm

### Mobile behavior

Vertical stack only

### Engineering notes

This section should be data-driven.
Could be a reusable `ProcessFlow` component.

### Acceptance criteria

Process feels clear, credible, and not overcomplicated.

---

## Section 4 — Core Capabilities

### Goal

Show what the platform can do without turning the page into a feature dump.

### Required capabilities

* competitor monitoring
* market change detection
* policy / risk monitoring
* signal prioritization
* intelligence summaries
* decision support outputs

### Heading

**Core capabilities for teams working in fast-moving markets.**

### Layout

Card grid with grouped capability families

### Suggested grouping

**Monitoring**

* competitor activity
* policy and risk shifts
* market / category movement

**Intelligence**

* synthesis
* prioritization
* context and lineage

**Decision support**

* alerts
* summaries
* recommended next-step framing

### Engineering notes

Cards should support icon, title, text, optional link.

### Acceptance criteria

The section feels structured and premium, not like a random checklist.

---

## Section 5 — Signal Lineage and Trust

### Goal

Differentiate Stem from black-box AI and unreliable signal feeds.

### Messaging objective

Explain why buyers can trust the output.

### Heading

**Signals are more useful when teams can trust where they came from.**

### Required proof themes

* source lineage
* contextual interpretation
* confidence through traceability
* less black-box uncertainty

### Content structure

* intro copy
* 3 trust cards
* optional annotated UI mock

### Trust cards

1. Know what changed
2. Know why it matters
3. Know where the signal came from

### Visual idea

Annotated “decision signal” panel showing:

* source references
* change summary
* category tag
* urgency / importance

### Acceptance criteria

The buyer should leave this section feeling Stem is interpretable, not magic.

---

## Section 6 — Outputs and Workflow Fit

### Goal

Show what teams actually receive and how it fits into their decision process.

### Heading

**Outputs built for recommendations, not just observation.**

### Required outputs

* alerts
* summaries
* signal dashboards or monitored views
* decision-ready updates
* shareable outputs for leadership

### Layout

Left: output types
Right: workflow outcome explanation

### Messaging

Focus on:

* faster internal recommendations
* less manual synthesis
* better leadership communication
* more defensible decisions

### Acceptance criteria

This section ties the product back to day-to-day work.

---

## Section 7 — Platform Architecture / Integration Readiness

### Goal

Show that the platform can fit real team workflows.

### Important note

Do not overclaim infrastructure detail if not finalized. Keep language modular.

### Heading

**Built to fit real monitoring and decision workflows.**

### Content themes

* configurable monitoring scope
* priority entities / markets / categories
* scalable workflows
* adaptable to team needs
* internal-goal + external-signal alignment

### Optional content

If product is ready:

* source connectors
* export / reporting workflows
* team collaboration flows

### Acceptance criteria

This section should communicate operational seriousness without inventing features.

---

## Section 8 — CTA

### Heading

**See how Stem could fit your decision environment.**

### Supporting copy

Tell us what your team needs to monitor, assess, or act on. We’ll show you how the platform can support that workflow.

### CTA

Request a Scoping Call

---

## Platform page acceptance checklist

* product category is clear
* process is easy to follow
* capabilities are organized
* trust differentiator is visible
* outputs feel practical
* page ends with clear CTA

---

# 4. SOLUTIONS PAGE DEEP SPEC

## 4.1 Page overview

### Route

`/solutions`

### Primary purpose

Frame Stem around customer outcomes and business problems, not platform modules.

### Primary user intent

A buyer wants to know:

* what business problem Stem solves
* why the problem matters
* what outcomes improve
* whether Stem is relevant to their role

### Primary CTA

Request a Scoping Call

### Secondary CTA

See Platform

## 4.2 Narrative role

The Solutions page answers:
**“What problems does Stem help solve, and why should I care?”**

## 4.3 Section order

1. Solutions hero
2. Problem landscape
3. Solution pillars
4. Outcome blocks
5. Buyer-role relevance
6. Why now
7. CTA

---

## Section 1 — Solutions Hero

### Goal

Set up the page as outcome-first.

### Heading

**Solutions for teams making external decisions under uncertainty.**

### Subheadline

Stem helps strategy, growth, and leadership teams reduce blind spots, improve timing, and make better market decisions with less manual research.

### CTA

Request a Scoping Call

### Acceptance criteria

The page feels customer-problem-led from the start.

---

## Section 2 — Problem Landscape

### Goal

Describe the real-world problems the buyer is facing.

### Heading

**The problem is not a lack of data. It is a lack of usable clarity.**

### Problem blocks

* signals are fragmented
* important changes are easy to miss
* manual synthesis is slow
* recommendations are harder to defend
* teams react later than they should

### Layout

Stacked issue cards or bento grid

### Acceptance criteria

Buyer feels understood and the page avoids vague language.

---

## Section 3 — Solution Pillars

### Goal

Map Stem’s value into clear solution themes.

### Recommended pillars

1. Reduce strategic blind spots
2. Move faster on market change
3. Improve recommendation quality
4. Reduce manual research load
5. Increase confidence in external decisions

### Layout

Five premium cards or tabbed solution families

### Each pillar should include

* problem
* what Stem changes
* outcome

### Acceptance criteria

Pillars are outcome-led and commercially meaningful.

---

## Section 4 — Outcome Blocks

### Goal

Help buyers imagine the results.

### Heading

**What improves when teams can see what matters earlier.**

### Required outcome themes

* earlier detection
* faster response
* stronger recommendations
* less uncertainty
* better timing
* improved leadership confidence

### Layout

Quote-style outcome statements, metrics placeholders, or outcome cards

### Acceptance criteria

The section feels strategic and aspirational without sounding inflated.

---

## Section 5 — Buyer-Role Relevance

### Goal

Show how the platform matters to different decision-makers.

### Recommended roles

* Strategy Lead
* Growth / Expansion Lead
* Founder / CEO
* Intelligence / Research Lead

### Layout

Tabs or role cards

### Each role panel should contain

* what they are responsible for
* what usually goes wrong
* how Stem helps
* what gets better

### Acceptance criteria

A visitor can quickly find their role and connect to the value.

---

## Section 6 — Why Now

### Goal

Increase urgency without sounding alarmist.

### Heading

**In fast-moving markets, delayed clarity becomes real exposure.**

### Content themes

* market conditions change fast
* competitors do not wait
* policy movement matters
* internal teams still need recommendations quickly

### Acceptance criteria

Section creates urgency grounded in decision reality.

---

## Section 7 — CTA

### Heading

**Explore the solution around the decisions your team is already making.**

### CTA

Request a Scoping Call

---

## Solutions page acceptance checklist

* problem-first framing is clear
* solution pillars are outcome-focused
* role relevance is strong
* urgency is real but controlled
* CTA is consistent

---

# 5. USE CASES PAGE DEEP SPEC

## 5.1 Page overview

### Route

`/use-cases`

### Primary purpose

Show the most valuable decision workflows Stem supports.

### Primary user intent

A buyer wants to know:

* what specific tasks Stem helps with
* how it applies to real workflows
* whether it maps to their team’s priorities

### Primary CTA

Request a Scoping Call

### Secondary CTA

See Platform

## 5.2 Narrative role

The Use Cases page answers:
**“What can my team actually use this for?”**

## 5.3 Section order

1. Use Cases hero
2. Use case index / overview
3. Individual use case blocks
4. Cross-use-case value summary
5. CTA

---

## Section 1 — Use Cases Hero

### Heading

**Use cases for teams that cannot afford to miss what is changing.**

### Subheadline

Stem helps teams monitor competitor movement, market shifts, policy changes, and expansion signals so they can make better calls faster.

### CTA

Request a Scoping Call

---

## Section 2 — Use Case Index / Overview

### Goal

Provide a fast scan of the main use cases.

### Required cards

* Competitor tracking
* Market / category monitoring
* Policy / risk monitoring
* Expansion / market-entry support

### Interaction

Clicking a card scrolls to or swaps in the full detail section

### Acceptance criteria

Visitor can see the use-case map in a few seconds.

---

## Section 3 — Individual Use Case Blocks

Each use case should follow one standard structure.

### Standard use case structure

* use case title
* business question
* current pain
* how Stem helps
* what output the team gets
* what decision improves
* expected outcome

---

### Use Case A — Competitor Tracking

#### Business question

What are competitors changing that we cannot afford to miss?

#### Current pain

Important competitor moves are scattered across announcements, pricing changes, public signals, and category chatter.

#### How Stem helps

Stem tracks relevant entities, detects meaningful movement, and highlights the competitive changes that deserve attention.

#### Output examples

* competitor shift alert
* launch summary
* pricing movement update
* prioritized signal recap

#### Decision improved

Positioning, timing, response planning, internal recommendation quality

#### Outcome

Less surprise, faster response, stronger strategic awareness

---

### Use Case B — Market / Category Monitoring

#### Business question

What is shifting in the market that affects how we should act?

#### Current pain

Category movement is hard to track in one place and often becomes clear only after the window to act has narrowed.

#### How Stem helps

Stem synthesizes market signals, category changes, and emerging patterns into usable intelligence.

#### Outputs

* market trend summary
* category signal feed
* change detection brief

#### Decision improved

Timing, prioritization, category focus, strategic planning

#### Outcome

Earlier visibility into meaningful market change

---

### Use Case C — Policy / Risk Monitoring

#### Business question

What changes in policy, regulation, or external risk should influence our next move?

#### Current pain

Teams often hear about policy shifts too late or without enough context to interpret the impact.

#### How Stem helps

Stem surfaces important policy and risk changes, connects them to monitored categories or entities, and supports faster assessment.

#### Outputs

* policy change alert
* risk summary
* monitored development brief

#### Decision improved

Risk posture, response timing, internal briefing, scenario planning

#### Outcome

Reduced exposure and faster reaction to important external changes

---

### Use Case D — Expansion / Market-Entry Support

#### Business question

Is this the right time to move, wait, or investigate further?

#### Current pain

Expansion decisions are often shaped by fragmented external signals and weak synthesis.

#### How Stem helps

Stem helps teams monitor the signals that influence timing, readiness, competitive movement, and external viability.

#### Outputs

* monitored market summary
* opportunity shift brief
* change-based decision support signal

#### Decision improved

Expansion timing, market-entry planning, opportunity assessment

#### Outcome

Better-timed growth decisions with more defensible reasoning

---

## Section 4 — Cross-Use-Case Value Summary

### Goal

Pull the page back into one unified story.

### Heading

**Across every use case, the value is the same: clearer signals, faster judgment, better decisions.**

### Content themes

* less manual monitoring
* fewer blind spots
* faster synthesis
* stronger recommendations
* improved timing

### Acceptance criteria

The page feels unified, not like disconnected feature examples.

---

## Section 5 — CTA

### Heading

**Bring Stem into the decisions your team is already under pressure to make.**

### CTA

Request a Scoping Call

---

## Use Cases page acceptance checklist

* use cases are concrete and buyer-relevant
* each use case ties to a decision
* outputs are practical
* page stays concise and scannable
* CTA remains visible and consistent

---

# 6. ABOUT PAGE DEEP SPEC

## 6.1 Page overview

### Route

`/about`

### Primary purpose

Build trust, explain mission, and establish why Stem exists without making the company the hero.

### Primary user intent

A visitor wants to know:

* what kind of company Stem is
* why it exists
* what it believes
* whether it understands the market deeply

### Primary CTA

Request a Scoping Call

### Secondary CTA

See Platform

## 6.2 Narrative role

The About page answers:
**“Why does this company exist, and should I trust its perspective?”**

## 6.3 Section order

1. About hero
2. Why Stem exists
3. The problem we believe needs solving
4. What we believe
5. Founding perspective / team
6. Closing CTA

---

## Section 1 — About Hero

### Heading

**Built for teams making difficult decisions in fast-moving markets.**

### Subheadline

Stem exists to help teams reduce blind spots, cut through fragmented signals, and make external decisions with more confidence.

### Acceptance criteria

Page begins with mission, not self-congratulation.

---

## Section 2 — Why Stem Exists

### Goal

State the founding reason clearly.

### Heading

**Why we built Stem.**

### Messaging themes

* important market decisions are often made with incomplete visibility
* under-instrumented markets deserve better intelligence systems
* teams need usable clarity, not more noise

### Layout

Narrative text block plus supporting visual or short principles

### Acceptance criteria

A buyer sees the company’s purpose in the context of their own challenge.

---

## Section 3 — The Problem We Believe Needs Solving

### Goal

Reinforce worldview and problem framing.

### Heading

**Too many important decisions are still made half-blind.**

### Content themes

* fragmented external data
* inconsistent trust in sources
* delayed synthesis
* hard-to-defend recommendations

### Acceptance criteria

This section strengthens trust by showing clear market understanding.

---

## Section 4 — What We Believe

### Goal

Turn the brand worldview into memorable principles.

### Recommended principles

* important decisions should not depend on scattered intelligence
* teams deserve signals they can interpret and defend
* fast-moving markets require systems built for real-world ambiguity
* intelligence should support action, not clutter

### Layout

Principle cards or editorial statements

### Acceptance criteria

This section feels thoughtful and brand-defining.

---

## Section 5 — Founding Perspective / Team

### Goal

Humanize the brand without making the page about biographies.

### Content options

* short founder note
* team principles
* market perspective
* operating philosophy

### Important note

Keep this concise.
Do not let long bios take over the page.

### Acceptance criteria

Readers get enough credibility and personality without losing the customer-centered narrative.

---

## Section 6 — Closing CTA

### Heading

**See how Stem could support your team’s decision environment.**

### CTA

Request a Scoping Call

---

## About page acceptance checklist

* customer relevance remains strong
* mission feels real
* market worldview is clear
* trust is increased
* page does not become self-centered

---

# 7. INSIGHTS PAGE DEEP SPEC

## 7.1 Page overview

### Route

`/insights`

### Primary purpose

Support thought leadership, SEO, and transitional conversion.

### Primary user intent

A visitor wants:

* useful market thinking
* reports
* proof of expertise
* ongoing insight into Stem’s domain

### Primary CTA

Download report or read content

### Secondary CTA

Request a Scoping Call

## 7.2 Narrative role

The Insights page answers:
**“Does this company understand the market deeply enough to trust?”**

## 7.3 Section order

1. Insights hero
2. Featured report / flagship content
3. Latest articles or briefs
4. Content categories
5. Newsletter or report CTA
6. Scoping call CTA

---

## Section 1 — Insights Hero

### Heading

**Market intelligence for teams navigating change.**

### Subheadline

Read reports, briefs, and market observations designed to help strategy and growth teams make better external decisions.

### Acceptance criteria

The page feels useful, not promotional-first.

---

## Section 2 — Featured Report / Flagship Content

### Goal

Promote the most valuable content asset.

### Recommended flagship asset

**State of Fintech Intelligence**
or equivalent report

### Content requirements

* title
* short summary
* cover visual
* download CTA

### Layout

Large featured module at top

### Acceptance criteria

This asset feels like a serious transitional CTA, not filler.

---

## Section 3 — Latest Articles / Briefs

### Goal

Show current thinking and create a content rhythm.

### Content types

* market briefs
* category notes
* competitor analysis perspectives
* policy watch commentary
* signal interpretation articles

### Layout

Card grid

### Card fields

* title
* category
* publish date
* short excerpt
* read link

### Acceptance criteria

The page looks alive and credible even with a small number of posts.

---

## Section 4 — Content Categories

### Goal

Improve browsing and help content scale later.

### Suggested categories

* Fintech
* Competition
* Market Shifts
* Policy / Risk
* Expansion
* Decision Intelligence

### Acceptance criteria

Content can be filtered or grouped cleanly.

---

## Section 5 — Newsletter / Report CTA

### Goal

Capture lower-intent visitors.

### Heading

**Get intelligence your team can actually use.**

### Options

* report download
* email signup
* latest briefing signup

### Important note

If email capture is not ready, use report CTA only.

---

## Section 6 — Scoping Call CTA

### Goal

Convert readers who are ready for commercial conversation.

### Heading

**When insight needs to become action, start with a scoping call.**

### CTA

Request a Scoping Call

---

## Engineering notes for Insights

For v1, this can be simple:

* static content
* MDX
* or headless CMS later

Next.js documents App Router support and modern page architecture, which makes it a good fit for a site that starts with static marketing content and later expands into richer content workflows. ([Next.js][3])

---

## Insights page acceptance checklist

* page supports thought leadership
* featured report is prominent
* article cards are reusable
* content categories are scalable
* transitional CTA is meaningful

---

# 8. CONTACT / REQUEST A SCOPING CALL PAGE DEEP SPEC

## 8.1 Page overview

### Route

`/contact`
or
`/request-a-scoping-call`

### Primary purpose

Convert high-intent traffic into qualified conversations.

### Primary user intent

The buyer is ready to engage and wants a low-friction next step.

### Primary CTA

Submit scoping call request

## 8.2 Narrative role

This page answers:
**“What happens if I want to talk to Stem?”**

## 8.3 Section order

1. Hero
2. Why book a scoping call
3. Form
4. Expectations / FAQ
5. Optional alternate contact block

---

## Section 1 — Hero

### Heading

**Start with a conversation focused on your decision environment.**

### Subheadline

Tell us what your team is trying to track, assess, or decide. We’ll show you how Stem could fit your workflow.

### Acceptance criteria

The page feels strategic and welcoming, not salesy.

---

## Section 2 — Why Book a Scoping Call

### Goal

Set expectations and reduce friction.

### Heading

**What this conversation is for.**

### Recommended bullets or cards

* understand your decision environment
* identify high-value monitoring needs
* map relevant use cases
* assess fit and next steps

### Acceptance criteria

User knows what they will get from the conversation.

---

## Section 3 — Form

### Goal

Capture the right context for qualification.

### Required fields

* Full name
* Work email
* Company
* Role
* What are you trying to understand, monitor, or improve?
* Optional dropdown: primary use case
* Optional dropdown: company type / segment

### Recommended use-case dropdown values

* Competitor tracking
* Market monitoring
* Policy / risk monitoring
* Expansion support
* Other

### Form UX requirements

* clear labels
* inline validation
* strong success state
* low-friction
* not too many fields

### Submission behavior

* success confirmation message
* optional calendar scheduling next step
* CRM / email integration later if needed

### Acceptance criteria

Form is easy to complete on mobile and desktop.

---

## Section 4 — Expectations / FAQ

### Goal

Answer common hesitation points.

### Suggested questions

* Who is this for?
* What happens after I submit?
* Do I need to have everything defined already?
* Can we discuss a specific use case?

### Layout

Accordion

### Acceptance criteria

This section reduces uncertainty and improves submission confidence.

---

## Section 5 — Optional Alternate Contact Block

### Goal

Provide a softer path if the visitor is not ready.

### Options

* email link
* insights page link
* report download

### Acceptance criteria

The page supports lower-intent users without distracting from the main CTA.

---

## Contact page acceptance checklist

* page feels low-friction
* form is clean and strategic
* expectations are clear
* mobile completion is easy
* success state is well handled

---

# 9. Recommended component additions for inner pages

Beyond the homepage components, engineers should create:

* `PageHero`
* `ProcessFlow`
* `CapabilityCard`
* `UseCaseDetailBlock`
* `RoleValueTabs`
* `PrincipleCard`
* `ArticleCard`
* `FeaturedReportPanel`
* `FaqAccordion`
* `InquiryForm`

These components should be reusable and content-driven.

---

# 10. Suggested route map

Recommended routes:

* `/`
* `/platform`
* `/solutions`
* `/use-cases`
* `/about`
* `/insights`
* `/request-a-scoping-call`

Optional aliases:

* `/contact` → redirect to `/request-a-scoping-call`

Next.js documents file-based routing in the App Router, which makes this route structure straightforward to organize under the `app` directory. ([Next.js][3])

---

# 11. Data / content modeling guidance

To keep the build maintainable, content should be separated from layout where possible.

## Recommended content-driven structures

Use arrays/objects for:

* nav items
* solution pillars
* use cases
* trust principles
* buyer roles
* report cards
* article cards
* FAQ items

This will make:

* content updates easier
* future CMS migration simpler
* iteration faster for copy changes

---

# 12. Inner-page responsive guidance

## Desktop

* generous whitespace
* strong two-column hero layouts where useful
* card grids and tabbed layouts

## Tablet

* reduce width of diagrams
* stack where needed
* preserve hierarchy

## Mobile

* prioritize readability over novelty
* tabs can become accordions
* diagrams become vertical
* forms must be effortless to complete
* CTA remains visible and clear

---

# 13. Inner-page motion guidance

Keep motion lighter than the homepage.

## Allowed

* reveal transitions
* line draw for process graphics
* tab transitions
* card hover polish
* accordion motion

## Avoid

* repeating the hero-level particle metaphor everywhere
* competing animations across multiple sections
* large auto-playing motion blocks on mobile

---

# 14. SEO and metadata guidance by page

## Platform

Target themes:

* decision intelligence platform
* external intelligence platform
* signal intelligence for fintech

## Solutions

Target themes:

* reduce strategic blind spots
* faster market decisions
* external decision support

## Use Cases

Target themes:

* competitor monitoring
* policy monitoring
* market intelligence workflows
* expansion decision support

## About

Target themes:

* Stem mission
* decision intelligence company
* market visibility for fast-moving markets

## Insights

Target themes:

* fintech intelligence
* market intelligence Nigeria
* competitor and policy insights

## Contact

Target themes:

* request a scoping call
* decision intelligence consultation

---

# 15. Engineering sequence recommendation

## Build order

1. global layout and route scaffold
2. Platform page
3. Solutions page
4. Use Cases page
5. Contact page
6. About page
7. Insights page

Why this order:

* Platform, Solutions, and Use Cases support the primary sales story first
* Contact page supports conversion
* About and Insights can follow without blocking the core funnel

---

# 16. Full-site acceptance criteria

The full site handoff is complete when:

* every page has a clear role
* every page supports the same strategic narrative
* no page drifts into generic SaaS messaging
* all key decision-maker questions are answered somewhere in the site
* CTA behavior is consistent across pages
* responsive layouts are polished
* motion remains optional and meaningful
* components are reusable
* content structure is maintainable

---

# 17. Final note to engineers / coding agents

This website should not feel like a generic AI startup site.

It should feel like:

* a premium decision-intelligence brand
* built for serious operators
* focused on market clarity
* grounded in business risk and timing
* calm, precise, and strategic

The unifying message across all pages is:

**Stem helps teams detect what matters, understand why it matters, and decide whether to act now.**