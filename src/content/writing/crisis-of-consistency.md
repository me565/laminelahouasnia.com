---
title: "Did the Market Change, or Did the AI Just Blink? The Crisis of Consistency in AI Desk Research."
description: "Ask an AI the same sizing question five times and you can get five different markets. In research, consistency is trust."
pubDate: "2025-12-01"
originalUrl: "https://www.linkedin.com/pulse/did-market-change-ai-just-blink-crisis-consistency-desk-lahouasnia-9atnc/"
---

I'll be honest: I use AI desk research all the time.

When I need a quick summary of a topic for a casual chat, or I'm brainstorming ideas for a blog post, or if I'm checking reviews for a restaurant date with my wife where the worst-case scenario is a mediocre meal... I happily accept the AI's answer.

In those moments, I can live with "sub-par." I can live with variability. The cost of being wrong is low.

But when I was an analyst, updating historical market sizes for a client's 5-year strategic forecast? That was a different world.

I knew that our clients were building multi-million dollar decisions on those numbers. I knew they had zero tolerance for mistakes and even less tolerance for unjustified changes. If I changed a historical figure, I had to be on my A-game. I would triple-check everything and prepare a "reasons for change" brief before I even touched the database.

This experience taught me that in market research, consistency is trust.

Today, many are considering handing this delicate task to AI, and we are often ignoring a critical flaw. We are so dazzled by the speed of the answer that we are blind to the volatility of the method.

## The "Slot Machine" Effect

We usually treat computers as deterministic machines: Input A always leads to Output B. A calculator doesn't change its mind about 2+2.

But Gen AI is probabilistic. It is a prediction engine, constantly rolling the dice to choose the next most likely word.

I call this the "Slot Machine Effect." You pull the lever (write a prompt), and you get a payout (an insight). If you pull the lever again with the exact same prompt, you might get a radically different payout.

We recently proved this with an internal stress test. We asked the same AI agents to size the exact same brands, with the exact same prompts, five times in a row. The results were sobering:

- For one brand ('Meiking'), the estimates ranged from $295 million to $1.2 billion.
- For another run, the AI confidently returned a market size of zero.
- The overall coefficient of variation across the test was over 100%.

If I had delivered those numbers as an analyst, I wouldn't just have faced an upset client; I would have been fired.

## Why This Destroys "Trend" Analysis

This variability is a silent killer for trend analysis.

In our work at Euromonitor International, we define markets by their direction of travel. Is the category growing or shrinking?

If your AI tool says a market is "growing rapidly" on Tuesday because it prioritised a bullish blog, but says it is "facing headwinds" on Wednesday because it prioritised a bearish report, you haven't measured the market. You've measured the AI's mood.

This gets worse with Model Drift. The companies behind these models are constantly tweaking them. A prompt that worked perfectly in February might yield a degraded result in March, not because your skills slipped, but because the model's weights shifted.

## The Missing Variable: Tribal Knowledge

So, how do we fix this? Technical fixes like "temperature settings" are important, but they aren't enough.

The root cause of the "Slot Machine Effect" is often a lack of context.

A generalist AI doesn't know how to size a niche market consistently. It doesn't know which sources to trust in Brazil vs. Japan. It doesn't know the rules. So, it guesses.

This is why I argue that consistency requires context.

To stop the variability, we have to do more than just tweak prompts. We have to encode our "tribal knowledge"—our 50 years of specialist logic—directly into the system.

When the AI knows the rules of the market (e.g., "always prioritise source A over source B for this category"), it stops guessing and starts calculating reliably. It anchors the probabilistic engine to a deterministic methodology.

## The Insight Engineer's Job: Building a "Test Harness"

This brings us back to the role of the "Insight Engineer."

A casual AI user accepts the first answer. An Insight Engineer demands reproducibility.

If we want to use AI for serious research, we have to stop treating it like a chat and start treating it like a laboratory experiment. This means:

- Freezing the Variables: Using API settings (like setting 'Temperature' to 0) to force the model to be as deterministic as possible.
- The "Golden Set" Validation: Creating a benchmark set of questions where we know the right answer. We run these repeatedly to check for drift.
- Triangulation by Default: Never relying on a single run. As our internal report concluded, we must implement "deterministic consolidation strategies"—running the query multiple times, removing the outliers (like the zeros and the billions), and triangulating the stable centre.

## Moving from "Vibes" to Science

The "Plausibility Trap" is about whether the data looks true. The "Consistency Crisis" is about whether the method is stable.

If we cannot reproduce a result, it's not research; it's an anecdote.

As we integrate these tools, we must be ruthless about consistency. We need to build systems that stabilise the "shaky camera" of AI so we can see the clear picture of the market.

My question to my network: Have you noticed "drift" in your AI results? How are you ensuring that your AI-powered insights are reproducible next month, not just plausible today?
