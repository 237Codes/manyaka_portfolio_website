# manyaka_portfolio_website

This is a document for my portfolio website. I will be documenting my progess here. You can find important notes about the various sections in this document.

Hosting : https://Vercel.com

# Things to note about the experience section

When creating the experience section, I decided to try out the react vertical component
and I noticed a few things

1- The vertical component is hidden by default. I firstly tried to set <VerticalTimelineElement visible={true}>.
This creates a new problem which does not allow me do animations since I forced the timeline component to display
true, it display is always visible

# Making the projects clickable

To make the projects clickable so that I can redirect the user to another site, I will just need
to wrap them in an anchor tag

# Contact me section

Using <input> tag for users email because it is a single line. For multiple lines of input, I will rather use a text area tag

5:06 email form validation
5:20 send email using Resend email
5:52 installing react email components
6:13 customizing alert message
6:16 Adding a footer
6:35 Dark Mode system setting fixes

I am using resend for the email. Resend is a popular for emails made by the same team as React Email
https://resend.com/login?redirectedFrom=%2Foverview

Using "react hot toast" to customize the alert message that pops up on submit

# Theme switch section

To keep traack of the current theme when the user reloads or revisits the website, I am using the windows.localStorage("theme", "dark") function

When I have track of it, we need to get the theme when the page is about to display again
using useEffect, then set the theme to the local them if any exists

I can also keep track of the default theme on the users computer using media query
windows.matchMedia("(prefers-color0scheme: dark)").matches

# duplicate a line

shift + option + arrow down key
