# Afterglow event-business integration research

Reviewed August 17, 2026. This file records the supported connection path used in the `/demo` dashboard. Vendor access, available fields, pricing-plan requirements, and approval requirements can change; confirm them during discovery for every client.

| Platform | Typical event-business role | Verified connection path | Primary source |
| --- | --- | --- | --- |
| HoneyBook | CRM, projects, proposals, payments | Supported Zapier integration using a HoneyBook API key; bridge capabilities and custom-field support are limited by HoneyBook | https://help.honeybook.com/en/articles/2209205-automate-tasks-with-zapier |
| Check Cherry | Bookings, events, leads, payments, availability | First-party REST API and webhooks with scoped integration keys | https://www.checkcherry.com/developer |
| Dubsado | CRM, leads, projects, contracts, payments | Supported Zapier integration using a Dubsado API key; triggers and actions are documented | https://help.dubsado.com/en/articles/15920601-dubsado-triggers-and-actions-in-zapier |
| Tripleseat | Venue and hospitality sales, events, bookings | OAuth 2.0 API plus configurable webhooks | https://support.tripleseat.com/hc/en-us/articles/19394408627479-API-Authentication and https://support.tripleseat.com/hc/en-us/articles/40075780832919-API-Webhooks |
| QuickBooks Online | Accounting, invoices, payments, cash flow | REST and GraphQL accounting APIs with OAuth 2.0 scopes | https://developer.intuit.com/app/developer/qbo/docs/learn/explore-the-quickbooks-online-api |
| Stripe | Payments, refunds, invoices, subscriptions | REST API and event webhooks | https://docs.stripe.com/api |
| Square | Payments, customers, bookings, invoices | First-party APIs, OAuth, and webhook subscriptions | https://developer.squareup.com/reference/square |
| Google Ads | Campaigns, spend, conversions, search terms | Google Ads API with OAuth and developer-token requirements | https://developers.google.com/google-ads/api |
| Google Analytics 4 | Website traffic, events, conversions, journeys | Google Analytics Data API | https://developers.google.com/analytics/devguides/reporting/data/v1 |
| Google Search Console | Queries, pages, clicks, impressions, rankings | Search Console API | https://developers.google.com/webmaster-tools |
| Google Calendar | Events, dates, attendees, availability inputs | RESTful Calendar API | https://developers.google.com/workspace/calendar/api/guides/overview |
| Google Sheets | Legacy lead lists, mapping queues, operational records | RESTful Sheets API for reading and writing spreadsheet data | https://developers.google.com/workspace/sheets/api/guides/concepts |
| Slack | Team alerts, approvals, operational notifications | Slack Web API and OAuth | https://api.slack.com/web |
| Mailchimp | Audiences, campaigns, marketing automations | Mailchimp Marketing API and webhooks | https://mailchimp.com/developer/marketing/api/ |
| Twilio | SMS, calls, WhatsApp, communication events | REST APIs and webhooks | https://www.twilio.com/docs/usage/api |

## Implementation rule

The client-facing dashboard should never imply that every platform exposes the same level of access. Use three honest labels:

- **API** — supported first-party programmatic access.
- **API + webhooks** — first-party access plus real-time event notifications.
- **Bridge** — a vendor-supported automation connector such as Zapier, often with a smaller field surface than a public API.

The demo uses fictional numbers and does not connect to vendor accounts.
