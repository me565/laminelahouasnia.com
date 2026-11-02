---
title: "The Economics of Agentic AI: Research versus Retrieval"
description: "Even flawless agents have an economics problem. Pay for research, not for agents clicking around to retrieve facts a data pipe could supply."
pubDate: "2026-03-18"
originalUrl: "https://www.linkedin.com/pulse/economics-agentic-ai-research-versus-retrieval-lamine-lahouasnia-myu7c/"
---

My recent posts have focused on the quality and reliability of AI in market research. I have looked at hallucinations, confirmation bias, and the reliability gap when using these tools to find facts.

I want us to assume that those issues are solvable. Imagine a near future where agentic tools never make a mistake. Even if an AI can flawlessly execute tasks, we still face a different problem: the economics.

## Screenshots and Doom Loops Burn Tokens

Watching new AI agents work is striking. Tools like Claude Cowork and Manus AI can take over a cursor, open a browser, log into a portal, click through menus, and pull data from a chart.

It looks like the future, but as we deploy these systems for daily use, we risk an economic misstep: confusing the cost of research with the cost of retrieval.

Research is high-value work. Combining different sources, cleaning up messy information, or checking conflicting reports justifies heavy computing power. If an AI agent navigates a screen or pieces together complex search results to do this, the token burn makes sense.

Retrieval is just fetching known facts or specific reports. What is the market volume for a category? Who are the top competitors? Using agentic workflows for basic retrieval is incredibly inefficient. Every step burns tokens. It is slow, expensive, and breaks easily.

## The $0.16 Data Fetch

Take a practical example in Singapore. I recently asked Claude to find the average resale price of HDB flats and how it has evolved since 2016.

It did not query a database directly. Instead, it ran multiple web searches. It found official HDB PDFs and extracted numbers from the search snippets. When it hit data gaps for the most recent months, it searched for news articles from property agencies and used their PR statements to estimate the missing figures. Finally, it wrote custom code to draw a chart.

To answer this one question, the system had to process over 35,000 tokens including massive background system instructions. That single exchange cost roughly $0.16 in API compute.

To a business leader paying human wages, 16 cents to skip 30 minutes of manual searching sounds like a bargain. But look at this at scale. If you automate this workflow to pull 10,000 data points for a weekly dashboard, you are burning money on brute-force reading.

Claude did exactly what a human analyst would do when a primary database runs dry: it estimated the missing figures based on news articles. That estimation is valuable research. The economic problem is how it retrieved the baseline numbers. Forcing an AI to piece together historical index data from PDF search snippets when that raw data exists in a structured format is a waste of compute and precision.

When I gave the exact same prompt to Manus AI, it took a different approach. It did not try to visually parse a property portal. It immediately found and queried the public-facing government API. The system defaulted to a data pipe because visual scraping is a waste of time and compute.

There is a catch. Manus could only use the API because the Singapore government makes its HDB data public. What happens when you ask an agent for proprietary market intelligence hidden behind a corporate login screen?

Theoretically, an advanced agent with computer control could act on your behalf. It could take over your browser, enter your credentials, navigate the paywalled portal, and visually extract the data.

This is the ultimate example of a broken workflow. Forcing a vision model to navigate a bespoke corporate dashboard just to retrieve a single market sizing figure is highly inefficient. The chances are high that it clicks the wrong dropdown, fails to clear a pop-up window, and gets stuck in a doom loop burning through endless tokens while trying to fix a broken UI path.

Without a direct integration like a private API or the Model Context Protocol (MCP), agentic retrieval is a costly gamble. If you have direct access to that information from an API source, the system pulls the exact official figures in milliseconds for a fraction of a cent.

## Beyond the Open Web

This economic reality also applies to written analysis.

When asking an AI to summarise consumer trends in Southeast Asia, companies are no longer just scraping the open web. Many now use internal systems like Microsoft Copilot or custom Writer AI agents connected to their SharePoint.

Relying on vector search to retrieve text chunks and forcing an LLM to synthesise them is still computationally heavy and less precise than a structured query.

Retrieving verified analysis through a direct connection like Euromonitor's Insights API is a far more effective way to augment an agent's knowledge. APIs come with metadata. You can pinpoint the exact geography, industry, and publication date instantly. Instead of paying an AI to process retrieved chunks just to see if they are relevant, the metadata does the filtering for you.

## The Hybrid Reality

This principle applies to both written analysis and hard numbers. It is why we adapted our own architecture at Euromonitor. When we added Text-to-SQL to Passport AI in August 2025, the goal was to bypass the search interface entirely. When a client asks a data question, the system translates their plain English directly into a database query. It pulls the structured data straight from the source.

You cannot build a clean API for every piece of information on the internet. The reality is a hybrid model. Businesses will deploy agents to navigate the unstructured world where APIs do not exist.

Leaders need to look closely at how work actually gets done and match the task to the right tool.

Separate the two functions. Subscribe to high quality data pipes (like Euromonitor's APIs and SQL databases) to handle the cheap, instant work of retrieval. Save your expensive AI agents and your human analysts for the actual work of research.
