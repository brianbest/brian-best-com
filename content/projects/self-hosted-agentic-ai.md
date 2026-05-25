---
title: "Self-Hosted Agentic AI Deployment"
description: "A dual-instance deployment of an open-source agentic AI system on an always-on home server — a three-stack Docker Compose setup with a shared Caddy reverse proxy and isolated credentials, volumes, and networks per instance. A personal sandbox for validating multi-tenant agent isolation patterns."
tags: ["Agentic AI", "Docker Compose", "Caddy", "Self-Hosted", "Linux"]
url: ""
featured: true
image: ""
---

A dual-instance deployment of an open-source agentic AI system running on an always-on home
server. The architecture uses a three-stack Docker Compose approach: one shared Caddy reverse
proxy in front, and a fully isolated stack per instance — separate credentials, volumes, and
networks — so the two agents can't reach each other's state.

I use it as a personal sandbox for validating multi-tenant agent isolation patterns: what it
takes to run several autonomous agents on one box without letting them leak into one another.
