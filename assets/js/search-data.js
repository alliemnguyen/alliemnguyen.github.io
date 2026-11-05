---
permalink: /assets/js/search-data.js
---
// Everything listed here shows up in the search box (ctrl+k / cmd+k).
// Pages in the menu bar are added automatically.
const ninja = document.querySelector("ninja-keys");
const goTo = (url) => () => { window.location.href = url; };
const openNew = (url) => () => { window.open(url, "_blank"); };

ninja.data = [
  // Pages
  {%- assign sorted_pages = site.pages | sort: "nav_order" %}
  {%- for p in sorted_pages %}
    {%- if p.permalink == '/' or p.nav == true %}
  {
    id: {{ "page-" | append: p.title | slugify | jsonify }},
    title: {{ p.title | jsonify }},
    section: "Pages",
    handler: goTo({{ p.url | relative_url | jsonify }}),
  },
    {%- endif %}
  {%- endfor %}

  // Links
  {%- if site.email %}
  { id: "link-email", title: "Email", section: "Links", handler: openNew({{ "mailto:" | append: site.email | jsonify }}) },
  {%- endif %}
  {%- if site.scholar_userid %}
  { id: "link-scholar", title: "Google Scholar", section: "Links", handler: openNew({{ "https://scholar.google.com/citations?user=" | append: site.scholar_userid | jsonify }}) },
  {%- endif %}
  {%- if site.orcid_id %}
  { id: "link-orcid", title: "ORCID", section: "Links", handler: openNew({{ "https://orcid.org/" | append: site.orcid_id | jsonify }}) },
  {%- endif %}
  {%- if site.linkedin_username %}
  { id: "link-linkedin", title: "LinkedIn", section: "Links", handler: openNew({{ "https://www.linkedin.com/in/" | append: site.linkedin_username | jsonify }}) },
  {%- endif %}
  {%- if site.github_username %}
  { id: "link-github", title: "GitHub", section: "Links", handler: openNew({{ "https://github.com/" | append: site.github_username | jsonify }}) },
  {%- endif %}

  // Theme
  {%- if site.enable_darkmode %}
  { id: "theme-light", title: "Switch to light theme", section: "Theme", handler: () => setTheme("light") },
  { id: "theme-dark", title: "Switch to dark theme", section: "Theme", handler: () => setTheme("dark") },
  {%- endif %}
];
