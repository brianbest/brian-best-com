---
title: "MCP Server for Email Workflows"
description: "A Model Context Protocol server that exposes IMAP/SMTP capabilities to AI agents, letting them autonomously read and send email. Built in TypeScript with imapflow, nodemailer, and the MCP SDK, using Proton Mail Bridge as the transport layer."
tags: ["MCP", "TypeScript", "IMAP/SMTP", "AI Agents"]
url: ""
featured: true
image: ""
---

A Model Context Protocol (MCP) server that gives AI agents first-class email capability —
reading and sending mail autonomously over IMAP/SMTP.

Stack: `imapflow` and `nodemailer` for the mail transport, `@modelcontextprotocol/sdk` to expose
the tools to any MCP-compatible client, and Proton Mail Bridge as the secure transport layer so
the agent talks to an end-to-end-encrypted mailbox over a local bridge rather than the open
internet.
